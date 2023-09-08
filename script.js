const LOCATION_MATCHES_FOR_LONDON = [
  {
    city: "London",
    state: "England",
    country: "GB",
  },
  {
    city: "City of London",
    state: "England",
    country: "GB",
  },
  {
    city: "London",
    state: "Ontario",
    country: "CA",
  },
  {
    city: "Chelsea",
    state: "England",
    country: "GB",
  },
];
const FORECAST_FOR_LONDON_ENGLAND = [
  {
    date: new Date("8/29/23 2:00 PM"),
    temperature: 59.49,
    description: "light rain",
    windSpeed: 5.84,
  },
  {
    date: new Date("8/29/23 5:00 PM"),
    temperature: 59.54,
    description: "light rain",
    windSpeed: 6.78,
  },
  {
    date: new Date("8/29/23 8:00 PM"),
    temperature: 58.05,
    description: "overcast clouds",
    windSpeed: 6.91,
  },
];

function onShowCitiesClick(event) {
  event.preventDefault();
  let citiesList = document.getElementById("cities");
  if (citiesList.innerHTML === "") {
    citiesList.innerHTML = renderCitiesList(LOCATION_MATCHES_FOR_LONDON);
  } else {
    citiesList.innerHTML = "";
  }
}

function renderCitiesList(citiesList) {
  // returns a string of the HTML for the whole cities list
  // (uses the renderCity function to get the HTML string for each city)

  let rtnString = `<div>`;
  for (let i = 0; i < citiesList.length; i++) {
    rtnString += renderCity(citiesList[i]);
  }
  rtnString += `<div></div>`;
  return rtnString;
}

function renderCity(city) {
  // returns a string of the HTML for one city
  return `
  <div class="card mb-2" style="width: 18rem">
  <div class="card-body">
  <p class="card-text">${city.city}, ${city.state}, ${city.country}</p>
  <button class="btn btn-outline-dark" onclick=onShowWeatherClick()>Get Weather</button>
  </div>
  </div>`;
}

function onShowWeatherClick() {
  // calls renderWeatherList with the array of FORECAST
  // and puts the string that's returned in the innerHTML property of an element on the page
  let weatherList = document.getElementById("weather");
  if (weatherList.innerHTML === "") {
    weatherList.innerHTML = renderWeatherList(FORECAST_FOR_LONDON_ENGLAND);
  } else {
    weatherList.innerHTML = "";
  }
}

function renderWeatherList(weatherList) {
  // returns a string of the HTML for the whole weather list
  //uses renderWeather function to get the HTML string for each weather obj
  let rtnString = `<div>`;
  for (let i = 0; i < weatherList.length; i++) {
    rtnString += renderWeather(weatherList[i]);
  }
  rtnString += `<div></div>`;
  return rtnString;
}

function renderWeather(weather) {
  //returns HTML string for one weather object
  //setting date to display = weekday time pm/am
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = weather.date;
  let day = days[d.getDay()];
  let t = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  console.log(`${day} ${t}`);
  return `
  <div class="card mb-2" style="width: 18rem;">  
    <div class="card-body">
      <p><b>${day} ${t}</b></p>
      <h5 class="card-title">${weather.temperature}\u00B0</h5>
      <p class="card-text">${weather.description}</p> 
      <p>Windspeed: ${weather.windSpeed}</p>       
    </div>
  </div>`;
}

/* For my own use to display the cityList & forecast to style */
// const showCities = document.getElementById("cities");
// LOCATION_MATCHES_FOR_LONDON.forEach((city) => {
//   showCities.innerHTML += `
//     <div class="card mb-2" style="width: 18rem">
//       <div class="card-body">
//       <p class="card-text">${city.city}, ${city.state}, ${city.country}</p>
//       <button class="btn btn-outline-dark">Get Weather</button>
//       </div>
//     </div>`;
// });

// const showWeather = document.getElementById("weather");
// FORECAST_FOR_LONDON_ENGLAND.forEach((forecast) => {
//   showWeather.innerHTML += `
//     <div class="card mb-2" style="width: 18rem;">
//       <div class="card-body">
//         <p><b>${forecast.date}</b></p>
//         <h3 class="card-title">${forecast.temperature}\u00B0</h3>
//         <p class="card-text">${forecast.description}</p>
//         <p>Windspeed: ${forecast.windSpeed}</p>
//       </div>
//     </div>`;
// });
