const API_KEY = 'your_api_key';  // Replace with your actual API key
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const movieContainer = document.getElementById('movie-container');

// Fetch movie data from the API
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        displayMovies(movies);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Function to display movies on the page
function displayMovies(movies) {
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img src="${IMAGE_URL + movie.poster_path}" alt="${movie.title}">
            <div class="movie-title">${movie.title}</div>
        `;

        movieContainer.appendChild(movieElement);
    });
}
