function getCharacters (){
    return fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .catch(error => console.log(error))
};

export default getCharacters;

function getCharactersId (id){
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .catch(error => console.log(error))
};

export {getCharactersId};