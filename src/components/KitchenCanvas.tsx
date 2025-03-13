import React, { useEffect, useRef } from 'react';

interface KitchenCanvasProps {
  onFrameChange: (frame: number) => void;
}

export const KitchenCanvas: React.FC<KitchenCanvasProps> = ({ onFrameChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameCountRef = useRef(100);
  const currentFrameRef = useRef(frameCountRef.current);
  
  // Speed control factor: Higher values = slower animation
  const scrollSpeedFactor = 1;

  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= frameCountRef.current; i++) {
        const img = new Image();
        const frameNumber = String(i).padStart(4, '0');
        // Using placeholder images - replace with your actual image sequence
        img.src = `/sequence/${frameNumber}.png`;
        imagesRef.current.push(img);
      }
    };

    const handleScroll = () => {
      const scrollFraction = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * scrollSpeedFactor;
      const frameIndex = Math.min(
        frameCountRef.current - 1,
        Math.floor(scrollFraction * frameCountRef.current)
      );
      
      // Ensure the frame number stays within bounds
      const targetFrame = Math.max(1, frameCountRef.current - frameIndex);
      currentFrameRef.current = Math.min(frameCountRef.current, Math.max(1, targetFrame));
      
      // Notify parent component about frame change
      onFrameChange(currentFrameRef.current);
      
      renderFrame();
    };

    const renderFrame = () => {
      if (!canvasRef.current) return;
      
      const context = canvasRef.current.getContext('2d');
      if (!context) return;

      const currentImage = imagesRef.current[currentFrameRef.current - 1];
      if (!currentImage) return;

      // Set canvas size to match viewport
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      // Draw image covering the entire canvas
      context.drawImage(currentImage, 0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      renderFrame();
    };

    preloadImages();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [onFrameChange]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
    />
  );
};