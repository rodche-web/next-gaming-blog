import Image from 'next/image';
import Link from 'next/link';
import {FaFacebookSquare, FaGithub, FaInstagramSquare} from 'react-icons/fa';

export default function AboutPage() {
    return (
        <div className='about-container'>
            
            <div className='about-image'>
                <Image src={'/images/portrait.jpeg'} width={250} height={250} />
            </div>

            <h1>Rodwin Chester</h1>
            <h3>Web Developer, History Buff, Autodidact</h3>
            <p>I first started coding as a kid on my dad's Commodore 64 by copying BASIC codes I read from programming magazines. I now work as a web developer with experience in Python and Javascript making all sorts of awesome websites.</p>
            <p>I made this website using Next.js, a React framework.</p>
            <h3>Follow me on</h3>
            <div className='about-icons'>
                <FaFacebookSquare />
                <FaInstagramSquare />
                <Link href='https://github.com/rodche-web'><FaGithub /></Link>
            </div>
            <Link href='/'>
                <a className='btn btn-back'>Go Back</a>
            </Link>
        </div>
    )
}