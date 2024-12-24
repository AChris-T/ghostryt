import '../globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full  max-w-[1440px] mx-auto">{children}</body>
    </html>
  );
}