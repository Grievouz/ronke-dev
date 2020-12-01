import React from "react";
import styles from "./about.module.scss";

export const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about__name}>
                {"Tammo"}
                <br />
                {"Ronke."}
            </div>
            <div className={styles.about__description}>
                {
                    "I’m a 20-year-old Fullstack Developer fascinated by history & Stoicism. I have 3 years of experience with system architecture and distributed systems and am fluent in 8+ programming languages (even some Assembly 😅). I love messing around with electrical engineering and IoT projects. ⚡"
                }
            </div>
        </section>
    );
};
