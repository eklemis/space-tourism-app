import React from "react";
import styles from "./TechnologyItem.module.css";
import { NavLink, useParams, useLocation } from "react-router-dom";

const TechnologyItem = ({ technology, isMobile, isTablet }) => {
	const location = useLocation();
	let params = useParams();

	let techItem;
	if (params.techName) {
		techItem = technology.filter(
			(tech) => tech.name.toLowerCase().replace(" ", "") === params.techName
		)[0];
	} else techItem = technology[0];

	const [imageLocation, setImageLocation] = React.useState(
		techItem.images.portrait.substring(1)
	);

	React.useEffect(() => {
		if (isMobile || isTablet) {
			setImageLocation(techItem.images.landscape.substring(1));
		}
	}, [isMobile, techItem, isTablet]);

	const navs = technology.map((tech, index) => {
		let styleSufix = "";
		if (location.pathname === "/technology" && index === 0) {
			styleSufix = styles["nav__item--active"];
		}
		return (
			<li key={"tech" + index}>
				<NavLink
					to={`/technology/${tech.name.toLowerCase().replace(" ", "")}`}
					className={({ isActive }) =>
						isActive
							? styles["nav__item"] + " " + styles["nav__item--active"]
							: styles["nav__item"] + " " + styleSufix
					}
				>
					<span>{index + 1}</span>
				</NavLink>
			</li>
		);
	});
	const Nav = () => (
		<nav>
			<ul className={styles["navigation"]}>{navs}</ul>
		</nav>
	);
	const Figure = () => (
		<figure>
			<img
				src={imageLocation}
				alt={techItem.name.toLowerCase() + " photo"}
				className={styles["tech-photo"]}
			/>
		</figure>
	);
	return (
		<>
			<div className={styles["content-wrapper"]}>
				{(isMobile || isTablet) && <Figure />}
				{(isMobile || isTablet) && <Nav />}
				<div className={styles["hor-wrapper"]}>
					{!isMobile && !isTablet && <Nav />}
					<section>
						<h2 className={styles["tech-tag"]}>THE TERMINOLOGY…</h2>
						<h3 className={styles["tech-name"]}>{techItem.name}</h3>
						<p className={styles["tech-desc"]}>{techItem.description}</p>
					</section>
				</div>
				{!isMobile && !isTablet && <Figure />}
			</div>
		</>
	);
};

export default TechnologyItem;
