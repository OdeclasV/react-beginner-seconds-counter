import React from "react";
import { TrafficLights } from "./TrafficLights";

//create your first component
const Home = () => {
	return (
		<>
			<div className="trafficTop text-center mt-5">hello</div>
			<div className="trafficLights">
				<TrafficLights />
			</div>
		</>
	);
};

export default Home;
