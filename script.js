        const input = document.querySelector('.my-input');
        input.addEventListener('keyup', function() {
            fetch('https://disease.sh/v3/covid-19/countries/' + input.value)
                .then(response => response.json())
                .then(data => {
                    let card = ``;
                    const content = document.querySelector('.data');
                        card +=     `
                                    <div class="content">
                                        <img src="${data.countryInfo.flag}" alt="">
                                        <h1>${data.country}</h1>
                                    </div>
                                    <div class="cases">
                                        <div class="case">
                                            <h4>Total Kasus</h4>
                                            <h2>${data.cases.toLocaleString()}</h2>
                                        </div>
                                        <div class="case">
                                            <h4>Total Sembuh</h4>
                                            <h2>${data.recovered.toLocaleString()}</h2>
                                        </div>
                                        <div class="case">
                                            <h4>Total Kematian</h4>
                                            <h2>${data.deaths.toLocaleString()}</h2>
                                        </div>
                                    </div>
                                    <div class="cases">
                                        <div class="case">
                                            <h4>Kasus Hari Ini</h4>
                                            <h2>${data.todayCases.toLocaleString()}</h2>
                                        </div>
                                        <div class="case">
                                            <h4>Kesembuhan Hari Ini</h4>
                                            <h2>${data.todayRecovered.toLocaleString()}</h2>
                                        </div>
                                        <div class="case">
                                            <h4>Kematian Hari Ini</h4>
                                            <h2>${data.todayDeaths.toLocaleString()}</h2>
                                        </div>
                                    </div>
                                    <div class="cases">
                                        <div class="case">
                                            <h4>Total Kasus (%)</h4>
                                            <h2>${ (parseFloat(data.cases) / parseFloat(data.population)).toFixed(2) } %</h2>
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
                                            <h4>Kasus Aktif</h4>
                                            <h2>${ data.active.toLocaleString() }</h2>
                                        </div>
                                        <div class="case">
                                            <h4>Kasus Aktif (%)</h4>
                                            <h2>${ (parseFloat(data.active) / parseFloat(data.cases) * parseFloat(100)).toFixed(2) } %</h2>
                                        </div>
                                        <div class="case">
                                            <h4>Pengurangan Kasus Aktif (Hari Ini).</h4>
                                            <h2>${ (parseFloat(data.todayRecovered) + parseFloat(data.todayDeaths)).toLocaleString() }</h2>
                                        </div>
                                    </div>
                                    `;
                    content.innerHTML = card;
                });
        });