const fs = require('fs')
const express = require('express')
const cors = require('cors')
const path = require('path')
const { ApolloServer } = require('apollo-server-express');
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const {PrismaClient} = require("@prisma/client");
const { getUserId } = require('./utils');
const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");
const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js");


const prisma = new PrismaClient({
    errorFormat: 'minimal'
});

const resolvers = {
    Upload: GraphQLUpload,
    Query,
    Mutation,
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: ({ req }) => {
        return {
            ...req,
            prisma,
            userId:
                req && req.headers.authorization
                    ? getUserId(req)
                    : null
        };
    }
})

const app = express();


app.use(graphqlUploadExpress({ maxFileSize: 15000000, maxFiles: 1 }));


app.use(cors({ origin: 'http://localhost:3000' }));


const imageDir = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(imageDir));

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
}

startServer().then(() => {
    app.listen({ port: 4000 }, () =>
        console.log(`Server is running on http://localhost:4000${server.graphqlPath}`)
        );
});