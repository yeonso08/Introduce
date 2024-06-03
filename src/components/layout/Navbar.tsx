import Link from 'next/link';
import { useEffect, useState } from 'react';
import SideBar from "@/components/layout/SideBar";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [themeIsDark, setThemeIsDark] = useState(false);
const [sideBar, setSideBar] = useState(false);

    const themeModeHandle = (e: React.MouseEvent) => {
        e.preventDefault();
        const newThemeIsDark = !themeIsDark;
        setThemeIsDark(newThemeIsDark);
        localStorage.theme = newThemeIsDark ? "dark" : "light";
    };

    useEffect(() => {
        if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setThemeIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setThemeIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        // 테마 상태가 변경될 때마다 클래스를 업데이트
        if (themeIsDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [themeIsDark]); // themeIsDark 상태를 의존성 배열에 추가

    const handleNavClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };
    return (
        <nav className='flex justify-between items-center h-16 bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-sm font-mono text-lg md:px-32'>
            <Link href='/'>
                <div className='pl-8 text-xl font-thin'>Jaeyeon Hwang</div>
            </Link>
            <div className='pr-8 md:hidden text-2xl flex'>
                <button onClick={() => setSideBar(!sideBar)}>
                    <FaBars />
                </button>
            </div>
            <SideBar isOpen={sideBar} setIsOpen={setSideBar} theme={themeIsDark} setIsTheme={setThemeIsDark} />
            <div className='pr-8 md:flex hidden'>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                    <div className='p-4 text-lg font-thin'>About</div>
                </a>
                <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
                    <div className='p-4 text-lg font-thin'>Skills</div>
                </a>
                <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
                    <div className='p-4 text-lg font-thin'>Projects</div>
                </a>
                <a href="#career" onClick={(e) => handleNavClick(e, 'career')}>
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