import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="relative">
      <div className="w-full bg-[url('../public/img/background.jpg')] h-screen relative after:w-full after:h-full after:bg-slate-900 after:absolute after:top-0 after:left-0 after:bg-opacity-90 flex items-center">
        <div className="w-full h-screen px-10 text-center lg:px-[100px] z-10 flex items-center justify-center flex-col">
          <h1 className="text-white text-8xl font-bold mb-7 lg:mb-5">Kopid</h1>
          <h3 className="lg:text-5xl text-4xl font-semibold text-white text-slate-400">
            Track a Covid Data Now.
          </h3>
        </div>
      </div>
      <div className="w-full min-h-screen px-10 lg:px-[100px] py-10 bg-slate-800">
        <Homepage />
      </div>
      <div className="w-full h-full lg:h-[20vh] py-10 bg-slate-900 flex flex-col lg:flex-row gap-5 justify-between px-[100px] lg:items-center items-start">
        <h3 className="text-slate-500">
          Created By{" "}
          <a href="https://adeyusuf.netlify.app" target="_blank">
            Ade Yusuf
          </a>
        </h3>
        <h3 className="text-slate-500">
          Github:{" "}
          <a href="https://github.com/adeyusuf211/project-kopid" target="_blank">
            @adeyusuf211/project-kopid
          </a>
        </h3>
        <h3 className="text-slate-500">
          Resource:{" "}
          <a href="https://disease.sh/" target="_blank">
            Diseash.sh
          </a>
        </h3>
      </div>
    </div>
  );
}

export default App;
