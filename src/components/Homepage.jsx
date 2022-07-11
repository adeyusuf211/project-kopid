import React, {useState} from "react";
import { useEffect } from "react";
import DataApi from "./DataApi";

const Homepage = () => {
  const [data, setData]       = useState([]);
  const [text, setText]       = useState("");
  const [click, setClick]     = useState(false);

  const handleChange = (e) => {
    const finalText = e.target.value;
    setText(finalText.toLowerCase());
  };

  const handleClick = () => {
    if(text.length > 0) {
      fetch(`https://disease.sh/v3/covid-19/countries/${text}`)
        .then((res) => res.json())
        .then((hasil) => setData(hasil));
    } else {
      fetch(`https://disease.sh/v3/covid-19/all`)
        .then((res) => res.json())
        .then((hasil) => setData(hasil));
    }
    setClick(true);
  };

  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/all`)
      .then((res) => res.json())
      .then((hasil) => setData(hasil));
  }, []);

  
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
          {text === "" ? (
            <h1 className="text-2xl my-3 text-slate-300">Data: semua</h1>
          ) : (
            <h1 className="text-2xl my-3 text-slate-300">Data: {text}</h1>
          )}
          <DataApi data={data} setData={setData} />
        </div>
      </div>
    );
}

export default Homepage;