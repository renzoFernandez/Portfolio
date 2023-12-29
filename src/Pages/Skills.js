/* eslint-disable react/jsx-no-comment-textnodes */
import HTML from "../Img/html.png";
import css from "../Img/css.png";
import js from "../Img/js.png";
import node from "../Img/node.png";
import react from "../Img/react.png";
import redux from "../Img/redux.png";
import mongo from "../Img/mongo.png";
import postgre from "../Img/Postgresql.png";
import github from "../Img/github.png";
const Skills = () => {
  return (
    <div
      id="Skills"
      class="w-full md:w-[90%] mx-auto min-h-screen flex bg-slate-100 "
    >
      <div class="max-w-[750px] m-auto px-5 py-4 flex flex-col justify-center h-full w-full">
        <div>
          <h1 class="font-bold text-4xl  underline decoration-pink-600 ">
            Habilidades
          </h1>
          <p class=" py-4 font-medium text-[#f9b82c]">
            //Estas son las habilidades con las que he trabajado
          </p>
        </div>
        <div className="w-full grid grid-cols-4 sm:grid-cols-3 gap-4 text-center py-8 font-bold ">
          <div className="bg-slate-200  shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML" />
            <p className="mt-4">HTML</p>
          </div>
          <div className="bg-slate-200  shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="HTML" />
            <p className="mt-4">CSS</p>
          </div>
          <div className="bg-slate-200  shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={js} alt="HTML" />
            <p className="mt-4">JAVASCRIPT</p>
          </div>
          <div className="bg-slate-200  shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="HTML" />
            <p className="mt-4">NODE JS</p>
          </div>
          <div className="bg-slate-200  shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="HTML" />
            <p className="mt-4">REACT</p>
          </div>
          <div className="bg-slate-200  shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={redux} alt="HTML" />
            <p className="mt-4">REDUX</p>
          </div>
          <div className="bg-slate-200  shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={postgre} alt="HTML" />
            <p className="mt-4">POSTGRESQL</p>
          </div>
          <div className="bg-slate-200  shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongo} alt="HTML" />
            <p className="mt-4">MONGO</p>
          </div>
          <div className="bg-slate-200  shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="HTML" />
            <p className="mt-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
