import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/jokes') // Ensure the correct URL is being used
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log('Error fetching jokes:', error);
      });
  }, []);
  

  return (
    <>
      <h1>Chai aur FULLSTACK</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
