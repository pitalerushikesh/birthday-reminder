import "./App.css";
import Axios from "axios";

function App() {
  const getLormIpsum = (e) => {
    e.preventDefault();
    var url = "https://lorem-ipsum.php?sentences=1";
    let options = {
      method: "GET",
      url: url,
      Headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    };
  };

  return <div></div>;
}

export default App;
