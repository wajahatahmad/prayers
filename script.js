// API keys and location details
const weatherApiKey = '9f4f7e04eb9f339afb31674efb792a30';
const latitude = 28.3512;
const longitude = 77.5551;

// Function to update the clock every second
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById('clock').innerText = time;
}
setInterval(updateClock, 1000);

// Function to fetch and display the weather
async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`);
    const data = await response.json();
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    document.getElementById('weather').innerText = `${temperature}°C, ${condition}`;
}

// Function to fetch and display prayer times
async function fetchPrayerTimes() {
    const response = await fetch(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`);
    const data = await response.json();
    const timings = data.data.timings;
    document.getElementById('prayer-times').innerHTML = `
        <p>Fajr: ${timings.Fajr}</p>
        <p>Dhuhr: ${timings.Dhuhr}</p>
        <p>Asr: ${timings.Asr}</p>
        <p>Maghrib: ${timings.Maghrib}</p>
        <p>Isha: ${timings.Isha}</p>
    `;
}

// Function to set today's date
function setDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString(undefined, options);
}

// Initial function calls for the main page
fetchWeather();
fetchPrayerTimes();
setDate();
