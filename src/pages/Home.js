import React from "react";
import MainNavigation from "../components/MainNavigation";
import styles from "./Home.module.css";

const Home = ({ isMobile }) => {
	return (
		<div className={styles.page}>
			<MainNavigation isMobile={isMobile} />
			<main className={styles["content-wrapper"]}>
				<p className={styles["intro-text"]}>
					<span className={styles["intro-text__what"]}>
						SO, YOU WANT TO TRAVEL TO
					</span>
					<span className={styles["intro-text__keyword"]}>SPACE</span>
					<span className={styles["intro-text__description"]}>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</span>
				</p>
				<a href="/destination" className={styles["explore-button"]}>
					<span className={styles["explore-button__text"]}>explore</span>
				</a>
			</main>
		</div>
	);
};

export default Home;
