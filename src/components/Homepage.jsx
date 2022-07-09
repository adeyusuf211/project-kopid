import React, {useState} from "react";
import { useEffect } from "react";

const Homepage = () => {
    const [data, setData]               = useState([]);
    const [semuaData, setSemuaData]     = useState([]);
    const [text, setText]               = useState('');
    const [click, setClick]             = useState(false);
    
    const handleChange = (e) => {
        const finalText = e.target.value
        setText(finalText.toLowerCase());
    }

    useEffect(() => {
        fetch(`https://disease.sh/v3/covid-19/all`)
          .then((res) => res.json())
          .then((hasil) => setSemuaData(hasil));
    }, [])

    const handleClick = () => {
        fetch(`https://disease.sh/v3/covid-19/countries/${text}`)
          .then((res) => res.json())
          .then((hasil) => setData(hasil));
        setClick(true)
    }

    return (
      <div className="w-full h-full">
        <div className="relative">
          <div className="flex gap-3 items-center bg-slate-700 py-3 px-5 rounded-lg">
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
          {text !== "" ? (
            <div className="relative mt-10">
              <div className="flex gap-3 w-full lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Population</h1>
                  <h1 className="text-4xl font-bold">{data.population}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">
                    Total Cases / Population (%)
                  </h1>
                  <h1 className="text-4xl font-bold">
                    {(
                      (parseFloat(data.cases) / parseFloat(data.population)) *
                      parseFloat(100)
                    ).toFixed(2)}
                    %
                  </h1>
                </div>
              </div>
              <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Cases</h1>
                  <h1 className="text-4xl font-bold">{data.cases}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Recovered</h1>
                  <h1 className="text-4xl font-bold">{data.recovered}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Deaths</h1>
                  <h1 className="text-4xl font-bold">{data.deaths}</h1>
                </div>
              </div>
              <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Active</h1>
                  <h1 className="text-4xl font-bold">{data.active}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Critical</h1>
                  <h1 className="text-4xl font-bold">{data.critical}</h1>
                </div>
              </div>
              <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Recovered (%)</h1>
                  <h1 className="text-4xl font-bold">
                    {(
                      (parseFloat(data.recovered) / parseFloat(data.cases)) *
                      parseFloat(100)
                    ).toFixed(2)}
                    %
                  </h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Deaths (%)</h1>
                  <h1 className="text-4xl font-bold">
                    {(
                      (parseFloat(data.deaths) / parseFloat(data.cases)) *
                      parseFloat(100)
                    ).toFixed(2)}
                    %
                  </h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Active (%)</h1>
                  <h1 className="text-4xl font-bold">
                    {(
                      (parseFloat(data.active) / parseFloat(data.cases)) *
                      parseFloat(100)
                    ).toFixed(2)}
                    %
                  </h1>
                </div>
              </div>
              <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Today Cases</h1>
                  <h1 className="text-4xl font-bold">{data.todayCases}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Today Deaths</h1>
                  <h1 className="text-4xl font-bold">{data.todayDeaths}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Today Recovered</h1>
                  <h1 className="text-4xl font-bold">{data.todayRecovered}</h1>
                </div>
              </div>
              <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Tests</h1>
                  <h1 className="text-4xl font-bold">{data.tests}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Tests Per One Milion</h1>
                  <h1 className="text-4xl font-bold">
                    {data.testsPerOneMillion}
                  </h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Cases Per One Milion</h1>
                  <h1 className="text-4xl font-bold">
                    {data.casesPerOneMillion}
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative mt-10">
              <div className="flex gap-3 w-full lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Population</h1>
                  <h1 className="text-4xl font-bold">{semuaData.population}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">
                    Total Cases / Population (%)
                  </h1>
                  <h1 className="text-4xl font-bold">
                    {(
                      (parseFloat(semuaData.cases) /
                        parseFloat(semuaData.population)) *
                      parseFloat(100)
                    ).toFixed(2)}
                    %
                  </h1>
                </div>
              </div>
              <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Cases</h1>
                  <h1 className="text-4xl font-bold">{semuaData.cases}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Recovered</h1>
                  <h1 className="text-4xl font-bold">{semuaData.recovered}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Deaths</h1>
                  <h1 className="text-4xl font-bold">{semuaData.deaths}</h1>
                </div>
              </div>
              <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Active</h1>
                  <h1 className="text-4xl font-bold">{semuaData.active}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Critical</h1>
                  <h1 className="text-4xl font-bold">{semuaData.critical}</h1>
                </div>
              </div>
              <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Recovered (%)</h1>
                  <h1 className="text-4xl font-bold">
                    {(
                      (parseFloat(semuaData.recovered) /
                        parseFloat(semuaData.cases)) *
                      parseFloat(100)
                    ).toFixed(2)}
                    %
                  </h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Deaths (%)</h1>
                  <h1 className="text-4xl font-bold">
                    {(
                      (parseFloat(semuaData.deaths) /
                        parseFloat(semuaData.cases)) *
                      parseFloat(100)
                    ).toFixed(2)}
                    %
                  </h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Active (%)</h1>
                  <h1 className="text-4xl font-bold">
                    {(
                      (parseFloat(semuaData.active) /
                        parseFloat(semuaData.cases)) *
                      parseFloat(100)
                    ).toFixed(2)}
                    %
                  </h1>
                </div>
              </div>
              <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Today Cases</h1>
                  <h1 className="text-4xl font-bold">{semuaData.todayCases}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Today Deaths</h1>
                  <h1 className="text-4xl font-bold">
                    {semuaData.todayDeaths}
                  </h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Today Recovered</h1>
                  <h1 className="text-4xl font-bold">
                    {semuaData.todayRecovered}
                  </h1>
                </div>
              </div>
              <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Tests</h1>
                  <h1 className="text-4xl font-bold">{semuaData.tests}</h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Tests Per One Milion</h1>
                  <h1 className="text-4xl font-bold">
                    {semuaData.testsPerOneMillion}
                  </h1>
                </div>
                <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
                  <h1 className="text-2xl mb-3">Cases Per One Milion</h1>
                  <h1 className="text-4xl font-bold">
                    {semuaData.casesPerOneMillion}
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default Homepage;