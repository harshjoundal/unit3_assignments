
function Myarray(){
    this.length= arguments.length;

    for(let i = 0;i < this.length;i++){
        this[i] = arguments[i];
    }
}

let a =new Myarray(1,2,3,4,5,6);
console.log(Object.values(a));


Myarray.prototype.n_push = function(n){
    this[this.length] = n;
    this.length++;
}

Myarray.prototype.n_pop=function(){
    delete this[this.length-1];
    this.length--;
}

Myarray.prototype.top = function(){
    console.log(this[this.length-1]);
}

Myarray.prototype.print= function(){
    console.log(Object.values(this));
}


Myarray.prototype.printReverse = function(){
    let a = Object.values(this);
    let b = []
    for(let i = a.length-1; i >=0;i--){
        b.push(a[i]);
    }
    console.log(b);
}

Myarray.prototype.size = function(){
    console.log(this.length);
}


a.n_push(10);
console.log(a);

a.n_pop()
console.log(a);

a.top();

a.print()

a.printReverse();

a.size();