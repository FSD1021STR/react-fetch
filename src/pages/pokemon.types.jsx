import React, { useEffect, useState} from "react";
import TypeCard from "../components/typeCard/typeCard";

const PokemonTypes = (props) => {

    const [types, setTypes] = useState([]);


    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

        fetch("https://pokeapi.co/api/v2/type/",requestOptions)
            .then((response) => response.json())
            .then((json)=>setTypes(json.results))
    }, []);
    
    return (
        <div style={{
            marginTop: "50px"
        }}>
            {types.map((type) => (
                <TypeCard key={type.name} name={type.name} />
            ))}
        </div>
    )

}

export default PokemonTypes