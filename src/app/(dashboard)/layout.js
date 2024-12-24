import PageHeader from '@/constant/PageHeader';
import '../globals.css';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex max-w-[1440px] mx-auto  h-">
          <div className="w-[90px] hidden lg:flex md:w-[280px]  shadow-lg overflow-y-auto custom-scrollbar fixed h-[100vh] bg-[B2B2B2]">
            <Sidebar />
          </div>
          <div className="bg-white lg:ml-[280px] ml-[0px] w-full ">
            <div className=" h-[90px] mb-[22px] border-b-[1px]  shadow-lg border-[#F1F1F1] flex w-full px-5 items-center">
              <PageHeader />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
