import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import stromstadimg from "./images/stromstad.png";
import gbgimg from "./images/goteborgstad.jpeg";

function App() {
  const [data, setData] = useState([]);
  // const emojis = ["☀️", "☁️"];

  //  const [loading, setLoading] = useState(true);
  //  const [error, setError] = useState(null);

  useEffect(() => {
    const cities = [
      {
        city: "Strömstad",
        lon: 11.61272,
        lat: 58.242343,
        picture: stromstadimg
      },
      {
        city: "Göteborg",
        lon: 11.97456,
        lat: 57.70887,
        picture: gbgimg
      },
      // {
      //   city: "Strömstad",
      //   lon: 10,
      //   lat: 16,
      // },
    ];

    for (let index = 0; index < cities.length; index++) {
      const city = cities[index];

      fetch(
        `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${city.lon}/lat/${city.lat}/data.json`
        )
        .then((response) => response.json())
        .then((entries) => {
          const object = { entries: entries.timeSeries, name: city.city, picture: city.picture };
          setData((prevData) => [...prevData, object]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  console.log(data[0]);

  return (
    <div>
      <Nav />
      <div className="container">
      {data && data.map((item, i) => (
        <Card
          key={i}
          src={item.picture}
          weather={item.entries[0].parameters[10].values[0]}
          header={item.name}
          alt="Bild"
        />
          ))}
      </div>
    </div>
  );
}

export default App;
