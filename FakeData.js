const UserList = [
  {
    id: 1,
    name: "can",
    username: "cansoylu",
    age: 26,
    nationality: "TURKEY",
    friends: [
      {
        id: 2,
        name: "onur",
        username: "onurtop",
        age: 25,
        nationality: "CANADA",
      },
    ],
  },
  {
    id: 2,
    name: "onur",
    username: "onurtop",
    age: 25,
    nationality: "CANADA",
    friends: [
      {
        id: 1,
        name: "can",
        username: "cansoylu",
        age: 26,
        nationality: "TURKEY",
      },
    ],
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    year: 2019,
    onCinema: true,
  },
  {
    id: 2,
    name: "Interstellar",
    year: 2007,
    onCinema: false,
  },
  {
    id: 3,
    name: "Batman",
    year: 2015,
    onCinema: false,
  },
];

module.exports = { UserList, MovieList };
