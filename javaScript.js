const search = document.getElementById("search");
search.addEventListener('click', function () {

    const city = document.getElementById("city-name").value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b419bb02b12b3f986ec3cb6f3b37b95`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const cityName = json.name;
            const temp = (json.main.temp - 273).toFixed(2);
            const weather = json.weather[0].main;
            const icon = json.weather[0].icon;

            document.getElementById("city-display").innerText = cityName;
            document.getElementById("temp").innerText = temp;
            document.getElementById("weather").innerText = weather;
            document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        });
})