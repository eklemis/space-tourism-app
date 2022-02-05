import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import logo from "../images/logo.svg";
import iconClose from "../images/assets/shared/icon-close.svg";
import iconBurger from "../images/assets/shared/icon-hamburger.svg";

const Navigation = ({ isMobile }) => {
	const [hideNav, setHideNav] = React.useState(isMobile);
	React.useEffect(() => {
		setHideNav(isMobile);
	}, [isMobile]);

	const showNavHandler = () => setHideNav(false);
	const hideNavHandler = () => setHideNav(true);
	return (
		<header className={styles["main-header"]}>
			<nav className={styles["main-navigation"]}>
				<Link to="/">
					<img src={logo} alt="logo" className={styles["logo"]} />
				</Link>
				{isMobile && (
					<button
						href="#"
						onClick={showNavHandler}
						className={styles["btn-blank"]}
					>
						<img
							src={iconBurger}
							alt="show mobile menu"
							className={styles["icon-burger"]}
						/>
					</button>
				)}
				{!hideNav && (
					<ul className={styles["nav__wrapper"]}>
						{isMobile && (
							<button
								href="#"
								onClick={hideNavHandler}
								className={styles["btn-blank"]}
							>
								<img
									src={iconClose}
									alt="hide mobile menu"
									className={styles["icon-close"]}
								/>
							</button>
						)}

						<li>
							<NavLink
								to="/"
								key="nav-home"
								className={({ isActive }) =>
									isActive
										? styles["nav__item"] + " " + styles["nav__item--active"]
										: styles["nav__item"]
								}
							>
								<span className={styles["nav__number"]}>00</span>
								<span className={styles["nav__text"]}>Home</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/destination"
								key="nav-dest"
								className={({ isActive }) =>
									isActive
										? styles["nav__item"] + " " + styles["nav__item--active"]
										: styles["nav__item"]
								}
							>
								<span className={styles["nav__number"]}>01</span>
								<span className={styles["nav__text"]}>Destination</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/crew"
								key="nav-crew"
								className={({ isActive }) =>
									isActive
										? styles["nav__item"] + " " + styles["nav__item--active"]
										: styles["nav__item"]
								}
							>
								<span className={styles["nav__number"]}>02</span>
								<span className={styles["nav__text"]}>Crew</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/technology"
								key="nav-tech"
								className={({ isActive }) =>
									isActive
										? styles["nav__item"] + " " + styles["nav__item--active"]
										: styles["nav__item"]
								}
							>
								<span className={styles["nav__number"]}>03</span>
								<span className={styles["nav__text"]}>Technology</span>
							</NavLink>
						</li>
					</ul>
				)}
			</nav>
		</header>
	);
};

export default Navigation;
