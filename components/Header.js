import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className='container mx-auto'>
        <div className="flex items-center justify-between w-full">
          <Link href={'/'} className="text-white text-3xl xl:text-4xl font-sans">
            <span className="font-bold">Gouri</span>
            <span className="font-light">nandhana</span>
            <span className="text-[#76f124]">.</span>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;