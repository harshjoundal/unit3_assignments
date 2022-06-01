const api_key = 'AIzaSyCk5jRp7Gv_U_ezeFJF3gDcuNODrjMJWtU';
const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY]'

let search = async() =>{
    let query = document.getElementById('search_input').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`);

    let data = await res.json();
    data = data.items;
    // console.log(data);
    append(data);

}

let append =(data) =>{
    let container = document.getElementById('container');
    container.innerHTML =null;

    data.forEach(({id:{videoId},snippet:{thumbnails,title}})=>{
        let div = document.createElement('div');


        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow ='fullscreen';

        let h3 = document.createElement('h3');
        h3.id ='title';
        h3.innerText = title;

        div.append(iframe,h3);
        container.append(div)
    })
}


////////homepage

let trending =async()=>{

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=mostpopularinindia&key=${api_key}`);
    let data = await res.json();
    data = data.items;

    append(data);
}
trending();

let home = () =>{
    window.location.reload();
}