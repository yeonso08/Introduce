import React, { useEffect, useRef } from 'react';

const SideBar = ({ isOpen, setIsOpen, theme, setIsTheme }: { isOpen: boolean, setIsOpen: (b: boolean) => void, theme: boolean, setIsTheme: (b: boolean) => void }) => {
    const sidebarRef = useRef<HTMLDivElement>(null); // 사이드바 DOM 요소를 참조하기 위한 ref 생성

    const handleCloseSideBar = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // 사이드바 DOM 요소가 이벤트 타겟을 포함하고 있지 않으면 사이드바를 닫음
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // 'mousedown' 이벤트 리스너 등록
        document.addEventListener('mousedown', handleClickOutside);

        // 클린업 함수: 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsOpen]); // 의존성 배열에 setIsOpen 추가

    return (
        <div
            ref={sidebarRef} // ref 속성을 사용하여 사이드바 div에 참조 연결
            className={`fixed top-0 right-0 h-full w-52 bg-black text-white z-40 transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
            <a href="#about" onClick={handleCloseSideBar}>
                <div className="p-5 cursor-pointer">About</div>
            </a>
            <a href="#skills" onClick={handleCloseSideBar}>
                <div className="p-5 cursor-pointer">Skills</div>
            </a>
            <a href="#projects" onClick={handleCloseSideBar}>
                <div className="p-5 cursor-pointer">Projects</div>
            </a>
            <a href="#career" onClick={handleCloseSideBar}>
                <div className="p-5 cursor-pointer">Career</div>
            </a>
            <button
                className='p-5 cursor-pointer'
                onClick={() => setIsTheme(!theme)}
            >
                {theme ? "Dark 🌙" : "Light ☀️"}
            </button>
        </div>
    );
};

export default SideBar;