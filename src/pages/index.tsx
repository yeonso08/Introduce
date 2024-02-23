import About from '@/components/about/about';
import Skills from '@/components/skills/skills';
import Projects from '@/components/projects/projects';
import Footer from '@/components/layout/Footer';
import { motion } from "framer-motion"
import Main from '@/components/main/Main';

export default function Home() {
  const sentence = "안녕하세요 프론트엔드 개발자 황재연 입니다.";


  return (
    <div className="relative h-screen">
      {/* 배경 이미지 */}
      {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/mainImage.png')" }}></div> */}

      {/* 어두운 오버레이 */}
      {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50"></div> */}

      {/* 내용 (네비게이션 바, 푸터, 본문 등) */}
      {/* <div className="relative z-10 flex justify-center items-center h-full">
        {sentence.split('').map((char, index) => {
          // 랜덤 시간을 생성합니다. (예: 1초에서 4초 사이)
          const duration = Math.random() * 3 + 1;

          return (
            <motion.div
              key={index}
              animate={{ x: [-300, 0], rotate: 360 }}
              transition={{ duration: duration }}
              className="text-white text-6xl font-bold p-2">
              {char}
            </motion.div>
          );
        })}
      </div> */}
      <Main />
      {/* <About />
      <Skills />
      <Projects />
      <Footer /> */}
    </div>
  );
}