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

            // document.querySelector('#wind-5').textContent = weatherData.list[34].main.temp
        })
}

var searchButton = document.querySelector(".btn")

searchButton.addEventListener("click", clickbtn)

function saveSearch () {
    var searchQuery = document.getElementById('#username');
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('lastSearch', searchQuery);
        console.log("Search query saved: " + searchQuery);
    } else {
        console.long("local storage is not supported by this browser.")
    }
}

window.onload = function() {
    var lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      document.getElementById("#username") = lastSearch;
      console.log("Last search query retrieved: " + lastSearch);
    }
  };


/*
//saves intials entered and assigns to initials variable. trim deleted white space
function saveSearch() {
    var  = citynameInput.value.trim();
    if (cityname !== "") {
      // Saves the initials and score to local storage using getHighScores function. Stores and sorts the high scores in order 
      var lastSearch = cityname();
      lastSearch.push(city.value);
      localStorage.setItem("lastSearch", JSON.stringify(highScores));
      displaylastSearch();
    }
  }
  
  //stores high scores data from local storage as string
  function lastSearch() {
    var highScoresString = localStorage.getItem("highScores");
    return highScoresString ? JSON.parse(highScoresString) : [];
  }
  
  //saves high scores and deletes existing data. 
  function displayHighScores() {
    var highScores = getHighScores();
    highScoresList.innerHTML = "";
    //Iterate over the high score array and display each score as new list item
    highScores.forEach((entry) => {
      var li = document.createElement("li");
      li.textContent = ${entry.initials}: ${entry.score};
      highScoresList.appendChild(li);
    });
  } */