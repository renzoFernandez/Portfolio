import { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nmiacyl",
        "template_kjcpoxe",
        form.current,
        "BSoh_6IBStFiCgQMK"
      )
      .then(
        (result) => {
          toast.success("Email enviado");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      class="flex w-full md:w-[90%] min-h-screen my-auto mx-auto text-[#0a192f] bg-slate-100 "
    >
      <div class="max-w-[750px] m-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h1 class="font-bold text-4xl  underline decoration-pink-600 ">
            Contacto
          </h1>
          <p class=" py-4 font-medium text-[#f9b82c]">
            // Envíame un mensaje o un correo electrónico - renzofer4@gmail.com
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          class="max-w-[750px] m-auto p-4 flex flex-col justify-center w-full h-full aos-init aos-animate"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Nombre"
            class="bg-slate-300  text-[#0a192f]  placeholder:text-[#41577d]  p-2 mb-4 rounded"
          />

          <input
            type="email"
            name="from_name"
            placeholder="Email"
            class="bg-slate-300  text-[#0a192f]  placeholder:text-[#41577d]  p-2 mb-4 rounded"
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            rows="10"
            class="bg-slate-300  text-[#0a192f]  placeholder:text-[#41577d]  p-2 mb-4 rounded"
          />
          <div class="w-full flex justify-center items-center">
            <button
              type="submit"
              class="w-full max-w-[130px] text-[#233554]  border-[#f9b82c]   font-semibold border-2 rounded px-6 py-2 my-2 flex justify-center items-center hover:bg-pink-600  hover:border-pink-600 hover:text-white duration-300"
            >
              Enviar
            </button>
          </div>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Contact;
