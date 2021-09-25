import React from "react";
import { TrafficLights } from "./TrafficLights";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="text-center mt-5"></div>
			<div className="trafficLights">
				<TrafficLights />
			</div>
		</>
	);
};

export default Home;
