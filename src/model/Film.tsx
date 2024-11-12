export default interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[]; // URLs of characters   appearing in the film
    planets: string[]; // URLs of planets featured in the film
    starships: string[]; // URLs of starships used in the film
    vehicles: string[]; // URLs of vehicles featured in the film
    species: string[]; // URLs of alien species present in the film
    created: string; // Date and time the movie data was created in SWAPI
    edited: string; // Date and time the movie data was last edited
    url: string; // URL for the movie in SWAPI
  }