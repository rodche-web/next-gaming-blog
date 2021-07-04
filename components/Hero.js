import Link from 'next/link';

export default function Hero({image, title, slug}) {
    return (
        <div className='hero' style={{backgroundImage: `url(${image})`}}>
            <div className='hero-text'>
                <h1>{title}</h1>
                <Link href={`/blog/${slug}`}><a className='btn'>Read More</a></Link>
            </div>
        </div>
    )
}