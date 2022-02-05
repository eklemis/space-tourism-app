import React from "react";
import MainNavigation from "../components/MainNavigation";
import styles from "./Technology.module.css";
import TechnologyItem from "../components/TechnologyItem";

const Technology = ({ technology, isMobile, isTablet }) => {
	return (
		<div className={styles.page}>
			<MainNavigation isMobile={isMobile} />
			<main className="main-wrapper">
				<header className="header">
					<span className="header__number">03</span>
					<p className="header__text">Space Launch 101</p>
				</header>
				<TechnologyItem
					technology={technology}
					isMobile={isMobile}
					isTablet={isTablet}
				/>
			</main>
		</div>
	);
};

export default Technology;
