
import Greeting from "./components/greeting";
import LikeButton from "./components/like-button";
import Text from "./components/text";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <Greeting />
      <LikeButton />
      <Text desc=
    </div>
  );
}

export default App;
