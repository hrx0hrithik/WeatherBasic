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

const getWeather2 = () =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_mumbai.innerHTML = response.cloud_pct
		temp_mumbai.innerHTML = response.temp
		feels_like_mumbai.innerHTML = response.feels_like
		humidity_mumbai.innerHTML = response.humidity
		min_temp_mumbai.innerHTML = response.min_temp
		max_temp_mumbai.innerHTML = response.max_temp
		wind_speed_mumbai.innerHTML = response.wind_speed
		wind_degrees_mumbai.innerHTML = response.wind_degrees
		sunrise_mumbai.innerHTML = response.sunrise
		sunset_mumbai.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}
getWeather2()