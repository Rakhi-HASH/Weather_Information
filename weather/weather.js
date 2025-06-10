async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }
    
    const apiKey = '0bc49c0b343c4f8e872171652251202';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.error) {
            document.getElementById('result').innerHTML = 'Location not found';
        } else {
            const temp = data.current.temp_c;
            document.getElementById('result').innerHTML = `Temperature in ${location}: ${temp}°C`;
        }
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error fetching data';
    }
}