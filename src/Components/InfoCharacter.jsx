import { useEffect, useState } from "react";
import { getCharactersId } from "../Services/Characters.js";
import { useParams } from "react-router-dom";

function InfoCharacter (){
    const {id} = useParams ();
    const [character, setCharacter] = useState ({});
        
    
    useEffect(() => {
        const request = async () => {
            try{
            const res = await getCharactersId(id)
            setCharacter(res);
            }catch(error){console.log(error)}
    };

    request ();
    },[id]);

    return(
        <div className="row">
            <div className="mt-2 mb-2"><h3>Name: {character.name}</h3></div>
            <div className="mt-2 text-primary fw-bold">Species: </div> <p>{character.species}</p>
            <div className="mt-2 text-primary fw-bold">Status: </div> <p>{character.status}</p>
            <div className="mt-2 text-primary fw-bold">Gender: </div> <p>{character.gender}</p>
        </div>
    );
};
export default InfoCharacter;