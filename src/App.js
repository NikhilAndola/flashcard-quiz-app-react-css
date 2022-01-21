import { useState } from 'react';
import './App.css';
import FlashcardList from './FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARD)
  return (
    <div className="App">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARD = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5' 
    ]
  },
  {
    id: 2,
    question: 'Question 2?',
    answer: 'Answer 2',
    options: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ]
  },
  {
    id: 3,
    question: 'Which is biggest planet in Solar system?',
    answer: 'Jupiter',
    options: [
      'Earth',
      'Mars',
      'Saturn',
      'Jupiter' 
    ]
  }
];

export default App;
