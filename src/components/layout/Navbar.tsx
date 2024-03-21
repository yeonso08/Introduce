import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {

    const [themeIsDark, setThemeIsDark] = useState(false);

    const themeModeHandle = (e: React.MouseEvent) => {
        e.preventDefault();
        localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
        document.documentElement.classList.toggle("dark");
        setThemeIsDark(!themeIsDark);
    };

    useEffect(() => {
        if (localStorage.theme === "dark") {
            setThemeIsDark(true);
        } else {
            setThemeIsDark(false);
        }
    }, []);
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
                <a href="#skills">
                    <div className='p-4 text-lg font-thin'>Skills</div>
                </a>
                <a href="#projects">
                    <div className='p-4 text-lg font-thin'>Projects</div>
                </a>
                <a href="#career">
                    <div className='p-4 text-lg font-thin'>Career</div>
                </a>
                <button
                    className='rounded-full transition duration-300 ease-in-out transform hover:scale-110 dark:focus:ring-offset-white dark:focus:ring-black'
                    onClick={themeModeHandle}
                >
                    {themeIsDark ? "🌙 Dark" : "☀️ Light"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;