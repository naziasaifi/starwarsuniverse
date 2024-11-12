export default interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;   
  
    pilots: string[]; // URLs of pilots of the starship (empty in this case)
    films: string[]; // URLs of films the starship appeared in
    created: string; // Date and time starship data was created in SWAPI
    edited: string; // Date and time starship data was last edited
    url: string; // URL for the starship in SWAPI
  }
  