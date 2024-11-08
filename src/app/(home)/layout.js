import localFont from 'next/font/local';
import '../globals.css';
import HomeNav from '@/components/HomeNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Marketing Page',
  description: 'This is Marketing Page',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full max-w-[1440px] mx-auto">
          <HomeNav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
