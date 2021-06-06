window.addEventListener("load", () => {
  let latitude;
  let longitude;
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let weatherIcon = document.querySelector(".icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      const apiKey = "c4da12561dc0aee559262c8e553b5d1c";

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          temperatureDegree.textContent = data.main.temp;
          temperatureDescription.textContent = data.weather[0].main;
          let iconCode = data.weather[0].icon;
          weatherIcon.src = `http://openweathermap.org/img/w/${iconCode}.png`;
        });
    });
  }
});
