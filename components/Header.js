import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <div className="container">
                <Link href="/">
                    <Image src={'/images/logos/logo.png'} width={100} height={100} />
                </Link>
            </div>
        </header>
    )
}
