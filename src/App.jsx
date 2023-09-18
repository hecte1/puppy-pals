import { useState } from 'react'
import { puppyList } from './data'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  const styles = {
    presentation: {backgroundColor: 'white', color: 'black', padding: '10px 20px'},
    paragraph: {cursor: 'pointer'},
    list: {listStyle: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0', padding: '0'}
  }
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id} style={styles.paragraph}>
            {puppy.name}
          </p>
        );
      })}
      {featPupId && (
        <div style={styles.presentation}>
          <h2>{featuredPup.name}</h2>
          <ul style={styles.list}>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default App