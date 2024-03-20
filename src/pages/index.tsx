import { useEffect, useState } from 'react';

import About from '@/components/about/about';
import Skills from '@/components/skills/skills';
import Projects from '@/components/projects/projects';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const [text, setText] = useState<string>('');
  const fullText = '안녕하세요. 프론트엔드 개발자 황재연입니다.';

  useEffect(() => {
    let index: number = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 200); // 타이핑 속도(밀리초 단위)

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {/* 배경 이미지 */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/mainImage.png')" }}></div>

      {/* 어두운 오버레이 */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50"></div>

      {/* 내용 (네비게이션 바, 푸터, 본문 등) */}
      <div className="relative z-10 flex justify-center items-center h-full">
        {/* <p className="text-white text-6xl border-r-2 border-white p-2 animate-blink"> */}
        <p className="text-white text-6xl font-bold p-2 animate-blink border-r-2 border-white">
          {text}
        </p>
      </div>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}