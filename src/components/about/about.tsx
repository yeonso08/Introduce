import { IoPersonSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";

const About = () => {
  return (
      <div className={`bg-black text-white p-10`} id="about">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <div className="flex justify-center">
          <div>
            <div className="mb-2 text-sm font-semibold flex items-center sm:text-lg">
              <IoPersonSharp/>
              <span className="ml-2 text-sm font-semibold sm:text-lg">Jaeyeon Hwang</span>
            </div>
            <div className="mb-2 text-sm font-semibold flex items-center sm:text-lg">
              <FaBirthdayCake/>
              <span className="ml-2 text-sm font-semibold sm:text-lg">1997.08.25</span>
            </div>
            <div className="mb-2 text-sm font-semibold flex items-center sm:text-lg">
              <AiOutlineHome/>
              <span className="ml-2 text-sm font-semibold sm:text-lg">서울특별시 강동구</span>
            </div>
            <div className="mb-2 text-sm font-semibold flex items-center sm:text-lg">
              <MdOutlineEmail/>
              <span className="ml-2 text-sm font-semibold sm:text-lg">hjng0825@gmail.com</span>
            </div>
          </div>
          <div className="sm:p-16"></div>
          <div>
            <div className="mb-2 text-sm font-semibold flex items-center sm:text-lg">
              <CiPhone/>
              <span className="ml-2 text-sm font-semibold sm:text-lg">010-9985-3743</span>
            </div>
            <div className="mb-2 text-sm font-semibold flex items-center sm:text-lg">
              <FaGithub/>
              <a href="https://github.com/yeonso08" className="ml-2 text-sm font-semibold sm:text-lg">GIT</a>
            </div>
            <div className="mb-2 text-sm font-semibold flex items-center sm:text-lg">
              <SiBloglovin/>
              <a href="https://velog.io/@hjng0825" className="ml-2 text-sm font-semibold sm:text-lg">BLOG</a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
