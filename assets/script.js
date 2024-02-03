var cityname = document.querySelector('#username')

//var requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=463d1cee038354c58ccc692c67d9b4d7`

function clickbtn(event) {
    event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname.value}&appid=463d1cee038354c58ccc692c67d9b4d7&units=imperial`)
        .then(res => res.json())
        .then(weatherData => {
            console.log(weatherData)
            var dayIndex = 2
            for (let i = 1; i < 6; i++) {
                document.querySelector('#wind-' + i).textContent = "Wind Spped: " + weatherData.list[dayIndex].wind.speed
                document.querySelector('#weather-' + i).textContent = "Temperature: " + weatherData.list[dayIndex].main.temp
                document.querySelector('#humidity-' + i).textContent = "Humidity: " + weatherData.list[dayIndex].main.humidity
                dayIndex += 8
            }
        })
    event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=463d1cee038354c58ccc692c67d9b4d7&units=imperial`)
        .then(res => res.json())
        .then(weatherData => {
            console.log(weatherData)

        })
}

var searchButton = document.querySelector(".btn")

searchButton.addEventListener("click", clickbtn)

function saveSearch() {
    var searchQuery = document.getElementById('#username');
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem('lastSearch', searchQuery);
        console.log("Search query saved: " + searchQuery);
    } else {
        console.long("local storage is not supported by this browser.")
    }
}

window.onload = function () {
    var lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
        document.getElementById("#username") = lastSearch;
        console.log("Last search query retrieved: " + lastSearch);
    }
};


