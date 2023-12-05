import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-white text-black p-10">
      <h2 className="text-4xl font-bold mb-4">skills</h2>
      <div className="text-lg grid grid-cols-[2fr,1fr,1fr,1fr]">
        <div></div>
        <div>
          <div className="mb-4 flex items-center">
            <IoLogoJavascript className="text-yellow-500 w-8 h-8" />
            <span className="ml-2">JavaScript</span>
          </div>
          <div className="mb-4 flex items-center">
            <SiTypescript className="text-blue-600 w-8 h-8" />
            <span className="ml-2">TypeScript</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaReact className="text-blue-400 w-8 h-8" />
            <span className="ml-2">React</span>
          </div>
          <div className="mb-4 flex items-center">
            <SiNextdotjs className="w-8 h-8"/>
            <span className="ml-2">Next.js</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaVuejs className="text-green-600 w-8 h-8" />
            <span className="ml-2">Vue</span>
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-center">
            <FaGitAlt className="text-orange-600 w-8 h-8" />
            <span className="ml-2">Git</span>
          </div>
          <div className="mb-4 flex items-center">
            <img width="32" height="32" src="https://img.icons8.com/color-glass/48/slack-new.png" alt="slack-new" />
            <span className="ml-2">Slack</span>
          </div>
          <div className="mb-4 flex items-center">
            <SiNotion className="w-8 h-8"/>
            <span className="ml-2">Notion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
