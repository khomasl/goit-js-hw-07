async function getData() {
    let result = null;
    let response = await fetch("https://restcountries.eu/rest/v2/all");
    result = await response.json();
    return result;
  }
  
  getData().then((data) => localStorage.setItem("arr", JSON.stringify(data)));
  
  const arr = JSON.parse(localStorage.getItem("arr"));
  console.log(arr);
  
  // Получить стрыны из региона Europe
  // Получить название самой большой страни в Европе
  // Получить название самой маленькой страни в Европе
  // Получить список стран с которыми граничит Швейцария (Switzerland)
  // Получить процент который занимает  Австрия  в мире
  
  const REGIONS = {
    EUROPE: "Europe",
    ASIA: "Asia",
  };
  
  const findCountryByRegion = (countries, region) =>
    countries.filter((country) => country.region === region);
  // .map((country) => country.name);
  
  const countriesInEurope = findCountryByRegion(arr, REGIONS.EUROPE);
  
  const findLargestAndSmallestCountries = (countries) => {
    const sortedCountriesList = [...countries].sort((a, b) => b.area - a.area);
    return {
      max: sortedCountriesList[0],
      min: sortedCountriesList[sortedCountriesList.length - 1],
    };
  };
  
  console.log(`result `, findCountryByRegion(arr, REGIONS.EUROPE));
  console.log(
    "min and max countries",
    findLargestAndSmallestCountries(countriesInEurope)
  );
  
  const findCountryByName = (countryName, countries) =>
    countries.find((country) => country.name === countryName);
  
  const borders = findCountryByName("Switzerland", arr).borders;
  
  const bordersCountries = (countries, borders) =>
    countries
      .filter((country) => borders.includes(country.alpha3Code))
      .map((country) => country.name);
  
  console.log(`bordersCountries`, bordersCountries(countriesInEurope, borders));

  const findPercentAreaByCountryName = (countryName, countries) => {
    const totalAreaCountries = countries.reduce((totalArea, country) => totalArea + country.area, 0);
    const areaCountry = countries.find(country => country.name === countryName).area;
    return ((areaCountry / totalAreaCountries) * 100).toFixed(2);
  }


  console.log('findPercentAreaByCountryName :>> ', `${findPercentAreaByCountryName("Ukraine", arr)} %`);
  // function findBorders(countryName, countryArray) {
  //   const countryCode = countryArray.find(
  //     (el) => el.name === countryName
  //   ).alpha3Code;
  //   console.log(countryCode);
  //   const result = countryArray
  //     .filter((el) => el.borders.includes(countryCode))
  //     .map((el) => el.name);
  //   return result;
  // }
  
  // console.log(findBorders("Switzerland", arr));