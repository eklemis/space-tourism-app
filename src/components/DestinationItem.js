import React from "react";
import styles from "./DestinationItem.module.css";
import { NavLink, useParams, useLocation } from "react-router-dom";

const DestinationItem = ({ destination, isMobile, isTablet }) => {
	const location = useLocation();
	let params = useParams();

	let destItem;
	if (params.destName) {
		destItem = destination.filter(
			(dest) => dest.name.toLowerCase().replace(" ", "") === params.destName
		)[0];
	} else destItem = destination[0];

	let imageLocation = destItem.images.png.substring(1);

	const navs = destination.map((dest, index) => {
		let styleSufix = "";
		if (location.pathname === "/destination" && index === 0) {
			styleSufix = styles["nav__item--active"];
		}
		return (
			<li key={"dest" + index}>
				<NavLink
					to={`/destination/${dest.name.toLowerCase().replace(" ", "")}`}
					className={({ isActive }) =>
						isActive
							? styles["nav__item"] + " " + styles["nav__item--active"]
							: styles["nav__item"] + " " + styleSufix
					}
				>
					<span>{dest.name}</span>
				</NavLink>
			</li>
		);
	});
	const Fig = () => (
		<figure>
			<img
				src={imageLocation}
				alt={destItem.name.toLowerCase() + " image"}
				className={styles["dest-image"]}
			/>
		</figure>
	);
	return (
		<>
			{(isMobile || isTablet) && <Fig />}
			<nav>
				<ul className={styles["navigation"]}>{navs}</ul>
			</nav>
			<div className={styles["content-wrapper"]}>
				{!isMobile && !isTablet && <Fig />}
				<article className={styles["place-about"]}>
					<h2 className={styles["place-title"]}>{destItem.name}</h2>
					<p className={styles["place-description"]}>{destItem.description}</p>
					<footer className={styles["travel-info"]}>
						<div>
							<span className={styles["travel-info__label"]}>
								avg. distance
							</span>
							<p className={styles["travel-info__info"]}>{destItem.distance}</p>
						</div>
						<div>
							<span className={styles["travel-info__label"]}>
								est. travel time
							</span>
							<p className={styles["travel-info__info"]}>{destItem.travel}</p>
						</div>
					</footer>
				</article>
			</div>
		</>
	);
};

export default DestinationItem;
