const input = document.querySelector('.my-input');

input.addEventListener('input', async function() {
    await searchData(input.value);
});

covidData();

function searchData(keyword) {
    return fetch('https://disease.sh/v3/covid-19/countries/' + keyword)
    .then(response => response.json())
    .then(data => {
        let card = ``;
        card += cards(data);
        const content = document.querySelector('.data');
        content.innerHTML = card;
    });
}

function covidData() {
    return fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
        let card = ``;
        card += allCards(data);
        const content = document.querySelector('.data');
        content.innerHTML = card;
    });
}

function cards(data) {
    const activeCases = parseFloat(data.todayRecovered + data.todayDeaths - data.todayCases).toLocaleString('id-ID').replace('-', ''); 
    return `
            <div class="content">
                <img src="${data.countryInfo.flag}" alt="${data.country}">
                <h1>${data.country}</h1>
            </div>
            <div class="populations">
                <div class="case-population">
                    <h4>Jumlah Penduduk</h4>
                    <h2>${data.population.toLocaleString('id-ID')}</h2>
                </div>
            </div>
            <div class="cases">
                <div class="case">
                    <h4>Total Kasus</h4>
                    <h2>${data.cases.toLocaleString('id-ID', '.')}</h2>
                </div>
                <div class="case">
                    <h4>Total Sembuh</h4>
                    <h2>${data.recovered.toLocaleString('id-ID')}</h2>
                </div>
                <div class="case">
                    <h4>Total Kematian</h4>
                    <h2>${data.deaths.toLocaleString('id-ID')}</h2>
                </div>
            </div>
            <div class="cases">
                <div class="case">
                    <h4>Kasus Hari Ini</h4>
                    <h2>${data.todayCases.toLocaleString('id-ID')}</h2>
                </div>
                <div class="case">
                    <h4>Kesembuhan Hari Ini</h4>
                    <h2>${data.todayRecovered.toLocaleString('id-ID')}</h2>
                </div>
                <div class="case">
                    <h4>Kematian Hari Ini</h4>
                    <h2>${data.todayDeaths.toLocaleString('id-ID')}</h2>
                </div>
            </div>
            <div class="cases">
                <div class="case">
                    <h4>Total Kasus / Jumlah Penduduk (%)</h4>
                    <h2>${ (parseFloat(data.cases) / parseFloat(data.population) * parseFloat(100)).toFixed(2) } %</h2>
                </div>
                <div class="case">
                    <h4>Angka Kesembuhan (%)</h4>
                    <h2>${ (parseFloat(data.recovered) / parseFloat(data.cases) * parseFloat(100)).toFixed(2) } %</h2>
                </div>
                <div class="case">
                    <h4>Angka Kematian (%)</h4>
                    <h2>${ (parseFloat(data.deaths) / parseFloat(data.cases) * parseFloat(100)).toFixed(2) } %</h2>
                </div>
            </div>
            <div class="cases">
                <div class="case">
                    <h4>Jumlah Kasus Aktif</h4>
                    <h2>${ data.active.toLocaleString('id-ID', '.') }</h2>
                </div>
                <div class="case">
                    <h4>Kasus Aktif / Total Kasus (%)</h4>
                    <h2>${ (parseFloat(data.active) / parseFloat(data.cases) * parseFloat(100)).toFixed(2) } %</h2>
                </div>
                <div class="case">
                    <h4>Kasus Aktif (+/-)</h4>
                    <h2>${ activeCases < 0 ? `+ ${activeCases}` : activeCases > 0 ? `- ${activeCases}` : '0' }</h2>
                </div>
            </div>
            <div class="cases">
                <div class="case">
                    <h4>Jumlah Test Keseluruhan</h4>
                    <h2>${ data.tests.toLocaleString('id-ID', '.') }</h2>
                </div>
                    <div class="case">
                    <h4>Test Per Satu Juta Orang</h4>
                <h2>${ data.testsPerOneMillion.toLocaleString('id-ID', '.') }</h2>
                </div>
                    <div class="case">
                    <h4>Kasus Per Satu Juta Orang</h4>
                    <h2>${ data.casesPerOneMillion.toLocaleString('id-ID', '.') }</h2>
                </div>
                <canvas id="myChart"></canvas>
            </div>
        `;
}

