import Link from 'next/link';
import { GrOverview } from 'react-icons/gr';

export default function SmallCard({ color, title, figure, veiw, reactions }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex flex-col w-full gap-4 px-5 py-3 rounded-lg poppins"
    >
      <h3 className="text-[#161E54] font-medium text-[18px]">{title}</h3>
      <h3 className="text-[#161E54] font-medium text-[36px]">{figure}</h3>
      <Link
        href={'#'}
        className="flex items-center gap-1 text-sm text-red-100 cursor-pointer"
      >
        {reactions} {veiw}
      </Link>
    </div>
  );
}
