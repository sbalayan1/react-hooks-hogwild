//import components
import HogCard from './HogCard'

function HogList({displayedHogs}) {
    let renderHogs = displayedHogs.map(hog => <HogCard key={hog.name} hog={hog}/>)

    return (
        <div>
            {renderHogs}
        </div>
    )
}

export default HogList