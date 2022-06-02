/*Problem:- You might have learnt about Stack data structures. It works on LIFO(last in first out) principle. In javascript this feature has been provided in 
the array itself. So you are curious to know how it works. So you want to implement this on your own.*/

class array_custom{
    constructor(){
        this.arr = [];
        this.length =0;
    }

    push(x){
        this.arr[this.length] = x;
        this.length++;
    }

    pop(){
        this.arr.splice(this.length-1,1);
        this.length--;
    }

    top(){
        return this.arr[this.length];
    }

    print(){
        console.log(this.arr);
    }

    printReverse(){
        let a = this.arr.reverse().join(' ');
        console.log(a);
    }

    size(){
        return this.length;
    }
}

let arr = new array_custom();
arr.push(19);
arr.push(12);
arr.push(11);
arr.pop();
// console.log(arr);
console.log(arr.size())