import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


  const LearnMorePlanets = () => {

    const {id} = useParams()

    const [learnMorePlanets, setlearnMorePlanets] = useState(null)

    const fetchLearnMorePlanets = async () => {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
        const data = await response.json()
        setlearnMorePlanets(data.result)
        
    }

    useEffect(() => {
        fetchLearnMorePlanets()
    },[])


    return(
        <div >
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            {learnMorePlanets && 
                <div>
                    <h1>{learnMorePlanets.properties.name}</h1>
                    <p>{learnMorePlanets.description}</p>
                </div>
            }


        </div>
    )
}
  export default LearnMorePlanets;
