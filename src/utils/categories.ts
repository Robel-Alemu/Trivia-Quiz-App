import film from "../assets/denise-jans-tV80374iytg-unsplash.jpg";
// import books from "../assets/thomas-kelley-hHL08lF7Ikc-unsplash.jpg";
import books from "../assets/small thomas-kelley-hHL08lF7Ikc-unsplash.png";
import music from "../assets/alphacolor-XdDyRTVo-iw-unsplash.jpg";
import videoGames from "../assets/denise-jans-HoqYAnwR-1g-unsplash.jpg";
import boardGames from "../assets/jeshoots-com-fzOITuS1DIQ-unsplash.jpg";
import scienceNature from "../assets/greg-rakozy-oMpAz-DN-9I-unsplash.jpg";
import scienceComputer from "../assets/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";
import sports from "../assets/victor-freitas-qZ-U9z4TQ6A-unsplash.jpg";
import geography from "../assets/kyle-glenn-nXt5HtLmlgE-unsplash.jpg";
import history from "../assets/europeana--F7h7BoDJgE-unsplash.jpg";
import art from "../assets/khara-woods-KR84RpMCb0w-unsplash.jpg";
import vechicle from "../assets/kevin-bhagat-3cLpiv8h5so-unsplash.jpg";

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
