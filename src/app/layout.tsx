import SakuraRain from '@/app/components/SakuraRain';
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
          <SakuraRain />
          <NavBar />
          <main className="pt-16">{children}</main>
       
      </body>
    </html>
  );
}
