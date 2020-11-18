import { About, Project } from "components";
import { Layout } from "components/layout";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styles from "./index.module.scss";

const IndexPage = () => {
    const data = useStaticQuery<GatsbyTypes.IndexQuery>(graphql`
        query Index {
            orbiteerGameplayOneVideo: file(
                relativePath: { eq: "videos/orbiteer/gameplay1.mp4" }
            ) {
                videoH264 {
                    path
                }
                videoScreenshots(timestamps: ["5%"], width: 350) {
                    publicURL
                }
            }
            orbiteerGameplayTwoVideo: file(
                relativePath: { eq: "videos/orbiteer/gameplay2.mp4" }
            ) {
                videoH264 {
                    path
                }
                videoScreenshots(timestamps: ["5%"], width: 350) {
                    publicURL
                }
            }
            campusjaegerCreateJobVideo: file(
                relativePath: { eq: "videos/campusjaeger/createJob.mp4" }
            ) {
                videoH264 {
                    path
                }
                videoScreenshots(timestamps: ["5%"], width: 350) {
                    publicURL
                }
            }
            barbraSidebarVideo: file(
                relativePath: { eq: "videos/barbra/sidebar.mp4" }
            ) {
                videoH264 {
                    path
                }
                videoScreenshots(timestamps: ["5%"], width: 350) {
                    publicURL
                }
            }
            barbraFlashcardsVideo: file(
                relativePath: { eq: "videos/barbra/flashcards.mp4" }
            ) {
                videoH264 {
                    path
                }
                videoScreenshots(timestamps: ["5%"], width: 350) {
                    publicURL
                }
            }
            barbraHighlightsVideo: file(
                relativePath: { eq: "videos/barbra/highlights.mp4" }
            ) {
                videoH264 {
                    path
                }
                videoScreenshots(timestamps: ["5%"], width: 350) {
                    publicURL
                }
            }
            barbraHighlightsOverviewsVideo: file(
                relativePath: { eq: "videos/barbra/highlightsOverview.mp4" }
            ) {
                videoH264 {
                    path
                }
                videoScreenshots(timestamps: ["5%"], width: 350) {
                    publicURL
                }
            }
            barbraSlashVideo: file(
                relativePath: { eq: "videos/barbra/slash.mp4" }
            ) {
                videoH264 {
                    path
                }
                videoScreenshots(timestamps: ["5%"], width: 350) {
                    publicURL
                }
            }
            barbraSearchImage: file(
                relativePath: { eq: "images/barbra/search.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            campusjaegerApplicantOverviewImage: file(
                relativePath: {
                    eq: "images/campusjaeger/applicantOverview.png"
                }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            campusjaegerCompanyDisplayImage: file(
                relativePath: { eq: "images/campusjaeger/companyDisplay.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            campusjaegerNewApplicantsImage: file(
                relativePath: { eq: "images/campusjaeger/newApplicants.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            campusjaegerOfferImage: file(
                relativePath: { eq: "images/campusjaeger/offer.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            campusjaegerSetAppointmentImage: file(
                relativePath: { eq: "images/campusjaeger/setAppointment.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            orbiteerPlanetImage: file(
                relativePath: { eq: "images/orbiteer/planet.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            orbiteerSatelliteImage: file(
                relativePath: { eq: "images/orbiteer/satellite.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <div className={styles.index}>
                <About />
                <Project
                    previews={[
                        { video: data.barbraSidebarVideo },
                        { video: data.barbraFlashcardsVideo },
                        {
                            fluid: data.barbraSearchImage.childImageSharp.fluid,
                        },
                        { video: data.barbraHighlightsOverviewsVideo },
                        { video: data.barbraHighlightsVideo },
                        { video: data.barbraSlashVideo },
                    ]}
                    name={"Barbra"}
                    href={"https://barbra.io/"}
                    title={
                        "A learning tool for college, CTO/Founder, 2018 - 2020"
                    }
                />
                <Project
                    previews={[
                        { video: data.campusjaegerCreateJobVideo },
                        {
                            fluid:
                                data.campusjaegerApplicantOverviewImage
                                    .childImageSharp.fluid,
                        },
                        {
                            fluid:
                                data.campusjaegerCompanyDisplayImage
                                    .childImageSharp.fluid,
                        },
                        {
                            fluid:
                                data.campusjaegerNewApplicantsImage
                                    .childImageSharp.fluid,
                        },
                        {
                            fluid:
                                data.campusjaegerOfferImage.childImageSharp
                                    .fluid,
                        },
                        {
                            fluid:
                                data.campusjaegerSetAppointmentImage
                                    .childImageSharp.fluid,
                        },
                    ]}
                    name={"Campusjäger"}
                    href={"https://www.campusjaeger.de/"}
                    title={
                        "A recruiting platform, Backend Developer, 2018 - 2019"
                    }
                    description={null}
                />
                <Project
                    previews={[
                        {
                            video: data.orbiteerGameplayTwoVideo,
                        },
                        {
                            video: data.orbiteerGameplayOneVideo,
                        },
                        {
                            fluid:
                                data.orbiteerPlanetImage.childImageSharp.fluid,
                        },
                        {
                            fluid:
                                data.orbiteerSatelliteImage.childImageSharp
                                    .fluid,
                        },
                    ]}
                    name={"Orbiteer"}
                    href={"https://ldjam.com/events/ludum-dare/42/orbiteer"}
                    title={"A game made within 48 hours, 2018"}
                    description={
                        <a
                            href={
                                "https://ldjam.com/events/ludum-dare/42/orbiteer"
                            }
                            target={"_blank"}
                        >
                            {"Check out the game"}
                        </a>
                    }
                />
                <div className={styles.index__hmu}>
                    {"hmu "}
                    <a href={"mailto:tammo@ronke.dev"}>{"tammo@ronke.dev"}</a>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
