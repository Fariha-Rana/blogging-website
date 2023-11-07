import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <div className="mb-2  flex flex-wrap items-center justify-center text-lg">
        <Link href={"#"} className='p-2'>
          <FaFacebook/>
        </Link>
        <Link href={"#"} className='p-2'>
          <FaTwitter/>
        </Link>
        <Link href={"#"} className='p-2'>
          <FaInstagram/>
        </Link>
      </div>
      <p className=' text-sm'>&copy; {new Date().getFullYear()} JavaScriptGuru</p>
    </footer>
  );
};

export default Footer;
