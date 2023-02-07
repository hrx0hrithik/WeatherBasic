const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73f46d71femsh9aae363019e554cp135bd5jsn0134fc1c9cfe',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) =>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

const getWeatherMum = () =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_mumbai.innerHTML = response.cloud_pct
		temp_mumbai.innerHTML = response.temp+"&#8451"
		feels_like_mumbai.innerHTML = response.feels_like+"&#8451"
		humidity_mumbai.innerHTML = response.humidity+"%"
		min_temp_mumbai.innerHTML = response.min_temp+"&#8451"
		max_temp_mumbai.innerHTML = response.max_temp+"&#8451"
		wind_speed_mumbai.innerHTML = response.wind_speed+" Km/h"
		wind_degrees_mumbai.innerHTML = response.wind_degrees+"&#176"
		var sunrise_new = new Date(response.sunrise)
		sunrise_mumbai.innerHTML= sunrise_new.toLocaleTimeString();
		var sunset_new = new Date(response.sunset)
		sunset_mumbai.innerHTML= sunset_new.toLocaleTimeString();

		
	})
	.catch(err => console.error(err));
	
}
getWeatherMum()

const getWeatherKol = () =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_kolkata.innerHTML = response.cloud_pct
		temp_kolkata.innerHTML = response.temp+"&#8451"
		feels_like_kolkata.innerHTML = response.feels_like+"&#8451"
		humidity_kolkata.innerHTML = response.humidity+"%"
		min_temp_kolkata.innerHTML = response.min_temp+"&#8451"
		max_temp_kolkata.innerHTML = response.max_temp+"&#8451"
		wind_speed_kolkata.innerHTML = response.wind_speed+" Km/h"
		wind_degrees_kolkata.innerHTML = response.wind_degrees+"&#176"
		var sunrise_new = new Date(response.sunrise)
		sunrise_kolkata.innerHTML= sunrise_new.toLocaleTimeString();
		var sunset_new = new Date(response.sunset)
		sunset_kolkata.innerHTML= sunset_new.toLocaleTimeString();

	})
	.catch(err => console.error(err));
}
getWeatherKol()

const getWeatherBan = () =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_bangalore.innerHTML = response.cloud_pct
		temp_bangalore.innerHTML = response.temp+"&#8451"
		feels_like_bangalore.innerHTML = response.feels_like+"&#8451"
		humidity_bangalore.innerHTML = response.humidity+"%"
		min_temp_bangalore.innerHTML = response.min_temp+"&#8451"
		max_temp_bangalore.innerHTML = response.max_temp+"&#8451"
		wind_speed_bangalore.innerHTML = response.wind_speed+" Km/h"
		wind_degrees_bangalore.innerHTML = response.wind_degrees+"&#176"

		var sunrise_new = new Date(response.sunrise)
		sunrise_bangalore.innerHTML= sunrise_new.toLocaleTimeString();
		var sunset_new = new Date(response.sunset)
		sunset_bangalore.innerHTML= sunset_new.toLocaleTimeString();

	})
	.catch(err => console.error(err));
}
getWeatherBan()

const getWeatherChn = () =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_chennai.innerHTML = response.cloud_pct
		temp_chennai.innerHTML = response.temp+"&#8451"
		feels_like_chennai.innerHTML = response.feels_like+"&#8451"
		humidity_chennai.innerHTML = response.humidity+"%"
		min_temp_chennai.innerHTML = response.min_temp+"&#8451"
		max_temp_chennai.innerHTML = response.max_temp+"&#8451"
		wind_speed_chennai.innerHTML = response.wind_speed+" Km/h"
		wind_degrees_chennai.innerHTML = response.wind_degrees+"&#176"

		var sunrise_new = new Date(response.sunrise)
		sunrise_chennai.innerHTML= sunrise_new.toLocaleTimeString();
		var sunset_new = new Date(response.sunset)
		sunset_chennai.innerHTML= sunset_new.toLocaleTimeString();

	})
	.catch(err => console.error(err));
}
getWeatherChn()