'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Headbanner () {

  const handleButtonClick = () => {
    window.location.href = "https://wihomewinemakers.org/product/new-annual-membership/";
  };
    return (
        <div className="banner">
            <Image 
            src="/WVAlogo.png"
            height={300}
            width={300}
            className="my-20"
            />
       
            <button onClick={handleButtonClick} className='join'>Join Us Now!</button>
        </div>
    )
}