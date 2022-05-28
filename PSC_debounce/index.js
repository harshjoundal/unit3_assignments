// const url = `https://swapi.dev/api/people/?search=${name}`


function getname(){
    let name = document.getElementById('search').value;
    console.log(name)
    search(name);

}



async function search(name){ 
    const url = `https://swapi.dev/api/people/?search=${name}`;

    let res = await fetch(url);
    let data = await res.json();
    data = data.results;
    append(data);
    console.log(data);
}

function append(data){
    document.getElementById('results').innerHTML = null;

    if(data == undefined){
        return false;
    }
    else{
        data.forEach(function(ele){

            let p = document.createElement('p');
            p.innerText = ele.name;
            document.getElementById('results').append(p);

        })
    }
}

let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    
    id= setTimeout(function(){
            func();
        },1000);
}