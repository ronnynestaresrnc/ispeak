

let btn = document.querySelector('#ira');

btn.addEventListener('click',e =>{
    fetch("src/components/Episodes.html")
    .then(res=>res.text())
    .then(data=>{console.log(data)
        let main_content = document.querySelector('#main-content')
    main_content.innerHTML =data
    })
   
    e.preventDefault();
})
// 4de estos
import API from './api/api.js'
const api = new API()
console.log(api.getCharacter())


















//api