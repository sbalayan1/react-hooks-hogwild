import React, {useState} from 'react'

function HogCard({hog}) {
    const [viewDetails, setViewDetails] = useState(false)
    return (
        <div onClick={() => setViewDetails(!viewDetails)}>
            <h2>{hog.name}</h2>
            <img src={hog.image} alt={hog.name}/>
            {viewDetails ? 
                <ul>
                    <li>Specialty: {hog.specialty}</li>
                    <li>Weight: {hog.weight}</li>
                    <li>Greased: {hog.greased == true ? 'true' : 'false'}</li>
                    <li>Highest Medal Achieved: {hog['highest medal achieved']}</li>
                </ul>
            :
                null
            }
        </div>
    )
}

export default HogCard