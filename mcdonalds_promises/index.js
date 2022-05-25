
let food_order = [];

let order = document.querySelector('form');

order.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(order.pizza.checked)

    if(order.pizza.checked){
        food_order.push(order.pizza.value);
    }
    if(order.waffle.checked){
        food_order.push(order.waffle.value);
    }
    if(order.biryani.checked){
        food_order.push(order.biryani.value);
    }
    if(order.Ice_cream.checked){
        food_order.push(order.Ice_cream.value);
    }

    console.log(food_order);

    localStorage.setItem('order',JSON.stringify(food_order));

    window.location.href = 'result.html'

})