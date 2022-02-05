import React from "react";
import CrewMember from "../components/CrewMember";
import MainNavigation from "../components/MainNavigation";

import styles from "./Crew.module.css";

const Crew = ({ crew, isMobile }) => {
	return (
		<div className={styles.page}>
			<MainNavigation isMobile={isMobile} />
			<main className="main-wrapper">
				<header className="header">
					<span className="header__number">02</span>
					<p className="header__text">Meet Your Crew</p>
				</header>
				<CrewMember crew={crew} isMobile={isMobile} />
			</main>
		</div>
	);
};

export default Crew;
