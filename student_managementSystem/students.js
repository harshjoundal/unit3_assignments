let student = JSON.parse(localStorage.getItem('student_data'));
let trash = JSON.parse(localStorage.getItem('trash')) || [];

console.log(student);

function display(data){
    data.forEach(function(ele,ind){
        let row = document.createElement('tr');

        let photo = document.createElement('td');
        photo.className = 'photo'
        let img = document.createElement('img');
        img.src = ele.photo;
        photo.append(img);


        let name = document.createElement('td');
        name.innerText = ele.name;

        let course = document.createElement('td');
        course.innerText = ele.course;

        let unit = document.createElement('td');
        unit.innerText = ele.unit;

        let batch = document.createElement('td');
        batch.innerText = ele.batch;


        //Row remove
        let Remove_row = document.createElement('td');
        Remove_row.className = 'Remove_row';
        Remove_row.innerText = 'Delete'

        Remove_row.addEventListener('click',function(event){
            
            trash.push(ele);
            localStorage.setItem('trash',JSON.stringify(trash));

            event.target.parentNode.remove()
            event.target.parentNode.innerHTML = "";
            data.splice(ind,1);
            localStorage.setItem('student_data',JSON.stringify(data));
            window.location.reload();
        })
                
        row.append(photo,name,course,unit,batch,Remove_row);

        document.querySelector('tbody').append(row);



    })
}

display(student)

let batch1 = student.filter(function(ele){
    return ele.batch == 1;
})
document.querySelector('#totalB1 > p').innerText = batch1.length

let batch2 = student.filter(function(ele){
    return ele.batch == 2;
})
document.querySelector('#totalB2 > p').innerText = batch2.length
