 // API method to display below below parameters
 const getcountries = () =>
{
    console.log("Getting countries...");

    const vky = new XMLHttpRequest();

    vky.open("GET", "https://restcountries.com/v3.1/all ");
    vky.send();
     vky.responseType = "json";

     vky.onload =() => {
const countries = vky.response;

const countryNames = countries
.filter(
    (country) => country.region && country.region ==="subregion") .map((country)=> country.name.common);
   

    console.log("Full data", countries,countryNames);
 

    const totalPopulation = countries.map((country)=> country.population) .reduce((previousVal, currentVal) => 
    previousVal +  currentVal,0 ) 
    

      console.log("totalPopulation", totalPopulation);

        countries.forEach((country) => console.log(country.name.common, country.capital,country.flags.png));
      
    };
     };


getcountries();

//compare two JSON have the same properties without order


var object1 = {
    name: 'person 1',
    age: '5'
  };
      
  var object2 = {
    age : '5',
    name: "person 1"
  };
      
  JSON.stringify(object1) === JSON.stringify(object2)
  
      
   _.isEqual(object1, object2);