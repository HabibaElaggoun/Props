import Profile from "./Profile/Profile.js"
import './App.css';
import image from "./myprofil.jpg"


function App() {
  const handleName= (fullName) =>{
    alert(`My fullName is ${fullName}`);
  }
  return (
    <div className="App">

      <Profile fullName="Habiba ElAggoun" bio="I am interested in computer technology and now I am learning Web development programming" profession="Junior IT developer" handleName={handleName}>
         <img className='image' src={image} alt=""/> 
      </Profile>

    </div>
  );
}

export default App;
