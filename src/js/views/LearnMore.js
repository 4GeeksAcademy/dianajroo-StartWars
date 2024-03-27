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


        <div className="container">


            <div className="body" style={{ display: 'flex', justifyContent: 'space-between' }}>



                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                {learnMore &&
                    <div>
                        <h1>{learnMore.properties.name}</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit volutatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae hjdue ndhu nsbsh ki nsbgtwsk nklspw ngdyej pspjses nhuk njshy.Nysmdujd kzops nb jshhi bsgwu ñapw ndhd bhd, njdkieue hkwamsndhe dkdkc.bhuiwuoijjdhui bigiuqwdohudjd mhduihie nchud kjduihuedebe hbduhdhbuygc jhbdhudb,jkhbdhuhuijew.Nhbhchchiuwhfi hbdij mncjd jkurbfhh.</p>
                    </div>
                }
            </div>
            <div className="footer" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                {learnMore &&
                    <div className="row"  >
                        <div className="col-2"><h3>Name {learnMore.properties.name} </h3> </div>
                        <div className="col-2"> <h3>Birth Year  {learnMore.properties.birth_year} </h3>      </div>
                        <div className="col-2"> Gender {learnMore.properties.gender}   </div>
                        <div className="col-2"> Height   {learnMore.properties.height}    </div>
                        <div className="col-2"> Skin Color {learnMore.properties.skin_color}    </div>
                        <div className="col-2">  Eye Color{learnMore.properties.eye_color}   </div>
                    </div>
                }
            </div>

        </div>

    )
}


export default LearnMore;




