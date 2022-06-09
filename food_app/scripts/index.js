import navbar from '../components/navbar.js'
document.getElementById('navbar').innerHTML = navbar();

// function main_p(){
//     let name = document.querySelector('#search').value;
//     // console.log('name:', name)
//     getdata(name);
    
// }

let btn = document.getElementById('search_btn');
btn.addEventListener('click',function(event){
    let name = document.querySelector('#search').value;
    // console.log('name:', name)
    getdata(name);
})

let getdata = async (name) => {
    

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    let data = await res.json();
    data = data.meals[0];
    console.log('data:', data)
    append(data);
   

}

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
export {append};