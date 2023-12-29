const AboutMe = () => {
  return (
    <div
      id="AboutMe"
      class="w-full md:w-[90%] mx-auto min-h-screen flex flex-col bg-slate-100 "
    >
      <div class="max-w-[1000px] m-auto px-8 flex flex-col justify-center h-full">
        <p class="text-xl text-pink-600 my-4 ">Hola,mi nombre es</p>
        <h1 class="text-4xl md:text-7xl font-bold text-[#0a192f] ">
          Renzo Fernandez
        </h1>
        <h2 class="text-3xl md:text-6xl font-bold text-[#f9b82c] max-w-[750px] ">
          Soy un Desarrollador Full Stack
        </h2>
        <p class="text-slate-700 font-medium  py-4 max-w-[750px] text-justify my-4">
          Desde mi niñez, siempre me ha gustado el mundo de la tecnología, me
          gustaba jugar videojuegos con mis amigos, y tratar de descubrir cosas
          nuevas en internet.En mi adolescencia conoci el mundo de la
          programacion y mi cabeza exploto. Me parecio increible que puedas
          crear caulquier cosa que te imagines,es por eso que decidi convertirme
          en desarrollador.También disfruto jugar al padel en mi tiempo libre.
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1gbUsCbvZkuoCGG1m--fszhRPsedGGxol/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            class="keychainify-checked"
          >
            <button class="text-[#233554]  border-[#f9b82c]   font-semibold border-2 rounded px-6 py-5 my-2 flex items-center hover:bg-pink-600  hover:border-pink-600 hover:text-white duration-300 ">
              Mira mi curriculum
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
