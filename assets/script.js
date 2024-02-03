var cityname = document.querySelector('#username')

//var requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=463d1cee038354c58ccc692c67d9b4d7`
var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname.value}&appid=463d1cee038354c58ccc692c67d9b4d7&units=imperial`



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


//LOCAL STORAGE 

function saveSearch() {
    var searchHistory;
    var searchQuery = document.getElementById('username');

    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('lastSearch')) {
            searchHistory = JSON.parse(localStorage.getItem('lastSearch'));
        } else {
            searchHistory = [];
        }

        searchHistory.push(searchQuery.value)
        localStorage.setItem('lastSearch', JSON.stringify(searchHistory));
        console.log("Search query saved: " + searchQuery.value);
    } else {
        console.long("local storage is not supported by this browser.")
    }
}

// On page load, retrieve the last search query from local storage
window.onload = function () {
    var lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
    if (lastSearch) {
        var searchHistory = document.querySelector('#repos-container');
        for (var i = 0; i < lastSearch.length; i++) {
            var button = document.createElement('button');
            button.innerText = lastSearch[i];
            searchHistory.appendChild(button)
        }
        console.log("Last search query retrieved: " + lastSearch);
    }
};



