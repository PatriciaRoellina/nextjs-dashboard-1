import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { chilanka } from '@/app/ui/fonts'; // Ubah chilanka menjadi chilanka

export default function AcmeLogo() {
  return (
    <div
      className={`${chilanka.className} flex flex-row items-center leading-none text-white`} // Ganti chilanka dengan chilanka
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
