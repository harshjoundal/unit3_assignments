const api_key = "13e879d4";


async function search(){
    let name = document.querySelector('#search_box').value;
    // console.log(name);
    const url = `https://www.omdbapi.com/?apikey=${api_key}&t=${name}`

    try{
        let res = fetch(url);
        console.log(res);
        let res1 = await res;
        let res2 = await res1;
        let data= await res2.json()
        console.log(data.imdbRating)
        append(data);
        
    }catch(err){
        document.getElementById('container').innerHTML =null;
        let error_msg = document.createElement('h1');
        error_msg.innerText = err
        document.getElementById('container').append(error_msg);
    }



}

function append(data){
    // document.getElementById('container').innerHTML =null;

    let card = document.createElement('div');
    card.className = 'card';

    let image = document.createElement('img');
    image.id = 'poster'
    image.src = data.Poster;

    let release = document.createElement('p');
    release.id ='rel_date';
    release.innerText = `Released on ${data.DVD}.`

    let language = document.createElement('p');
    language.id = 'language';
    language.innerText = data.Language;

    let plot = document.createElement('p');
    plot.id = 'plot'
    plot.innerText = data.Plot;

    let rating = document.createElement('p');
    rating.id = 'rating';
    rating.innerText =`IMDB : ${data.imdbRating}`

    
    card.append(image,release,language,plot,rating);
    if(data.imdbRating >7){
        let recomend = document.createElement('p');
        recomend.id = 'recomend'
        recomend.innerText ='Recommended';
        card.append(recomend)
    
    }

    document.getElementById('container').innerHTML =null;
    document.getElementById('container').append(card);


}