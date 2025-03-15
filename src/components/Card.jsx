import { useEffect, useState } from "react";
import "../styles/card.css"

const Card = ({name}) => {

    const [image,setImage] = useState();

    const getCardImage = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {mode: "cors"})
            if (!response.ok) {
                console.log("There was an error getting an image")
            }
            const imageJSON = await response.json();
            setImage(imageJSON.sprites.front_default)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        getCardImage()
    }, [])

    return (
        <div className="playing-card">
            <img src={image} alt={name} title={`This is a ${name}!`}/>
        </div>
    )
}

export default Card;