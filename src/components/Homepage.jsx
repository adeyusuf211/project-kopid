import React, {useState} from "react";
import DataApi from "./DataApi";
import LayoutDefault from './images/layout default.png'
import Layout2x2 from './images/layout 2x2.png'
import Layout3x3 from './images/layout 3x3.png'

const Homepage = () => {
  const [data, setData]       = useState("");
  const [text, setText]       = useState("");
  const [search, setSearch]   = useState("World");
  const [click, setClick]     = useState(false);
  const [layout, setLayout]   = useState("default");

  const handleChange = (e) => {
    const finalText = e.target.value;
    setText(finalText.toLowerCase());
  };

  const handleClick = () => {
    setClick(true);
    
    fetch(`https://disease.sh/v3/covid-19/countries/${text}`)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
        throw new Error(setSearch(`${text} cant found`))
      })
      .then((hasil) => setData(hasil))
      .catch((error) => console.log(error));

    text === "" ? setSearch("World") : setSearch(text);
  };

  if(text === "") {
    fetch(`https://disease.sh/v3/covid-19/all`)
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
        throw new Error(`Can't found`)
      })
      .then((hasil) => setData(hasil))
      .catch((error) => console.log(error));
  } 

  const changeLayout = (str) => str === "layout2" ? 
  setLayout("layout2") 
  : str === "layout3" ? setLayout("layout3") 
  : setLayout("default");

    return (
      <div className="w-full h-full">
        <div className="relative">
          <div className="flex gap-3 items-center bg-slate-700 p-3 rounded-lg">
            <input
              type="text"
              className="w-full outline-none bg-transparent text-slate-200"
              placeholder="Type here"
              autoFocus
              value={text}
              onChange={handleChange}
            />
            <button
              className="bg-slate-600 text-white px-5 py-3 hover:bg-slate-500 transtion-all duration-300"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
          <h1 className="text-2xl my-3 text-slate-300">Data: {search}</h1>
          <div className="w-full flex gap-3 justify-end">
            <img src={LayoutDefault} 
              className="w-6 h-6 cursor-pointer hidden lg:block md:block" 
              onClick={() => changeLayout("default")}
            />
            <img
              src={Layout2x2}
              className="w-6 h-6 cursor-pointer hidden lg:block md:block"
              onClick={() => changeLayout("layout2")}
            />
            <img
              src={Layout3x3}
              className="w-6 h-6 cursor-pointer hidden lg:block md:block"
              onClick={() => changeLayout("layout3")}
            />
          </div>
          <DataApi data={data} text={text} layout={layout} />
        </div>
      </div>
    );
}

export default Homepage;