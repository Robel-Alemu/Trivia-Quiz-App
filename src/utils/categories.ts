import film from "../assets/jon-tyson-A-obUh61bKw-unsplash.jpg";
import books from "../assets/clarisse-meyer-jKU2NneZAbI-unsplash.jpg";
// import books from "../assets/jonathan-simcoe-pSjwUXBMnlc-unsplash.jpg";
import music from "../assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import videoGames from "../assets/igor-karimov-fXmmSz5KkO8-unsplash.jpg";

import boardGames from "../assets/jeshoots-com-fzOITuS1DIQ-unsplash (1).jpg";
import scienceNature from "../assets/greg-rakozy-oMpAz-DN-9I-unsplash (1).jpg";
import scienceComputer from "../assets/alexandre-debieve-FO7JIlwjOtU-unsplash (1).jpg";
import sports from "../assets/jonathan-ward-3dV5K_R782o-unsplash.jpg";
import geography from "../assets/arpit-rastogi-xv7DTjnx2YQ-unsplash.jpg";
import history from "../assets/europeana--F7h7BoDJgE-unsplash (1).jpg";
import art from "../assets/santiago-yanez-KogReqQ3p1E-unsplash.jpg";
import vechicle from "../assets/janne-aspegren-eXw4YHCU7ms-unsplash.jpg";

export interface Categories {
  id: number;
  name: string;
  category: number;
  image: string;
}
const categories = [
  // { id: 1, name: "General Knowledge", category: 9, image: film },
  { id: 2, name: "Books", category: 10, image: books },
  { id: 3, name: "Film", category: 11, image: film },
  { id: 4, name: "Music", category: 12, image: music },
  // { id: 5, name: "Television", category: 14,  },
  { id: 6, name: "Video Games", category: 15, image: videoGames },
  { id: 7, name: "Board Games", category: 16, image: boardGames },
  { id: 8, name: "Science and Nature", category: 17, image: scienceNature },
  { id: 9, name: "Science: Computers", category: 18, image: scienceComputer },
  { id: 10, name: "Sports", category: 21, image: sports },
  { id: 11, name: "Geography", category: 22, image: geography },
  { id: 12, name: "History", category: 23, image: history },
  // { id: 13, name: "Politics", category: 24 },
  { id: 14, name: "Art", category: 25, image: art },
  // { id: 15, name: "Animals", category: 27 },
  { id: 16, name: "Vehicles", category: 28, image: vechicle },
];

export default categories;
