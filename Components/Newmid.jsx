import React from 'react';

function Newmid() {
  const images = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
  ];

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={images[0]} />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={images[1]} />
          </div>
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={images[2]} />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={images[3]} />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={images[4]} />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={images[5]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newmid;
