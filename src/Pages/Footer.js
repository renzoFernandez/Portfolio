import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";

const Footer = () => {
  return (
    <div class="w-full md:w-[90%] mx-auto flex flex-col bg-slate-100 dark:bg-[#0a192f] text-center justify-center items-center">
      <ul class="animate__bounce flex justify-center items-center w-[300px]">
        <li class="w-[30px] h-[50px] mx-auto flex justify-between items-center">
          <a
            class="flex justify-between items-center w-full  text-[#f9b82c] dark:text-white duration-300 keychainify-checked"
            href="https://www.linkedin.com/in/renzo-fernandez-2038391b7/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li class="w-[30px] h-[50px]  mx-auto flex justify-between items-center">
          <a
            class="flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300 keychainify-checked"
            href="https://github.com/renzoFernandez"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li class="w-[30px] h-[50px]  mx-auto flex justify-between items-center">
          <a
            class="flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300 keychainify-checked"
            href="https://drive.google.com/file/d/1gbUsCbvZkuoCGG1m--fszhRPsedGGxol/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FaFilePdf size={30} />
          </a>
        </li>
      </ul>
      <span class="text-black font-medium my-2">
        Desarrolado por Renzo Fernandez
      </span>
    </div>
  );
};
export default Footer;
