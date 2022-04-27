import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import stromstadimg from "./images/stromstad.png";

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
      },
      {
        city: "Göteborg",
        lon: 11.97456,
        lat: 57.70887,
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
          // console.log("city", city);
          setData((prevData) => [...prevData, entries.timeSeries]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  console.log(data);

  return (
    <div>
      <Nav />
      <div className="container">
        <Card
          src={stromstadimg}
          weather={data}
          // header={data.cities[0].city}
          alt="Bild"
        />
      </div>
    </div>
  );
}

export default App;
