import Img from "gatsby-image";
import React, { FunctionComponent, ReactNode } from "react";
import styles from "./project.module.scss";

export interface ProjectProps {
    previews: any[];
    name: string;
    href: string;
    title: string;
    description?: ReactNode;
}

export const Project: FunctionComponent<ProjectProps> = ({
    previews,
    name,
    href,
    title,
    description,
}) => {
    return (
        <section className={styles.project}>
            <div className={styles.project__previews}>
                {previews.map((preview, index) => {
                    if ("video" in preview) {
                        return (
                            <video
                                preload="none"
                                muted
                                key={index}
                                autoPlay
                                playsInline
                                loop
                                src={preview.video.videoH264.path}
                                poster={
                                    preview.video.videoScreenshots[0].publicURL
                                }
                            />
                        );
                    }

                    if ("fluid" in preview) {
                        return <Img key={index} fluid={preview.fluid} />;
                    }

                    return null;
                })}
            </div>
            <div className={styles.project__title}>
                <a href={href} target={"_blank"}>
                    {name}
                </a>
                {" – "}
                {title}
            </div>
            {description ? (
                <div className={styles.project__description}>{description}</div>
            ) : null}
        </section>
    );
};
