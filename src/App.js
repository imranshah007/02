import image from './image.png';
import './App.css';

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
       
       <div className="paragraph">
       <p>
        The Evolution of <br/>Airbnb’s Frontend
        </p>
        <a
          className="App-link"
          href="https://reactjs.org">
         @spikebhrem
        </a>
       <img src={image} className="App-logo" alt="logo" />

       </div>
        
      
      </header>
    </div>
  );
}

export default App;
