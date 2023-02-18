import './App.css';
import { useState, useEffect } from 'react'
import Person from './components/person';

function App() {
  const [person, setPerson] = useState([])
  console.log(person)
  useEffect(() => {
      getPerson()

    }, [])

  const getPerson = () => {
    fetch('http://localhost:4000/person')
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        if (result['status'] == 'success') {
          setPerson(result['data'])
        }
      }
      );
  }

  return (
    <div className="App">
      {
        person.map(p => {
          return <Person key={p.id} person={p}></Person>
        })
      }

    </div>
  );
}

export default App;
