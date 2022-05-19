function Skill(name,city){
    this.name = name;
    this.city = city
}

let amar = new Skill('amar','Goa');
let akbar = new Skill('akbar','mumbai');
let anthony = new Skill('anthony','kashmir');
console.log(amar,akbar,anthony);

function singer(){
    this.skill = 'singer';
}
function chef(){
    this.skill = 'chef';
}
function magician(){
    this.skill = 'magician';
}

singer.call(amar);
console.log(amar);

chef.call(akbar);
console.log(akbar);

magician.call(anthony);
console.log(anthony)

chef.call(amar);    //skill of akbar borrowed by amar
console.log(amar)