import { IoPersonSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-black text-white p-10">
      <h2 className="text-4xl font-bold mb-4">About</h2>
      <div className="text-lg grid grid-cols-[2fr,1fr,1fr,1fr]">
        <div>사진</div>
        <div>
          <div className="mb-2 flex items-center">
            <IoPersonSharp />
            <span className="ml-2">Jaeyeon Hwang</span>
          </div>
          <div className="mb-2 flex items-center">
          <FaBirthdayCake />
            <span className="ml-2">1997.08.25</span>
          </div>
          <div className="mb-2 flex items-center">
          <AiOutlineHome />
            <span className="ml-2">서울특별시 강동구</span>
          </div>
          <div className="mb-2 flex items-center">
          <MdOutlineEmail />
            <span className="ml-2">hjng0825@gmail.com</span>
          </div>
        </div>
        <div>
        <div className="mb-2 flex items-center">
          <CiPhone />
            <span className="ml-2">010-9985-3743</span>
          </div>
          <div className="mb-2 flex items-center">
          <FaGithub />
            <a href="https://github.com/yeonso08" className="ml-2">GIT</a>
          </div>
          <div className="mb-2 flex items-center">
          <SiBloglovin  />
            <a href="https://velog.io/@hjng0825" className="ml-2">BLOG</a>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default About;
