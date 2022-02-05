import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import React from "react";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import "./App.css";
import data from "./data";

function App() {
	/* setups arround screen size matter */
	const [winWidth, setWinWidth] = React.useState(window.innerWidth);
	const [isMobile, setIsMobile] = React.useState(false);
	const [isTablet, setIsTablet] = React.useState(false);
	window.addEventListener("resize", () => setWinWidth(window.innerWidth));
	React.useEffect(() => {
		setIsMobile(winWidth < 600);
		setIsTablet(winWidth < 992);
	}, [winWidth]);
	/* end setups arround screen size matter */

	return (
		<>
			<Routes>
				<Route path="/" element={<Home isMobile={isMobile} />} />
				<Route
					path="/destination"
					element={
						<Destination
							destinations={data.destinations}
							isMobile={isMobile}
							isTablet={isTablet}
						/>
					}
				>
					<Route
						path=":destName"
						element={
							<Destination
								destinations={data.destinations}
								isMobile={isMobile}
								isTablet={isTablet}
							/>
						}
					></Route>
				</Route>
				<Route
					path="/crew"
					element={<Crew crew={data.crew} isMobile={isMobile} />}
				>
					<Route
						path=":crewName"
						element={<Crew crew={data.crew} isMobile={isMobile} />}
					></Route>
				</Route>
				<Route
					path="/technology"
					element={
						<Technology
							technology={data.technology}
							isMobile={isMobile}
							isTablet={isTablet}
						/>
					}
				>
					<Route
						path=":techName"
						element={
							<Technology
								technology={data.technology}
								isMobile={isMobile}
								isTablet={isTablet}
							/>
						}
					></Route>
				</Route>
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
