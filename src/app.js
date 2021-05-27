//2 . fetch listo
document.querySelectorAll(".rick").forEach((btn) => {
  btn.addEventListener("click", () => {
    let defaultd = btn.id;
    let navegacion = {
      episode: "Episodes.html",
      character: "Character.html",
      location: "Ubicaciones.html",
      blog:"Blog.html",
      contacto:"Contact.html",
     
    };
    let web = navegacion[defaultd] || defaultd;
    
    getPestaña(web);
  });
});


const getPestaña = (pestaña) => {
  fetch(`src/components/${pestaña}`)
  .then(res=>res.text())
  .then(data=>document.querySelector("#main-content").innerHTML = data);
};
// 3

 fetch("src/json/api.json")
.then(res=>res.json())
.then(data=>{
  
for (const value of data) {
  document.getElementById("tbody-api").innerHTML += 
  `<tr>
  <td>${value.id}</td>
  <td>${value.name}</td>
  <td>${value.status}</td>
  <td>${value.gender}</td>
  </tr>`
  
}
}) 

//4
/* fetch("/api/api.json")
.then(res=>res.json())
.then(data=>{
  console.log(data)
 for (const values of data) {
  document.getElementById("idcard").innerHTML += 
  `
  simelo` */
  /* <div class="col">
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${value.name}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
</div> 
  
} 
})



*/



// 4de estos
/*  import API from "./api/api.js";
const api = new API();
console.log(api.getCharacter());  */
// 4 

fetch("https://rickandmortyapi.com/api/episode")
.then(res=>res.json())
.then(data=>{
  console.log(data)
 for (const value of data.results) {
  document.getElementById("episode-content").innerHTML += 
  ` <div class="col-sm-6 col-lg-3">
  <div class="card border-0 bg-transparent">
    
    <div class="card-body">
      <h5 class="card-title text-center text-white">
        ${value.name}
      </h5>
      <p class="card-text text-secondary">
        ${value.air_date}
      </p>
    </div>
  </div>
</div>`
  
} 
}) 

fetch("https://rickandmortyapi.com/api/character")
.then(res=>res.json())
.then(data=>{
 
 for (const value of data.results) {
  document.getElementById("character-content").innerHTML += 
  `  <div class="col-sm-6 col-lg-3">
  <div class="card border-0 bg-transparent">
    <img
      src="${value.image}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-center text-white">
      ${value.name}
      </h5>
      <p class="card-text text-secondary">
      ${value.species}
      </p>
    </div>
  </div>
</div>`
  
} 

for (const value of data.results) {
  document.getElementById("tbody-rick").innerHTML += 
  `  <tr class="text-dark" id="${value.name}">
  <td>${value.id}</td>
  <td>${value.name}</td>
  <td>${value.status}</td>
  <td>${value.gender}</td>
  </tr>`
  
}
}) 

//
document.querySelectorAll(".list-r").forEach((btn) => {
  btn.addEventListener("click", () => {
    let defaultd = btn.id;
    let navegacion = {
      episode: "Episodes.html",
      character: "Character.html",
      location: "Ubicaciones.html",
      blog:"Blog.html",
      contacto:"Contact.html",
      portafolio:"Portafolio"
     
    };
    let web = navegacion[defaultd] || defaultd;
    
    getPestaña(web);
  });
});