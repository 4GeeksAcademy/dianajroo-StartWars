import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const LearnMore = () => {

    const { id } = useParams()

    const [learnMore, setLearnMore] = useState(null)

    const fetchLearMore = async () => {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
        const data = await response.json()
        setLearnMore(data.result)

    }

    useEffect(() => {
        fetchLearMore()
    }, [])


    return (


        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="body">


                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                {learnMore && 
                <div>
                    <h1>{learnMore.properties.name}</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit volutatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae hjdue ndhu nsbsh ki nsbgtwsk nklspw ngdyej pspjses nhuk njshy.Nysmdujd kzops nb jshhi bsgwu ñapw ndhd bhd, njdkieue hkwamsndhe dkdkc.bhuiwuoijjdhui bigiuqwdohudjd mhduihie nchud kjduihuedebe hbduhdhbuygc jhbdhudb,jkhbdhuhuijew.Nhbhchchiuwhfi hbdij mncjd jkurbfhh.</p>
                 </div>
                }
            </div>
            <div className="footer">
                {learnMore &&
                    <div>
                        <p>{learnMore.properties.name}</p>
                        <p>{learnMore.properties.birth_year}</p>
                        <p>{learnMore.properties.gender}</p>
                        <p>{learnMore.properties.height}</p>
                        <p>{learnMore.properties.skin_color}</p>
                        <p>{learnMore.properties.eye_color}</p>

                    </div>
                }
            </div>

        </div>

    )
}


export default LearnMore;





