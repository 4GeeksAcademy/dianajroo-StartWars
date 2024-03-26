import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


  const LearnMorePlanets = () => {

    const {id} = useParams()

    const [learnMorePlanets, setLearnMorePlanets] = useState(null)

    const fetchLearnMorePlanets = async () => {
        console.log(id)
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
        const data = await response.json()
        setLearnMorePlanets(data.result)
        console.log(data.result)
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
                    <p>{learnMorePlanets.properties.description}</p>
                </div>
            }


        </div>
    )
}
  export default LearnMorePlanets;
