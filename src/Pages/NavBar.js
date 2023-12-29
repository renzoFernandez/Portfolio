import { Link } from "react-scroll";
const NavBar = () => {
  return (
    <div
      id="navbar"
      class="fixed w-full h-[65px] flex justify-between items-center px-4 bg-slate-100  text-[#233554] shadow-sm shadow-neutral-400 font-semibold z-50 "
    >
      <div></div>
      <ul class="hidden items-center justify-end md:flex animate__animated animate__backInRight">
        <li class="hover:text-pink-600 duration-300 px-4 cursor-pointer">
          <Link activeClass="active" smooth spy to="AboutMe">
            Inicio
          </Link>
        </li>
        <li class="hover:text-pink-600 duration-300 px-4 cursor-pointer">
          <Link activeClass="active" smooth spy to="Skills">
            Habilidades
          </Link>
        </li>
        <li class="hover:text-pink-600 duration-300 px-4 cursor-pointer">
          <Link activeClass="active" smooth spy to="Work">
            Proyectos
          </Link>
        </li>
        <li class="hover:text-pink-600 duration-300 px-4 cursor-pointer">
          <Link activeClass="active" smooth spy to="contact">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
