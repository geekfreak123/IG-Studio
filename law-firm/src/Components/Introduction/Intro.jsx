import React from "react";
import styles from "./Intro.module.css";

const Introduction = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.introHeading}>
					<h2>Let’s Introduce Ourself</h2>
				</div>
				<div className={styles.partition}></div>
				<div className={styles.introType}>
					<h1>Criminal Lawyer</h1>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequatduis enim velit mollit Exercitation.
					</p>
				</div>
			</div>
		</>
	);
};

export default Introduction;
