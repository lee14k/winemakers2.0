'use client'
import Image from 'next/image'
import Link from 'next/link'
export default function Headbanner () {
    return (
        <div className="banner">
            <Image
                src='/winelogov3.png'
                width={700}
                height={700}
            />
            <Link href="kaileehamre.com/product/new-annual-membership">
            <button className='join'>Join Us Now!</button>
            </Link>
        </div>
    )
}