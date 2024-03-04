
import Image from 'next/image';
import logo from '../assets/Icon.png';

import Link from 'next/link';

export default function Nav() {
    return(
        <div className="container py-12 mx-auto">
          <div className="grid grid-cols-2 place-content-end">
          <Link href="/"  className="flex justify-start">
            <Image src={logo} alt="logo"></Image>
            <h6 className="ml-2 self-center font-bold text-xl">E-Comm</h6>
          </Link>

          <nav>
          <ul className="flex gap-8 flex-row-reverse">
            <li><Link className="uppercase p-2" href="/not-found">Contact</Link></li>
            <li><Link className="uppercase p-2" href="/not-found">Belt</Link></li>
            <li><Link className="uppercase p-2" href="/not-found">Sneakers</Link></li>
            <li><Link className="uppercase p-2" href="not-found">Bag</Link></li>
            <li><Link className="uppercase p-2" href="/">Home</Link></li>
          </ul>
        </nav>
          </div>
          
          
        </div>
    )
}