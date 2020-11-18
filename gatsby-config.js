const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

module.exports = {
    siteMetadata: {
        title: "Tammo Ronke",
        description: "A Portfolio made with <3",
        author: "Tammo Ronke <tammo@ronke.dev>",
    },
    plugins: [
        "gatsby-plugin-netlify-cache",
        {
            resolve: "gatsby-plugin-breakpoints",
            options: {
                queries: {
                    mobile: "only screen and (max-width: 800px)",
                },
            },
        },
        {
            resolve: "gatsby-plugin-webfonts",
            options: {
                fonts: {
                    google: [
                        {
                            family: "Domine",
                            variants: ["500"],
                            subsets: ["latin"],
                            fontDisplay: "swap",
                            strategy: "selfHosted",
                        },
                    ],
                },
                formats: ["woff2", "woff"],
                useMinify: true,
                usePreload: true,
            },
        },
        "gatsby-plugin-tsconfig-paths",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                includePaths: ["src/styles"],
                postCssPlugins: [
                    autoprefixer(),
                    cssnano({
                        preset: "default",
                    }),
                ],
            },
        },
        "gatsby-plugin-eslint",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "assets",
                path: `${__dirname}/src/assets`,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Tammo Ronke",
                short_name: "Tammo Ronke",
                start_url: "/",
                background_color: "#000000",
                theme_color: "#000000",
                display: "fullscreen",
                icon: "src/assets/images/favicon.svg",
            },
        },
        {
            resolve: "gatsby-transformer-video",
            options: {
                downloadBinaries: true,
            },
        },
        {
            resolve: "gatsby-plugin-typegen",
            options: {
                outputPath: "./src/__generated__/types/inline-queries.d.ts",
                emitSchema: {
                    "src/__generated__/graphql/schema.graphql": true,
                },
                emitPluginDocuments: {
                    "src/__generated__/graphql/plugin-documents.graphql": true,
                },
            },
        },
        "gatsby-plugin-offline",
    ],
};
