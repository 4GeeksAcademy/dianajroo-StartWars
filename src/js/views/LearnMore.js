import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


  const LearnMore = () => {

    const {id} = useParams()

    const [learnMore, setlearnMore] = useState(null)

    const fetchLearMore = async () => {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
        const data = await response.json()
        setlearnMore(data.result)
        
    }

    useEffect(() => {
        fetchLearMore()
    },[])


    return(
        <div >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
            {learnMore && 
                <div>
                    <h1>{learnMore.properties.name}</h1>
                    <p>{learnMore.description}</p>
                </div>
            }


        </div>
    )
}
  export default LearnMore;





