   export default class API {
    getCharacter(id){
        fetch("https://rickandmortyapi.com/api/character/2")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)

        })
    }
}