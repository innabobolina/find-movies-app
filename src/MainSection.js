import React from "react";
import "./MainSection.scss";

export default function MainSection() {
  return (
    <>
      <p>Movies</p>

      <div className="movie-wrapper">
        {movies.map((x) => {
          return (
            <div key={x.imdbID}>
              <img className="movie-image" src={x.Poster} />
            </div>
          );
        })}
      </div>
    </>
  );
}

const movies = [
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy, Sci-Fi",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 86 wins & 130 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "82%",
      },
      {
        Source: "Metacritic",
        Value: "83/100",
      },
    ],
    Metascore: "83",
    imdbRating: "7.8",
    imdbVotes: "1,139,497",
    imdbID: "tt0499549",
    Type: "movie",
    DVD: "10 Feb 2016",
    BoxOffice: "$760,507,625",
    Production: "Dune, Lightstorm Entertainment, Ingenious Film Partners",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Monster Hunter",
    Year: "2020",
    Rated: "PG-13",
    Released: "18 Dec 2020",
    Runtime: "103 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "Paul W.S. Anderson",
    Writer: "Paul W.S. Anderson, Kaname Fujioka (video game series)",
    Actors: "Milla Jovovich, Tony Jaa, Ron Perlman, T.I.",
    Plot: "When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers. Feature film based on the video game by Capcom.",
    Language: "English",
    Country: "Germany, China, Canada, Japan, South Africa, USA",
    Awards: "1 nomination.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGU3NTFmNjYtODc3Ny00MWEzLWI3M2ItZjE3NDgwMTI0MzkzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "5.3/10",
      },
      {
        Source: "Metacritic",
        Value: "46/100",
      },
    ],
    Metascore: "46",
    imdbRating: "5.3",
    imdbVotes: "36,127",
    imdbID: "tt6475714",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$15,162,470",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
];
