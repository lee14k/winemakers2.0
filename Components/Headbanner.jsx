'use client'
import Image from 'next/image'
export default function Headbanner () {
    return (
        <div className="banner">
            <Image
                src='/winelogov3.png'
                width={700}
                height={700}
            />
            <button className='join'>Learn More</button>
        </div>
    )
}