import React, {useState} from "react";

//import components
import Nav from "./Nav";
import HogList from "./HogList";


//import data
import hogData from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState([...hogData])
	const [filter, setFilter] = useState({
		greased: false,
		names: false,
		weight: false
	})

	let displayedHogs = hogs.filter(hog => {
			if (!filter.greased) return hog
			if (filter.greased) return hog.greased
	})

	if (filter.names) displayedHogs = displayedHogs.sort((a,b) => a.name.localeCompare(b.name))
	if (filter.weight) displayedHogs = displayedHogs.sort((a,b) => a.weight - b.weight)

	let handleChange = (e) => {
		//you should not be able to check names if weight is checked and vice versa
		setFilter({...filter, [e.target.id]: e.target.checked})
	}

	return (
		<div className="App">
			<Nav />
			Filter Pigs
			<br></br>
			<div style={{display:'flex', justifyContent: 'center' }}>
				<label>Greased?</label>
				<input style={{margin:'3px'}} type="checkbox" id="greased" onChange={handleChange}></input>
				<label>Sort names</label>
				<input style={{margin:'3px'}} type="checkbox" id="names" disabled={filter.weight ? true : false} onChange={handleChange}></input>
				<label>Sort weights</label>
				<input style={{margin:'3px'}} type="checkbox" id="weight" disabled={filter.names ? true : false} onChange={handleChange}></input>
			</div>
		

			<HogList displayedHogs={displayedHogs}/>
		</div>
	);
}

export default App;
