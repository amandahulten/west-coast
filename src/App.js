import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  //  const [loading, setLoading] = useState(true);
  //  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.61272/lat/58.242343/data.json`
    )
      .then((response) => response.json())
      .then((entries) => setData(entries.timeSeries))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(data);
  return (
    <div className="App">
      <ul>
        {data && data.map(({ item, i }) => <li key={i}>{item?.validTime}</li>)}
      </ul>
    </div>
  );
}

export default App;
