'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md h-16 flex items-center justify-center">
      <ul className="flex gap-6">
        <li><Link href="/">Sobre mí</Link></li>
        <li><Link href="/projects">Proyectos</Link></li>
        <li><Link href="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}
