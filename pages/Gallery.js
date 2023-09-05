'use client'
import Imagegallery from "/Components/Imagegallery";
import Navbar from "/Components/Navbar";
import Footer from "/Components/Footer";

// pages/index.js
export async function getStaticProps() {
  const res = await fetch('https:/kaileehamre.com/wp-json/wp/v2/media');
  const mediaItems = await res.json();

  // Organize the media items by their category.
  // You'd use the actual category ID or name from your WordPress setup.
  const categorizedMedia = {
    '2023': mediaItems.filter(item => item.categories.includes('2023')),
    // ... other categories
  };

  return {
    props: {
      categorizedMedia,
    },
  };
}

export default function Gallery () {
  return (
    <div>
      <Navbar/>
      <Imagegallery />
      <Footer/>
    </div>
  )
}