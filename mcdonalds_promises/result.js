let food = {
    Pizza : 'https://b.zmtcdn.com/data/pictures/4/19284694/c577320b811251cd739f9dbbf4a5e1ec_o2_featured_v2.jpeg?output-format=webp',
    Waffle :'https://b.zmtcdn.com/data/pictures/chains/8/18875798/64e328ee2b6fe4d82aa36f2f5213f737_o2_featured_v2.jpg?output-format=webp',
    Biryani : 'https://b.zmtcdn.com/data/pictures/4/18816984/e4ffb193dc2b92d213ce5561a6d4bb66_o2_featured_v2.jpg?output-format=webp',
    Ice_cream :'https://b.zmtcdn.com/data/pictures/8/18812718/e0ded1cb1b76dc5011e79e42ddfcd833_o2_featured_v2.png?output-format=webp',
}


let order = JSON.parse(localStorage.getItem('order'));


let a = new Promise(function(resolve,reject){

    let result = true;

    setTimeout(function(){
        if(result == true){
            resolve('Your order is ready');
        }
        else{
            reject('We cant able to serve your order!')
        }
    },3000)
})

a.then(function(value){
    document.getElementById('status').innerText = value;
   
    let image_container = document.getElementById('image');
    image_container.innerHTML ='';
    // // console.log(value)
    
    order.forEach(function(ele){
        let image = document.createElement('img');
        console.log(food[ele])
        image.src = food[ele];

        image_container.append(image);
    })
})

a.catch(function(err){
    document.getElementById('status').innerText = value;

})
