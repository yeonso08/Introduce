import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-gray-800 text-white relative shadow-sm font-mono'>
            <Link href='/'>
                <div className='pl-8'>JaeYeon</div>
            </Link>
            <div className='px-4 cursor-pointer md:hidden'>
                아이콘
            </div>
            <div className='pr-8 md:flex hidden'>
                <Link href='/about'>
                    <div className='p-4'>About</div>
                </Link>
                <Link href='/projects'>
                    <div className='p-4'>Projects</div>
                </Link>
                <Link href='/contact'>
                    <div className='p-4'>Contact</div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
