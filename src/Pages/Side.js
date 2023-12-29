import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
const Side = () => {
  return (
    <div class="hidden md:flex fixed flex-col bottom-[150px] left-[0.5rem]">
      <ul>
        <li class="w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft">
          <a
            class="flex justify-between items-center w-full  text-[#f9b82c]  duration-300 keychainify-checked"
            href="https://www.linkedin.com/in/renzo-fernandez-2038391b7/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li class="w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft">
          <a
            class="flex justify-between items-center w-full text-[#f9b82c]  duration-300 keychainify-checked"
            href="https://github.com/renzoFernandez"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li class="w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft">
          <a
            class="flex justify-between items-center w-full text-[#f9b82c]  duration-300 keychainify-checked"
            href="https://drive.google.com/file/d/1gbUsCbvZkuoCGG1m--fszhRPsedGGxol/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FaFilePdf size={30} />
          </a>
        </li>
      </ul>
      <div class="w-[2px] h-[140px] flex fixed bottom-[0px] left-[1.15rem] border border-[#0a192f]  mx-auto mt-2 animate__animated animate__backInUp"></div>
    </div>
  );
};
export default Side;
