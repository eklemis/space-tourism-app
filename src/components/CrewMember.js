import React from "react";
import styles from "./CrewMember.module.css";
import { NavLink, useParams, useLocation } from "react-router-dom";

const CrewMember = ({ crew, isMobile }) => {
	const location = useLocation();

	let params = useParams();
	let member;
	if (params.crewName) {
		member = crew.filter(
			(person) =>
				person.name.toLowerCase().replace(" ", "") ===
				params.crewName.toLowerCase()
		)[0];
	} else member = crew[0];

	let imageLocation = member.images.png.substring(1);

	const navs = crew.map((member, index) => {
		let styleSufix = "";
		if (location.pathname === "/crew" && index === 0) {
			styleSufix = styles["nav__item--active"];
		}
		return (
			<li key={"crewMember" + index}>
				<NavLink
					to={`/crew/${member.name.toLowerCase().replace(" ", "")}`}
					className={({ isActive }) =>
						isActive
							? styles["nav__item"] + " " + styles["nav__item--active"]
							: styles["nav__item"] + " " + styleSufix
					}
				></NavLink>
			</li>
		);
	});
	const Nav = () => (
		<nav>
			<ul className={styles["navigation"]}>{navs}</ul>
		</nav>
	);
	const Figure = () => (
		<figure className={styles["photo-wrapper"]}>
			<img
				src={imageLocation}
				alt={member.name.toLowerCase() + " photo"}
				className={styles["crew-photo"]}
			/>
		</figure>
	);
	return (
		<>
			<div className={styles["content-wrapper"]}>
				{isMobile && <Figure />}
				{isMobile && <Nav />}
				<div className={styles["crew-info"]}>
					<section>
						<h2 className={styles["crew-role"]}>{member.role}</h2>
						<h3 className={styles["crew-name"]}>{member.name}</h3>
						<p className={styles["crew-bio"]}>{member.bio}</p>
					</section>
					{!isMobile && <Nav />}
				</div>
				{!isMobile && <Figure />}
			</div>
		</>
	);
};

export default CrewMember;
