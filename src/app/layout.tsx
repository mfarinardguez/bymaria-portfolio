import { NextIntlClientProvider } from 'next-intl';
import SakuraRain from '@/app/components/SakuraRain';
import NavBar from '@/app/components/NavBar';
import './globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../locales/${params.locale}/common.json`)).default;
  } catch (error) {
    return (
      <html>
        <body>
          <h1>404 - Locale Not Found</h1>
        </body>
      </html>
    );
  }

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <SakuraRain />
          <NavBar />
          <main className="pt-16">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

