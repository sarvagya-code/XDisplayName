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
            <div style={{display : "flex", flexDirection: "column"}}>
            <div >
              <label>First Name:</label>
              <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            
            <div >
              <label>Last Name:</label>
              <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <button type='submit' style={{width:"4rem"}}>Submit</button>
            </div>
          </form>
          {firstName && lastName && submit ? (<p>Full Name: {firstName} {lastName}</p>) : ''}
    </div>
  );
}

export default App;
