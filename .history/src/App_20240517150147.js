import Greeting from "./components/1-greeting";
import LikeButton from "./components/2-likeButton";
import Text from "./components/3-text";
import Count from "./components/4-count";
import { NameForm } "./components/5-form"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greeting />
      <LikeButton />
      <div className="desc">
        <Text desc="React JS adalah library JavaScript open-source yang dibuat oleh Facebook untuk membangun antarmuka pengguna (UI) interaktif. React menggunakan pendekatan berbasis komponen, di mana UI dipecah menjadi komponen-komponen kecil yang dapat digunakan kembali dan mudah dikelola." />
      </div>
      <Count />
    </div>
  );
}

export default App;
