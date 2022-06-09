import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

// import {append} from "../scripts/index.js"

let getdata = async()=>{
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pizza');

    let data = await res.json();
    data = data.meals[0];
    console.log(data);
    append(data);

}
getdata()
let append = (data) =>{



    let image =  document.createElement('img');
    image.id = 'mealImage';
    image.src = data.strMealThumb;

    let category = document.createElement('p');
    category.innerText = data.strCategory;


    let Instructions = document.createElement('p');
    Instructions.innerText = `Instructions :- \n ${data.strInstructions}`;

    document.querySelector('#results').innerHTML =null;
    document.querySelector('#results').append(image,category,Instructions);



}