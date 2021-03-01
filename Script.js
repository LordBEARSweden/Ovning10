function getApi(){
    
    fetch("https://www.swapi.tech/api/planets/1/")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .catch(err => console.log(err))
    {
         
    }
}
     
