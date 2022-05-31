const weather_apiKey = '216f42db1ca769060ff7a449d4f6377d';
// let url = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid=216f42db1ca769060ff7a449d4f6377d'




function city(){
    let city = document.getElementById('city').value;
    weather(city);
    days_7(city);
}


async function weather(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_apiKey}`
    let map = `https://maps.google.com/maps?q=${city}&output=embed`
    document.querySelector('iframe').src = map;

    let res = await fetch(url);

    let data = await res.json();
    data = data.main;
    // console.log(data);
    append(data)
}

function append(data){

    let temp = document.createElement('p');
    temp.id = 'temp';
    temp.innerText = `Temperature : ${(data.temp - 273).toFixed(2)}`;

    let feels_like = document.createElement('p');
    feels_like.id ='feel'
    feels_like.innerText = `Feels like : ${(data.feels_like - 273).toFixed(2)}`;

    let pressure = document.createElement('p');
    pressure.id ='pressure';
    pressure.innerText = `Pressure : ${data.pressure}`;

    let humidity = document.createElement('p');
    humidity.id = 'humidity';
    humidity.innerText = `Humidity : ${data.humidity}`;

    document.getElementById('data').innerHTML =null;
    document.getElementById('data').append(temp,feels_like,pressure,humidity);
}


async function days_7(city){
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${weather_apiKey}`
    let res = await fetch(url);
    console.log(res);
}

// https://api.openweathermap.org/data/2.5/weather?q=kolhapur&cnt=7&appid=216f42db1ca769060ff7a449d4f6377d
// https://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=216f42db1ca769060ff7a449d4f6377d
// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}
api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=216f42db1ca769060ff7a449d4f6377d