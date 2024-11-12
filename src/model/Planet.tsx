export interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];   
   // URLs of residents living on the planet
    films: string[]; // URLs of films the planet appeared in
    created: string; // Date and time planet data was created in SWAPI
    edited: string; // Date and time planet data was last edited
    url: string; // URL for the planet in SWAPI
  }