import React, { Component } from 'react';
import Cards from './Cards';


class App extends Component {
  state = {
    flashcards: [
      { id: 1, question: 'Question 1', answer: 'Answer 1' },
      { id: 2, question: 'Question 2', answer: 'Answer 2' },
      { id: 3, question: 'Question 3', answer: 'Answer 3' },
      { id: 4, question: 'Question 4', answer: 'Answer 4' },
      { id: 5, question: 'Question 5', answer: 'Answer 5' },
    ]
  }
  render() {
    const { flashcards } = this.state;
 
    return (
     <Cards
     cards = {this.state.flashcards} />
    );
  }
}
export default App;