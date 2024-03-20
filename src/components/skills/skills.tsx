import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

import { useInView } from "react-intersection-observer";

const Skills = () => {

  return (
    <div  className={`bg-white text-black p-10 dark:bg-black dark:text-white`}>
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <div className="text-lg grid grid-cols-[2fr,1fr,1fr,1fr]">
        <div></div>
        <div>
          <div className="mb-4 flex items-center">
            <IoLogoJavascript className="text-yellow-500 w-8 h-8" />
            <span className="ml-2 text-lg font-semibold">JavaScript</span>
          </div>
          <div className="mb-4 flex items-center">
            <SiTypescript className="text-blue-600 w-8 h-8" />
            <span className="ml-2 text-lg font-semibold">TypeScript</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaReact className="text-blue-400 w-8 h-8" />
            <span className="ml-2 text-lg font-semibold">React</span>
          </div>
          <div className="mb-4 flex items-center">
            <SiNextdotjs className="w-8 h-8" />
            <span className="ml-2 text-lg font-semibold">Next.js</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaVuejs className="text-green-600 w-8 h-8" />
            <span className="ml-2 text-lg font-semibold">Vue</span>
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-center">
            <FaGitAlt className="text-orange-600 w-8 h-8" />
            <span className="ml-2 text-lg font-semibold">Git</span>
          </div>
          <div className="mb-4 flex items-center">
            <img width="32" height="32" src="https://img.icons8.com/color-glass/48/slack-new.png" alt="slack-new" />
            <span className="ml-2 text-lg font-semibold">Slack</span>
          </div>
          <div className="mb-4 flex items-center">
            <SiNotion className="w-8 h-8" />
            <span className="ml-2 text-lg font-semibold">Notion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
