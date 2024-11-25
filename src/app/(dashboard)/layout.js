import PageHeader from '@/constant/PageHeader';
import '../globals.css';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex max-w-[1440px] mx-auto  h-">
          <div className="w-[90px] hidden lg:flex md:w-[280px]  shadow-lg overflow-y-auto custom-scrollbar fixed h-[100vh] bg-white">
            <Sidebar />
          </div>
          <div className="bg-[#F7F4FF] lg:ml-[280px] ml-[0px] w-full py-7 px-6 lg:px-16">
            <PageHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
