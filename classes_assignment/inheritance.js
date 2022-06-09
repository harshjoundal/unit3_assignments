/* Problem statement :-
You have been appointed as senior developer in Tata’s R&D department. The engineers there are lazy, 
they don’t want to do everything from scratch whenever they create a new model. They expect you to 
help them create an inheritance model for the automobiles.*/

class Car{
    constructor(){
        this.engine = '1000cc';
        this.car_length = '4m';
        this.drive ='4WD';
    }
}

class suv extends Car{
    constructor(){
        super();
        this.height ='2m';

    }
}

let harrier = new suv;
console.log(harrier);
