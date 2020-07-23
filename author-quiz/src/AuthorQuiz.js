import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import { render } from 'react-dom';

function Hero() {
  return (<div className="jumbotron col-10 offset-1">
    <h1>Author Quiz Game</h1>
    <p>Select the book written by the author shown</p>
  </div>)
}
function Turn({ author, books }) {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={author.imgUrl} className="authorimage" alt="Author"></img>
      </div>
      <div className="col-6">
        {books.map((title) => <p>{title}</p>)}
      </div>
    </div>
  )
}
function Continue() {
  return (<div></div>)
}
function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">Find images from
        <a href="https://commons.wikimedia.org/wiki/Main_Page"> Wikipedia Commos </a>and are in the public domain</p>
      </div>
    </div>
  )
}

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
        <Footer />
      </div>
    );
  }
}


export default AuthorQuiz;
