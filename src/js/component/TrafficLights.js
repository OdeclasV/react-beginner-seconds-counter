import React from "react";

export const TrafficLights = () => {
	const [whichLightsOn, setWhichLightsOn] = React.useState("");
	return (
		<>
			<div
				className={"red" + (whichLightsOn === "red" ? " lightOn" : "")}
				onClick={() => {
					setWhichLightsOn("red");
				}}></div>
			<div
				className={
					"yellow" + (whichLightsOn === "yellow" ? " lightOn" : "")
				}
				onClick={() => {
					setWhichLightsOn("yellow");
				}}></div>
			<div
				className={
					"green" + (whichLightsOn === "green" ? " lightOn" : "")
				}
				onClick={() => {
					setWhichLightsOn("green");
				}}></div>
		</>
	);
};
