// ======================================== set Month ======================================================

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const allMonths = new Date();
let month = months[allMonths.getMonth()];
document.getElementById("mainMonth").innerHTML = month;
//  ================================================ set Days ========================================
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ,"Sunday", "Monday", "Tuesday"];
const allDays = new Date();
let day = days[allDays.getDay()];
document.getElementById("mainDay").innerHTML = day;
document.getElementById('dayOne').innerHTML = days[allDays.getDay()+1];
document.getElementById('dayTwo').innerHTML = days[allDays.getDay()+2];
document.getElementById('dayThree').innerHTML = days[allDays.getDay()+3];
// ====================================== set Number of day =====================================
const dnumber = new Date();
let dayNumber = dnumber.getDate();
document.getElementById("dayNumber").innerHTML = dayNumber;



async function Displayweather(){
    let ipaddress = await fetch('http://ip-api.com/json')
    let allIpAddress = await ipaddress.json()
    let weather= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=77ce7274d0df4d6787290555221210&q=${allIpAddress.city}&days=4`)
    let allWeather= await weather.json();
    console.log(allWeather)
    document.getElementById('tempC').innerHTML = allWeather.current.temp_c
    document.getElementById('windSpeed').innerHTML = allWeather.current.wind_kph
    document.getElementById('humidity').innerHTML = allWeather.current.humidity
    document.getElementById('airPressure').innerHTML = allWeather.current.pressure_mb
    document.getElementById('weather-condition').innerHTML = allWeather.current.condition.text
    document.getElementById('city').innerHTML = allWeather.location.name
    document.getElementById('country').innerHTML = allWeather.location.country
    document.getElementById('weatherIcon').setAttribute('src' , `https://${allWeather.current.condition.icon}` )
    document.getElementById('rainChance').innerHTML = allWeather.forecast.forecastday[0].hour[1].chance_of_rain;
    document.getElementById('dayOneIcon').setAttribute('src' , `https://${allWeather.forecast.forecastday[1].day.condition.icon}`)
    document.getElementById('dayTwoIcon').setAttribute('src' , `https://${allWeather.forecast.forecastday[2].day.condition.icon}`)
    document.getElementById('dayThreeIcon').setAttribute('src' , `https://${allWeather.forecast.forecastday[3].day.condition.icon}`)
    document.getElementById('dayOneCon').innerHTML = allWeather.forecast.forecastday[1].day.condition.text;
    document.getElementById('dayTwoCon').innerHTML = allWeather.forecast.forecastday[2].day.condition.text;
    document.getElementById('dayThreeCon').innerHTML = allWeather.forecast.forecastday[3].day.condition.text;
    document.getElementById('dayOneTemp').innerHTML =allWeather.forecast.forecastday[1].hour[13].temp_c;
    document.getElementById('dayTwoTemp').innerHTML =allWeather.forecast.forecastday[2].hour[13].temp_c;
    document.getElementById('dayThreeTemp').innerHTML =allWeather.forecast.forecastday[3].hour[13].temp_c;
    document.getElementById('dayOneNight').innerHTML =allWeather.forecast.forecastday[1].hour[20].temp_c;
    document.getElementById('dayTwoNight').innerHTML =allWeather.forecast.forecastday[2].hour[20].temp_c;
    document.getElementById('dayThreeNight').innerHTML =allWeather.forecast.forecastday[3].hour[20].temp_c;
    }
    Displayweather()


    
async function searchWeather(term){
    let weather= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=77ce7274d0df4d6787290555221210&q=${term}&days=4`)
    let allWeather= await weather.json();
    console.log(allWeather)
    document.getElementById('tempC').innerHTML = allWeather.current.temp_c
    document.getElementById('windSpeed').innerHTML = allWeather.current.wind_kph
    document.getElementById('humidity').innerHTML = allWeather.current.humidity
    document.getElementById('airPressure').innerHTML = allWeather.current.pressure_mb
    document.getElementById('weather-condition').innerHTML = allWeather.current.condition.text
    document.getElementById('city').innerHTML = allWeather.location.name
    document.getElementById('country').innerHTML = allWeather.location.country
    document.getElementById('weatherIcon').setAttribute('src' , `https://${allWeather.current.condition.icon}` )
    document.getElementById('rainChance').innerHTML = allWeather.forecast.forecastday[0].hour[1].chance_of_rain;
    document.getElementById('dayOneIcon').setAttribute('src' , `https://${allWeather.forecast.forecastday[1].day.condition.icon}`)
    document.getElementById('dayTwoIcon').setAttribute('src' , `https://${allWeather.forecast.forecastday[2].day.condition.icon}`)
    document.getElementById('dayThreeIcon').setAttribute('src' , `https://${allWeather.forecast.forecastday[3].day.condition.icon}`)
    document.getElementById('dayOneCon').innerHTML = allWeather.forecast.forecastday[1].day.condition.text;
    document.getElementById('dayTwoCon').innerHTML = allWeather.forecast.forecastday[2].day.condition.text;
    document.getElementById('dayThreeCon').innerHTML = allWeather.forecast.forecastday[3].day.condition.text;
    document.getElementById('dayOneTemp').innerHTML =allWeather.forecast.forecastday[1].hour[13].temp_c;
    document.getElementById('dayTwoTemp').innerHTML =allWeather.forecast.forecastday[2].hour[13].temp_c;
    document.getElementById('dayThreeTemp').innerHTML =allWeather.forecast.forecastday[3].hour[13].temp_c;
    document.getElementById('dayOneNight').innerHTML =allWeather.forecast.forecastday[1].hour[20].temp_c;
    document.getElementById('dayTwoNight').innerHTML =allWeather.forecast.forecastday[2].hour[20].temp_c;
    document.getElementById('dayThreeNight').innerHTML =allWeather.forecast.forecastday[3].hour[20].temp_c;
    }
   
    




document.getElementById('searchWeather').addEventListener('input' , function(){

    searchWeather(this.value); 
    if(this.value == '')
    {
        Displayweather()
    }

})


