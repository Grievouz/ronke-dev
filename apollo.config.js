module.exports = {
    client: {
        name: "ronke-dev",
        tagName: "graphql",
        includes: [
            "./src/**/*.{ts,tsx}",
            "./src/__generated__/graphql/plugin-documents.graphql",
        ],
        service: {
            name: "GatsbyJS",
            localSchemaFile: "./src/__generated__/graphql/schema.graphql",
        },
    },
};
