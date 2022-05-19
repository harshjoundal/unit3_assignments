var roll = document.querySelector('button');

roll.addEventListener('click',function(event){
    let a = Math.floor((Math.random()*6) + 1)
    let b = Math.floor((Math.random()*6) + 1)
    let c = Math.floor((Math.random()*6) + 1)
    // console.log(`A : ${a}`)
    // console.log(`B : ${b}`)
    // console.log(`C : ${c}`)

    document.querySelector('#A>h1').innerText = a;
    document.querySelector('#B>h1').innerText = b;
    document.querySelector('#C>h1').innerText = c;

    if(a>b && a > c){
        document.querySelector('#A').style.backgroundColor ='green'
        if(b > c){
            document.querySelector('#B').style.backgroundColor ='yellow'
            document.querySelector('#C').style.backgroundColor ='blue'
        }
        else if (c > b) {
            document.querySelector('#C').style.backgroundColor ='yellow'
            document.querySelector('#B').style.backgroundColor ='blue'
        }
        else{
            document.querySelector('#C').style.backgroundColor ='blue'
            document.querySelector('#B').style.backgroundColor ='blue'
        }
    }
    else if(b > a && b > c){
        document.querySelector('#B').style.backgroundColor ='green';
        if(a > c){
            document.querySelector('#A').style.backgroundColor ='yellow'
            document.querySelector('#C').style.backgroundColor ='blue'
        }
        else if(c > a){
            document.querySelector('#C').style.backgroundColor ='yellow'
            document.querySelector('#A').style.backgroundColor ='blue'
        }
        else{
        
            document.querySelector('#C').style.backgroundColor ='blue'
            document.querySelector('#A').style.backgroundColor ='blue'
        }

    }
    else{
        document.querySelector('#C').style.backgroundColor ='green';
        if(a > b){
            document.querySelector('#A').style.backgroundColor ='yellow'
            document.querySelector('#B').style.backgroundColor ='blue'
        }
        else if(b > a){
            document.querySelector('#B').style.backgroundColor ='yellow'
            document.querySelector('#A').style.backgroundColor ='blue'
        }
        else{
            document.querySelector('#B').style.backgroundColor ='blue'
            document.querySelector('#A').style.backgroundColor ='blue'
        }


    }

    if(a>b && a > c){
        document.querySelector('#winner>h1').innerText = 'Winner: A'
    }
    else if(b > a && b > c){
        document.querySelector('#winner>h1').innerText = 'Winner: B'
    }
    else if(c > a && c > b){
        document.querySelector('#winner>h1').innerText = 'Winner: C'

    }
    else if (a == b==c){
        document.querySelector('#winner>h1').innerText = 'Draw'


    }

})