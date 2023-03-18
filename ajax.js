async function getData(callback) {
    const data = await fetch("https://api.covid19api.com/summary")
    const res = await data.json()
    
    callback(res)
}


function renderData(data) {
    console.log(data)
    const userElement = document.getElementById("users")
    const globalData =data.Global
    const totalCases = globalData.TotalConfirmed
    const totalDeaths = globalData.totalDeaths
    const totalRecovered = globalData.totalRecovered
}

getData(renderData)