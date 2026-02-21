let movies = [
    {
        id: "1",
        name: "Inception",
        director_name: "Christopher Nolan",
        production_house: "Warner Bros",
        release_date: "2010",
        rating: 8.8
    },
    {
        id: "2",
        name: "Interstellar",
        director_name: "Christopher Nolan",
        production_house: "Paramount Pictures",
        release_date: "2014",
        rating: 8.6
    }
];

const resolvers = {
    Query: {

        getAllMovies: () => movies,

        getMovieById: (_, { id }) => {
            return movies.find(movie => movie.id === id);
        },

        getMoviesByDirector: (_, { director_name }) => {
            return movies.filter(
                movie => movie.director_name === director_name
            );
        }
    },

    Mutation: {

        addMovie: (_, args) => {
            const newMovie = {
                id: String(movies.length + 1),
                ...args
            };
            movies.push(newMovie);
            return newMovie;
        },

        updateMovie: (_, { id, ...updates }) => {
            const movieIndex = movies.findIndex(m => m.id === id);

            if (movieIndex === -1) {
                throw new Error("Movie not found");
            }

            movies[movieIndex] = {
                ...movies[movieIndex],
                ...updates
            };

            return movies[movieIndex];
        },

        deleteMovie: (_, { id }) => {
            const movieIndex = movies.findIndex(m => m.id === id);

            if (movieIndex === -1) {
                throw new Error("Movie not found");
            }

            movies.splice(movieIndex, 1);
            return "Movie deleted successfully";
        }
    }
};

module.exports = resolvers;
