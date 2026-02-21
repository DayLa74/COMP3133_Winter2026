const { gql } = require('graphql-tag');

const typeDefs = gql`

    type Movie {
        id: ID!
        name: String!
        director_name: String!
        production_house: String!
        release_date: String!
        rating: Float!
    }

    type Query {
        getAllMovies: [Movie]
        getMovieById(id: ID!): Movie
        getMoviesByDirector(director_name: String!): [Movie]
    }

    type Mutation {
        addMovie(
            name: String!
            director_name: String!
            production_house: String!
            release_date: String!
            rating: Float!
        ): Movie

        updateMovie(
            id: ID!
            name: String
            director_name: String
            production_house: String
            release_date: String
            rating: Float
        ): Movie

        deleteMovie(id: ID!): String
    }
`;

module.exports = typeDefs;
