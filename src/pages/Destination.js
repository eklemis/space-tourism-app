import React from "react";
import MainNavigation from "../components/MainNavigation";
import DestinationItem from "../components/DestinationItem";
import styles from "./Destination.module.css";

const Destination = ({ destinations, isMobile, isTablet }) => {
	return (
		<div className={styles.page}>
			<MainNavigation isMobile={isMobile} />
			<main className={styles["main-wrapper"]}>
				<header className="header">
					<span className="header__number">01</span>
					<p className="header__text">Pick Your Destination</p>
				</header>

				<DestinationItem
					destination={destinations}
					isMobile={isMobile}
					isTablet={isTablet}
				/>
			</main>
		</div>
	);
};

export default Destination;
