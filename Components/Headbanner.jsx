'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Headbanner () {

  const handleButtonClick = () => {
    window.location.href = "https://kaileehamre.com/product/new-annual-membership";
  };
    return (
        <div className="banner">
            <Image 
            src="/WVAlogo.png"
            height={300}
            width={300}
            />
       
            <button onClick={handleButtonClick} className='join'>Join Us Now!</button>
        </div>
    )
}