import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Layout from "./Layout/layout";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [toprated, setToprated] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=1&with_genres=28"
    )
      //https://api.themoviedb.org/3/discover/movie?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=1&with_genres=action
      .then((response) => {
        console.log(response.json);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setToprated(data);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <Layout></Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
