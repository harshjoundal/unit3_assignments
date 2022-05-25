let images = [
    'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_KGF1Hindi_Launch/358c594f-8ef9-4677-9aff-8c4af48bee62._UR3000,600_SX1500_FMwebp_.jpeg',
    'https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_TheNun/a13411df-11b5-400d-9547-26ef95c8087c._UR3000,600_SX1500_FMwebp_.jpg',
    'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_The355_LP/20179c15-20c1-4589-afe3-3410bb311117._UR3000,600_SX1500_FMwebp_.jpeg',
    'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_AcharayaMultiLanguage_Launch/8b4088ed-a875-456a-89fa-62dfdcdaca80._UR3000,600_SX1500_FMwebp_.jpeg',
]
let image = document.getElementById('sl_image');
image.src = images[0];

function slideshow(){
    let max = images.length-1;
    let i = 0;
    let image = document.getElementById('sl_image');
    // image.src = images[0];
    setInterval(function(){
        
        if(i == max){
            i = 0;
        }
        image.src = images[i];
        i++;
    },3000)

    
    
    
}
// console.log(images)

slideshow();

let login_data = JSON.parse(localStorage.getItem('login_data'));

if(login_data.length == 0){
    document.querySelector('#login').innerText = 'Log In';
}
else{
    document.querySelector('#login').innerText = login_data[0].name

}

let movies = [
    {
        image : 'https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg',
        imdb : 7,
        name :'Bhul Bhulaiyaa2'
    },
    {
        image : 'https://assetscdn1.paytm.com/images/cinema/Top-Gun--Maverick-705x750-027fac70-cc7e-11ec-9110-77d6e3ad5005.jpg' ,
        imdb :8 ,
        name : 'Top Gun',

    },
    {
        image : 'https://assetscdn1.paytm.com/images/cinema/Jurassic-World--Dominion-705x750-b554ee90-cd51-11ec-8d22-2363945d80ef.jpg' ,
        imdb : 6,
        name : 'Jurassic world',

    },
    {
        image : 'https://assetscdn1.paytm.com/images/cinema/Anek-705x750-cec02f00-d8e3-11ec-a247-cb3046901f82.jpg' ,
        imdb : 7,
        name : 'Anek',

    },
    {
        image : 'https://assetscdn1.paytm.com/images/cinema/Dharmaveer---705x750-5effd120-cfb0-11ec-9fda-cf656fcd1c16.png' ,
        imdb : 10,
        name : 'Dharmaveer',

    },
    {
        image : 'https://assetscdn1.paytm.com/images/cinema/Doctor-Strange--In-The-Multiverse-Of-Madness-r-705x750-36f0e140-b752-11ec-a762-319bdb0970f2.jpg' ,
        imdb :9 ,
        name : 'Doctor strange',

    },
    {
        image : 'https://assetscdn1.paytm.com/images/cinema/KGF-705x750-76008750-b6fd-11ec-9639-8322852eadd4.jpg' ,
        imdb : 8,
        name : 'KGF-2',

    },
    {
        image : 'https://assetscdn1.paytm.com/images/cinema/CHANDRAMUKHI--705x750-c8d63560-efb6-11eb-a810-99cd6391090f.jpg' ,
        imdb : 10,
        name : 'Chandramukhi',

    },
    {
        image : 'https://assetscdn1.paytm.com/images/cinema/Runway-705x750-9f569ae0-c22e-11ec-b8f2-c1f4a80a2b4c.jpg' ,
        imdb : 5,
        name : 'Runway 34',

    },
]

console.log(movies)


function display(data){
    data.forEach(function(ele){

        let card = document.createElement('div');
        card.className = 'card';

        let image = document.createElement('img');
        image.src = ele.image;

        let IMDB = document.createElement('p');
        IMDB.innerText = 'IMDB rating : ';
        let rating = document.createElement('span');
        rating.innerText = ele.imdb;
        IMDB.append(rating);

        let name = document.createElement('p');
        name.innerText ='Name: ';
        let m_name = document.createElement('span');
        m_name.innerText = ele.name;
        name.append(m_name);

        card.append(image,IMDB,name);

        document.querySelector('#movies').append(card)



    })
}

display(movies);

let sort = document.querySelector('#sort');

sort.addEventListener('change',function(event){
    let value = sort.value;
    console.log(value == '');

    if(value == 'asc'){
        let data = movies;
        console.log(data);
        data.sort(function(a,b){
            if(a.imdb > b.imdb){
                return 1;
            }
            else if(a.imdb < b.imdb){
                return -1;
            }
            else{
                return 0;
            }
        })
        document.querySelector('#movies').innerHTML ='';
        display(data)
    }
    else if(value == 'dec'){
        let data = movies;
        console.log(data);
        data.sort(function(a,b){
            if(a.imdb < b.imdb){
                return 1;
            }
            else if(a.imdb > b.imdb){
                return -1;
            }
            else{
                return 0;
            }
        })
        document.querySelector('#movies').innerHTML ='';

        display(data)
    }
    else if(value =='def'){
        document.querySelector('#movies').innerHTML ='';
        display(movies);

    }


})
