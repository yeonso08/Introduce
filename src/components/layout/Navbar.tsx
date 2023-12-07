import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-sm font-mono text-lg md:px-32'>
            <Link href='/'>
                <div className='pl-8 text-lg font-thin'>Jaeyeon Hwang</div>
            </Link>
            <div className='px-4 cursor-pointer md:hidden'>
                아이콘
            </div>
            <div className='pr-8 md:flex hidden'>
                <a href="#about">
                    <div className='p-4 text-lg font-thin'>About</div>
                </a>
                <a href="#projects">
                    <div className='p-4 text-lg font-thin'>Projects</div>
                </a>
                <a href="#about">
                    <div className='p-4 text-lg font-thin'>Contact</div>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;