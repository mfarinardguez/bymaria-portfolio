import NavBar from '@/app/components/NavBar';
import './globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="bg-[url('/images/background.png')] pt-16">{children}</main>
      </body>
    </html>
  );
}
