const api_key = "13e879d4";







async function searchmovies(name){
    const url = `https://www.omdbapi.com/?apikey=${api_key}&s=${name}`

    let res = await fetch(url);

    let data = await res.json();
    data = data.Search
    return(data);
    // console.log(data);
}

async function main(){
    let name = document.getElementById('movie_input').value;
    let data = await searchmovies(name);
    console.log('data:',data);
    append(data);
    
}

function append(movies){
    document.getElementById('movies').innerHTML =null

    if(movies == undefined){
        return false;
    }
    movies.forEach(function(ele){
        let p = document.createElement('p');
        p.innerText = ele.Title;

        document.getElementById('movies').append(p);

        p.addEventListener('click',function(event){
            document.getElementById('movies').innerHTML =null;
            let image = document.createElement('img');
            image.id = 'image';
            image.src =  ele.Poster;
            
            let title = document.createElement('p');
            title.id ='title';
            title.innerText = ele.Title
            
            let yor = document.createElement('p');
            yor.id = 'yor';
            yor.innerText = ele.Year;
            
            // let rating = document.createElement('p');
            // rating.id = 'rating';
            // rating.innerText = ele.
            
            document.getElementById('container').innerHTML =null
            document.getElementById('container').append(image,title,yor);

        })

    })
}

let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
            func();
        },delay)
}