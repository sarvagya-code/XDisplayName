import logo from './logo.svg';
import './App.css';
import{useState} from 'react';

function App() {

  const[firstName, setFirstName] = useState();
  const[lastName, setLastName] = useState();
  const[submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit((prev) => !prev);
  };

  return (
    <div className="App">
        <div>
          <h1>Full Name Display</h1>
        </div>
          <form onSubmit={handleSubmit}>
            <div>
              <p>First Name:</p>
              <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div>
              <p>Last Name:</p>
              <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
          </form>
          {submit ? (<p>Full Name: {firstName} {lastName}</p>) : <p></p>}
    </div>
  );
}

export default App;
