import logo from "./logo.svg";
import Welcome from "./WelcomeComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <div>
          <Welcome name="Sarah" />
          <Welcome name="Michael" />
          <Welcome name="John" />
        </div>
      </header>
    </div>
  );
}

export default App;
