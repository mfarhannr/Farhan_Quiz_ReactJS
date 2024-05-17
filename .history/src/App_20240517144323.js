
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
      <div className="desc">
        <Text desc="React JS adalah library JavaScript open-source yang dibuat oleh Facebook untuk membangun antarmuka pengguna (UI) interaktif. React menggunakan pendekatan berbasis komponen, di mana UI dipecah menjadi komponen-komponen kecil yang dapat digunakan kembali dan mudah dikelola." />
      </div>
    </div>
  );
}

export default App;
