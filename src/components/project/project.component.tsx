import ArrowSvg from "assets/images/arrow.svg";
import Img from "gatsby-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Slide,
    Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
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
    const breakpoints = useBreakpoint();

    return (
        <section className={styles.project}>
            {breakpoints.mobile ? (
                <CarouselProvider
                    naturalSlideWidth={350}
                    naturalSlideHeight={235}
                    totalSlides={previews.length}
                    visibleSlides={1}
                    className={styles.project__carousel}
                    infinite
                >
                    <ButtonBack className={styles.project__back}>
                        <img alt={"back arrow"} src={ArrowSvg} />
                    </ButtonBack>
                    <ButtonNext className={styles.project__next}>
                        <img alt={"next arrow"} src={ArrowSvg} />
                    </ButtonNext>
                    <Slider>
                        {previews.map((preview, index) => {
                            if ("video" in preview) {
                                return (
                                    <Slide index={index}>
                                        <video
                                            className={styles.project__preview}
                                            preload="none"
                                            muted
                                            key={index}
                                            autoPlay
                                            playsInline
                                            loop
                                            src={preview.video.videoH264.path}
                                            poster={
                                                preview.video
                                                    .videoScreenshots[0]
                                                    .publicURL
                                            }
                                        />
                                    </Slide>
                                );
                            }

                            if ("fluid" in preview) {
                                return (
                                    <Slide index={index}>
                                        <div
                                            className={
                                                styles.project__previewWrapper
                                            }
                                        >
                                            <Img
                                                className={
                                                    styles.project__preview
                                                }
                                                key={index}
                                                fluid={preview.fluid}
                                            />
                                        </div>
                                    </Slide>
                                );
                            }

                            return null;
                        })}
                    </Slider>
                </CarouselProvider>
            ) : (
                <div className={styles.project__previews}>
                    {previews.map((preview, index) => {
                        if ("video" in preview) {
                            return (
                                <video
                                    className={styles.project__preview}
                                    preload="none"
                                    muted
                                    key={index}
                                    autoPlay
                                    playsInline
                                    loop
                                    src={preview.video.videoH264.path}
                                    poster={
                                        preview.video.videoScreenshots[0]
                                            .publicURL
                                    }
                                />
                            );
                        }

                        if ("fluid" in preview) {
                            return (
                                <Img
                                    className={styles.project__preview}
                                    key={index}
                                    fluid={preview.fluid}
                                />
                            );
                        }

                        return null;
                    })}
                </div>
            )}

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
