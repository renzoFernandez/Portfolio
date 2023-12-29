import { FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <div
      id="Work"
      class="flex w-full md:w-[90%] min-h-screen my-auto mx-auto text-[#0a192f] dark:text-gray-300 bg-slate-100 dark:bg-[#0a192f]"
    >
      <div class="max-w-[750px] m-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h1 class="font-bold text-4xl  underline decoration-pink-600 ">
            Proyectos
          </h1>
          <p class=" py-4 font-medium text-[#f9b82c]">
            //Mira algunos de los proyectos mas recientes
          </p>
        </div>

        <div class="flex bg-slate-300 dark:bg-[#112240] bg-cover px-8 py-12 md:bg-transparent dark:md:bg-transparent md:p-0 mb-12 aos-init aos-animate">
          <div class="flex flex-col md:w-[60%] py-4">
            <h3 class="flex flex-col relative top-[-35px] text-2xl font-semibold">
              Aplicacion de paises
            </h3>
            <div class="md:p-4 md:w-[130%] rounded md:bg-slate-300 dark:md:bg-[#112240] z-10">
              <p class=" text-sm text-justify font-medium dark:font-normal">
                Una SPA que consume datos de una API externa y permite la
                visualizacion de informacion general y detallada todos los
                paises del mundo.Entre las funcionalidades que tiene esta
                aplicacion esta la de filtrar y ordenar los paises por
                diferentes variables como su continente, numero de
                poblacion,orden alfabetico. Ademas permite la creacion de
                actividades mediante un formulario controlado y asignarsela a
                algun pais
              </p>
            </div>
            <div class="flex md:w-[130%] z-10 pt-4">
              <ul class="flex flex-wrap text-sm font-medium text-[#4a6087] dark:text-slate-400">
                <li class="pr-4"> React</li>
                <li class="pr-4"> Redux</li>
                <li class="pr-4"> Node js</li>
                <li class="pr-4"> Express</li>
                <li class="pr-4"> PostreSQL</li>
                <li class="pr-4"> Sequalize</li>
                <li class="pr-4"> Tailwind</li>
              </ul>
            </div>
            <div class="flex relative bottom-[-20px]">
              <a
                class="flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300 keychainify-checked"
                href="https://github.com/renzoFernandez/PI-Contries-App/tree/main"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <a
            class="hidden md:flex w-[70%] h-[250px] my-auto z-0 overflow-hidden keychainify-checked"
            href="https://countriesandactivities.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <div class="bg md:flex w-full h-48 my-auto z-0 bg-cover bg-countries"></div>
          </a>
        </div>

        <div class="flex bg-slate-300 dark:bg-[#112240] bg-cover px-8 py-12 md:bg-transparent dark:md:bg-transparent md:p-0 mb-12 aos-init aos-animate">
          <div class="flex flex-col md:w-[60%] py-4">
            <h3 class="flex flex-col relative top-[-35px] text-2xl font-semibold">
              Aplicacion de Notas
            </h3>
            <div class="md:p-4 md:w-[130%] rounded md:bg-slate-300 dark:md:bg-[#112240] z-10">
              <p class=" text-sm text-justify font-medium dark:font-normal">
                Una SPA que te permite crear pequeños posteos los cuales cuentan
                con un titulo , una descripcion y una imagen opcional.Los mismos
                se pueden editar o eliminar.Para acceder a tus posteos necesitas
                loguearte primero.
              </p>
            </div>
            <div class="flex md:w-[130%] z-10 pt-4">
              <ul class="flex flex-wrap text-sm font-medium text-[#4a6087] dark:text-slate-400">
                <li class="pr-4"> React</li>
                <li class="pr-4"> Node js</li>
                <li class="pr-4"> Express</li>
                <li class="pr-4"> MongoDB</li>
                <li class="pr-4"> Cloudinary</li>
                <li class="pr-4"> Tailwind</li>
                <li class="pr-4"> JSON Web Token</li>
              </ul>
            </div>
            <div class="flex relative bottom-[-20px]">
              <a
                class="flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300 keychainify-checked"
                href="https://github.com/renzoFernandez/To-Do-app/tree/main"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <a
            class="hidden md:flex w-[70%] h-[250px] my-auto z-0 overflow-hidden keychainify-checked"
            href="https://to-do-omega-henna.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="bg md:flex w-full h-44 my-auto z-0 bg-cover bg-posts"></div>
          </a>
        </div>
        <div class="flex bg-slate-300 dark:bg-[#112240] bg-cover px-8 py-12 md:bg-transparent dark:md:bg-transparent md:p-0 mb-12 aos-init aos-animate">
          <div class="flex flex-col md:w-[60%] py-4">
            <h3 class="flex flex-col relative top-[-35px] text-2xl font-semibold">
              Mix2Pizza - E-commerce de Pizzas
            </h3>
            <div class="md:p-4 md:w-[130%] rounded md:bg-slate-300 dark:md:bg-[#112240] z-10">
              <p class=" text-sm text-justify font-medium dark:font-normal">
                Un E-commerce de pizzas el cual permite ver y comprar una gran
                variedad de pizzas, permitiendo el comprar pizzas ya cargadas o
                crear tu propia pizza. La aplicacion cuenta con login propio
                como tambien por medio de google, pasarela de pago, rutas
                protegidas, diferenciacion entre usuario normal y
                administrador,formularios controlados y envio de mails.
              </p>
            </div>
            <div class="flex md:w-[130%] z-10 pt-4">
              <ul class="flex flex-wrap text-sm font-medium text-[#4a6087] dark:text-slate-400">
                <li class="pr-4"> React</li>
                <li class="pr-4"> Redux</li>
                <li class="pr-4"> Node js</li>
                <li class="pr-4"> Express</li>
                <li class="pr-4"> PostreSQL</li>
                <li class="pr-4"> Cloudinary</li>
                <li class="pr-4"> Nodemailer</li>
              </ul>
            </div>
            <div class="flex relative bottom-[-20px]">
              <a
                class="flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300 keychainify-checked"
                href="https://github.com/Aixmar/GRUPO-3-FRONT"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                class="flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300 keychainify-checked"
                href="https://github.com/Aixmar/GRUPO-3-BACK"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <a
            class="hidden md:flex w-[70%] h-[250px] my-auto z-0 overflow-hidden keychainify-checked"
            href="https://mix2pizza.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="bg md:flex w-full h-44 my-auto z-0 bg-cover bg-pizza"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
