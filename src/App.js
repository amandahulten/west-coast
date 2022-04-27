import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import stromstadimg from "./images/stromstad.png";

function App() {
  const [data, setData] = useState(null);
  const emojis = ["☀️", "☁️"];

  //  const [loading, setLoading] = useState(true);
  //  const [error, setError] = useState(null);

  const Stromstad = useEffect(() => {
    fetch(
      `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.61272/lat/58.242343/data.json`
    )
      .then((response) => response.json())
      .then((entries) => setData(entries.timeSeries))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className="container">
        <Card
          src={stromstadimg}
          weather={
            data &&
            data
              .slice(0, 1)
              .map((item, i) => <p key={i}>{item.parameters[10].values[0]}</p>)
          }
          header="Hejsan"
        />
        <p>{emojis[0]}</p>
      </div>
    </div>
  );
}

export default App;
