import Link from 'next/link';

export default function Navigation() {
    return (
        <nav>
            <ul className='nav-links'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
        </nav>
    )
}
