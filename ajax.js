
fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => {
    const globalData = data.Global;
    const totalCases = globalData.TotalConfirmed;
    const totalDeaths = globalData.TotalDeaths;
    const totalRecovered = globalData.TotalRecovered;

    // masukan kode untuk menampilkan pada HTML
		// ...
  })
  .catch(error => console.error(error));
