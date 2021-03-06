import { graphql, useStaticQuery } from "gatsby";
import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

export const Layout: FunctionComponent = ({ children }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: "en",
                }}
                title={site.siteMetadata?.title}
                meta={[
                    {
                        name: "description",
                        content: site.siteMetadata.description,
                    },
                    {
                        property: "og:title",
                        content: site.siteMetadata?.title,
                    },
                    {
                        property: "og:description",
                        content: site.siteMetadata.description,
                    },
                    {
                        property: "og:type",
                        content: "website",
                    },
                    {
                        name: "twitter:card",
                        content: "summary",
                    },
                    {
                        name: "twitter:creator",
                        content: site.siteMetadata?.author || "",
                    },
                    {
                        name: "twitter:title",
                        content: site.siteMetadata?.title,
                    },
                    {
                        name: "twitter:description",
                        content: site.siteMetadata.description,
                    },
                ]}
            />
            {children}
        </>
    );
};
