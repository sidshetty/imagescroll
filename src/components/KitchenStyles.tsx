import React from 'react';

const styles = [
  {
    name: 'Boho',
    description: 'Eclectic freedom with vibrant hues and whimsical patterns',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d'
  },
  {
    name: 'Industrial',
    description: 'Raw beauty with rugged textures and urban edge',
    image: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7'
  },
  {
    name: 'Minimal',
    description: 'Clean lines meet uncluttered spaces',
    image: 'https://images.unsplash.com/photo-1600607687644-c7f34c86fa36'
  },
  {
    name: 'Vintage',
    description: 'Timeless treasures with weathered charm',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea'
  },
  {
    name: 'Scandi',
    description: 'Clean lines and natural elements in harmony',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
  },
  {
    name: 'Glam',
    description: 'Luxurious textures with dazzling accents',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6981cf35b6'
  }
];

export const KitchenStyles: React.FC = () => {
  return (
    <section id="styles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Kitchen for every Style</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Select from our expertly designed options</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style) => (
            <div key={style.name} className="group relative overflow-hidden rounded-2xl">
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{style.name}</h3>
                <p className="text-white/90">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800">
            GET FREE QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};