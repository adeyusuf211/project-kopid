const LayoutTwoColumn = ({data, text}) => {
    return (
      <div className="relative">
        {data.countryInfo ? (
          <div className="flex w-full mb-5 flex-nowrap">
            <img
              src={data.countryInfo.flag}
              alt={data.country}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ) : (
          ""
        )}
        {data.country ? (
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white mb-3">
            <h1 className="text-4xl font-bold">{data.country.toUpperCase()}</h1>
          </div>
        ) : (
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white mb-3">
            <h1 className="text-4xl font-bold">WORLD</h1>
          </div>
        )}
        <div className="flex gap-3 w-full lg:flex-nowrap flex-wrap">
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Population</h1>
            <h1 className="text-4xl font-bold">
              {text !== ""
                ? data.population.toLocaleString("id-ID")
                : data.population}
            </h1>
          </div>
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Total Cases / Population (%)</h1>
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
            <h1 className="text-4xl font-bold">
              {text !== "" ? data.cases.toLocaleString("id-ID") : data.cases}
            </h1>
          </div>
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Recovered</h1>
            <h1 className="text-4xl font-bold">
              {text !== ""
                ? data.recovered.toLocaleString("id-ID")
                : data.recovered}
            </h1>
          </div>
        </div>
        <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Deaths</h1>
            <h1 className="text-4xl font-bold">
              {text !== "" ? data.deaths.toLocaleString("id-ID") : data.deaths}
            </h1>
          </div>
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Active</h1>
            <h1 className="text-4xl font-bold">
              {text !== "" ? data.active.toLocaleString("id-ID") : data.active}
            </h1>
          </div>
        </div>
        <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Critical</h1>
            <h1 className="text-4xl font-bold">
              {text !== ""
                ? data.critical.toLocaleString("id-ID")
                : data.critical}
            </h1>
          </div>
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
        </div>
        <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
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
            <h1 className="text-4xl font-bold">
              {text !== ""
                ? data.todayCases.toLocaleString("id-ID")
                : data.todayCases}
            </h1>
          </div>
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Today Deaths</h1>
            <h1 className="text-4xl font-bold">
              {text !== ""
                ? data.todayDeaths.toLocaleString("id-ID")
                : data.todayDeaths}
            </h1>
          </div>
        </div>
        <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Today Recovered</h1>
            <h1 className="text-4xl font-bold">
              {text !== ""
                ? data.todayRecovered.toLocaleString("id-ID")
                : data.todayRecovered}
            </h1>
          </div>
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Tests</h1>
            <h1 className="text-4xl font-bold">
              {text !== "" ? data.tests.toLocaleString("id-ID") : data.tests}
            </h1>
          </div>
        </div>
        <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Tests Per One Milion</h1>
            <h1 className="text-4xl font-bold">
              {text !== ""
                ? data.testsPerOneMillion.toLocaleString("id-ID")
                : data.testsPerOneMillion}
            </h1>
          </div>
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Cases Per One Milion</h1>
            <h1 className="text-4xl font-bold">
              {text !== ""
                ? data.casesPerOneMillion.toLocaleString("id-ID")
                : data.casesPerOneMillion}
            </h1>
          </div>
        </div>
        <div className="flex gap-3 w-full my-3 lg:flex-nowrap flex-wrap">
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Critical Per One Milion</h1>
            <h1 className="text-4xl font-bold">
              {text !== ""
                ? data.criticalPerOneMillion.toLocaleString("id-ID")
                : data.criticalPerOneMillion}
            </h1>
          </div>
          <div className="p-7 lg:p-5 text-center rounded-lg w-full bg-slate-700 text-white">
            <h1 className="text-2xl mb-3">Deaths Per One Milion</h1>
            <h1 className="text-4xl font-bold">
              {text !== ""
                ? data.deathsPerOneMillion.toLocaleString("id-ID")
                : data.deathsPerOneMillion}
            </h1>
          </div>
        </div>
      </div>
    );
}

export default LayoutTwoColumn;