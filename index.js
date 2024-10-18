const APIKEY = '';

let api = function (city) {
    let lien = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(lien).then((response) =>
        response.json().then(data => {
            console.log(data);
            document.querySelector('#ville').innerHTML = `Ville: ` + "<br\/>" + "<br\/>" + data.name;
            document.querySelector('#pays').innerHTML = `Pays : ` + "<br\/>" + "<br\/>" + data.sys.country;
            document.querySelector('#temperature').innerHTML = `Degrès : ` + data.main.temp + `°` + "<br\/>" + "<br\/>" + data.weather[0].description;
            document.querySelector('#humidite').innerHTML = `Humidité : ` + "<br\/>" + "<br\/>" + data.main.humidity + '%';
            document.querySelector('#vent').innerHTML = `Vent : ` + "<br\/>" + "<br\/>" + data.wind.speed + ' km/h';
        })
    )
};

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    api(ville);
});

api('Paris');