import './style.css'

const peopleData = document.querySelector(".people-data") as HTMLElement;
const starshipsData = document.querySelector(".starships-data") as HTMLElement;
const vehiclesData = document.querySelector(".vehicles-data") as HTMLElement;
const planetsData = document.querySelector(".planets-data") as HTMLElement;

//URLS FROM SWAPI
const peopleURL = "https://swapi.dev/api/people/";
const starshipsURL = "https://swapi.dev/api/starships/";
const vehiclesURL = "https://swapi.dev/api/vehicles/";
const planetsURL = "https://swapi.dev/api/planets/";

//GET HTML ELEMENTS
const people = document.querySelector("#people") as HTMLButtonElement;
const starships = document.querySelector("#starships") as HTMLButtonElement;
const vehicles = document.querySelector("#vehicles") as HTMLButtonElement;
const planets = document.querySelector("#planets") as HTMLButtonElement;

//GET DATA ABOUT PEOPLE
setEventsToButton(people, peopleURL, peopleData);

//GET DATA ABOUT STARSHIPS
setEventsToButton(starships, starshipsURL, starshipsData);

//GET DATA ABOUT VEHICLES
setEventsToButton(vehicles, vehiclesURL, vehiclesData);

//GET DATA ABOUT PLANETS
setEventsToButton(planets, planetsURL, planetsData);




async function getData(url: string, node: HTMLElement) {
  const arr: [] = [];

  const data = await fetch(url);
  const parseData = await data.json();

  await parseData.results.forEach(element => {    
    arr.push(element.name);
  });

  console.log(arr);

  arr.forEach((el)=>{
    const item = document.createElement('div');
    item.textContent = `Name: ${el}`;    

    render(node, item);
  })
}


function render(node: HTMLElement, elementHTML: HTMLElement) {
  return node.append(elementHTML);
}


function setEventsToButton(btn: HTMLButtonElement, url: string, node: HTMLElement) {  
  return btn.addEventListener("click", ()=>{
    if(btn.classList.value === ''){
      btn.classList.value = 'active';
      getData(url, node);

    } else{
      btn.classList.value = '';

      [...node.children].forEach(child => child.remove());
    }     
  })
}