import React, { useState, useEffect } from "react";
import Card from "./Components/Card";

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
    <div className="App">
      <Card header="Hejsan" />
      <h1>
        {data &&
          data
            .slice(0, 1)
            .map((item, i) => <li key={i}>{item.parameters[10].values[0]}</li>)}
      </h1>
      <p>{emojis[0]}</p>
    </div>
  );
}

export default App;