function allCards(data) {
    const activeCases = parseFloat(data.todayRecovered + data.todayDeaths - data.todayCases).toLocaleString('id-ID').replace('-', ''); 
    return `
            <div class="populations">
                <div class="case-population">
                    <h4>Jumlah Penduduk</h4>
                    <h2>${data.population.toLocaleString('id-ID', '.')}</h2>
                </div>
            </div>
            <div class="cases">
                <div class="case">
                    <h4>Total Kasus</h4>
                    <h2>${data.cases.toLocaleString('id-ID', '.')}</h2>
                </div>
                <div class="case">
                    <h4>Total Sembuh</h4>
                    <h2>${data.recovered.toLocaleString('id-ID', '.')}</h2>
                </div>
                <div class="case">
                    <h4>Total Kematian</h4>
                    <h2>${data.deaths.toLocaleString('id-ID', '.')}</h2>
                </div>
            </div>
            <div class="cases">
                <div class="case">
                    <h4>Kasus Hari Ini</h4>
                    <h2>${data.todayCases.toLocaleString('id-ID', '.')}</h2>
                </div>
                <div class="case">
                    <h4>Kesembuhan Hari Ini</h4>
                    <h2>${data.todayRecovered.toLocaleString('id-ID', '.')}</h2>
                </div>
                <div class="case">
                    <h4>Kematian Hari Ini</h4>
                    <h2>${data.todayDeaths.toLocaleString('id-ID', '.')}</h2>
                </div>
            </div>
            <div class="cases">
                <div class="case">
                    <h4>Total Kasus / Jumlah Penduduk (%)</h4>
                    <h2>${ (parseFloat(data.cases) / parseFloat(data.population) * parseFloat(100)).toFixed(2) } %</h2>
                </div>
                <div class="case">
                    <h4>Angka Kesembuhan (%)</h4>
                    <h2>${ (parseFloat(data.recovered) / parseFloat(data.cases) * parseFloat(100)).toFixed(2) } %</h2>
                </div>
                <div class="case">
                    <h4>Angka Kematian (%)</h4>
                    <h2>${ (parseFloat(data.deaths) / parseFloat(data.cases) * parseFloat(100)).toFixed(2) } %</h2>
                </div>
            </div>
            <div class="cases">
                <div class="case">
                    <h4>Jumlah Kasus Aktif</h4>
                    <h2>${ data.active.toLocaleString('id-ID', '.') }</h2>
                </div>
                <div class="case">
                    <h4>Kasus Aktif / Total Kasus (%)</h4>
                    <h2>${ (parseFloat(data.active) / parseFloat(data.cases) * parseFloat(100)).toFixed(2) } %</h2>
                </div>
                <div class="case">
                    <h4>Kasus Aktif (+/-)</h4>
                    <h2>${ activeCases < 0 ? `+ ${activeCases}` : activeCases > 0 ? `- ${activeCases}` : '0' }</h2>
                </div>
            </div>
            <div class="cases">
                <div class="case">
                    <h4>Jumlah Test Keseluruhan</h4>
                    <h2>${ data.tests.toLocaleString('id-ID', '.') }</h2>
                </div>
                    <div class="case">
                    <h4>Test Per Satu Juta Orang</h4>
                <h2>${ data.testsPerOneMillion.toLocaleString('id-ID', '.') }</h2>
                </div>
                    <div class="case">
                    <h4>Kasus Per Satu Juta Orang</h4>
                    <h2>${ data.casesPerOneMillion.toLocaleString('id-ID', '.') }</h2>
                </div>
                <canvas id="myChart"></canvas>
            </div>
        `;
}