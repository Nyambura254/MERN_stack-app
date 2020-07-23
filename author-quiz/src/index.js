import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';


const authors = [
  {
    name: "Mark Twain",
    imageUrl: "images/authors/marktwain.jpeg",
    imageSource: "Wikimedia Commos",
    books: ["The Adventures of Huckleberry Finn",
      "The Christimas Carol",
      "The Shinning"
    ]


  },
  {
    name: "William Shakespear",
    imageUrl: "images/authors/williamshakespear.jpeg",
    imageSource: "Wikimedia Commos",
    books: ["Sonnet 116",
      "The expression",
      "The cuckoo's Calling"
    ]


  },
  {
    name: "Stephen King",
    imageUrl: "images/authors/stephenking.jpeg",
    imageSource: "Wikimedia Commos",
    books: ["It",
      "The rape of lucrece",
      "Hard times"
    ]


  },
  {
    name: "Joseph Conrad",
    imageUrl: "images/authors/josephconrad.jpeg",
    imageSource: "Wikimedia Commos",
    books: ["Chance",
      "The outsider",
      "Misery"
    ]


  },
  {
    name: "JK Rowling",
    imageUrl: "images/authors/jkrowling.jpeg",
    imageSource: "Wikimedia Commos",
    books: ["Harry Potter",
      "The innocents abroad",
      "Four tragedies"
    ]


  },
  {
    name: "Charles Dickens",
    imageUrl: "images/authors/charlesdickens.jpeg",
    imageSource: "Wikimedia Commos",
    books: ["The Adventures of Huckleberry Finn",
      "The Christimas Carol",
      "The Oxford"
    ]


  },
  {
    name: "Charles Darwin",
    imageUrl: "images/authors/charlesdarwin.jpeg",
    imageSource: "Wikimedia Commos",
    books: ["On the origin of spicies",
      "Hard Times",
      "The stand"
    ]


  }

];
const state = {
  turnData: {
    author: authors[0],
    books: authors[0].books
  }
};
ReactDOM.render(
  <React.StrictMode>
    <AuthorQuiz {...state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
