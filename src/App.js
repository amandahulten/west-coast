import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import stromstadimg from "./images/stromstad.png";
import fjallbackaimg from "./images/fjallbacka.jpeg";
import skarhamngimg from "./images/skarhamn.jpeg";
import smogenimg from "./images/smogen.webp";
import grebbestadimg from "./images/grebbestad.jpeg";
import falkenbergimg from "./images/falkenberg.jpeg";
import varbergimg from "./images/varberg.jpeg";
import tylosandimg from "./images/tylosand.jpeg";
import onsalaimg from "./images/onsala.jpeg";

function App() {
  const [data, setData] = useState([]);
  // const emojis = ["☀️", "☁️"];

  //  const [loading, setLoading] = useState(true);
  //  const [error, setError] = useState(null);

  useEffect(() => {
    const cities = [
      {
        city: "Strömstad",
        south: false,
        lon: 11.61272,
        lat: 58.242343,
        picture: stromstadimg
      },
      {
        city: "Fjällbacka",
        south: false,
        lon: 11.97456,
        lat: 57.70887,
        picture: fjallbackaimg
      },
      {
        city: "Skärhamn",
        south: false,
        lon: 11.549795,
        lat: 57.990922,
        picture: skarhamngimg
      },
      {
        city: "Smögen",
        south: false,
        lon: 11.226118,
        lat: 58.353644,
        picture: smogenimg
      },
      {
        city: "Grebbestad",
        south: false,
        lon: 11.254233,
        lat: 58.692007,
        picture: grebbestadimg
      },
      {
        city: "Onsala",
        south: true,
        lon: 12.030270,
        lat: 57.427218,
        picture: onsalaimg
      },
      {
        city: "Falkenberg",
        south: true,
        lon: 12.534556,
        lat: 56.899686,
        picture: falkenbergimg
      },
      {
        city: "Varberg",
        south: true,
        lon: 12.250294,
        lat: 57.105741,
        picture: varbergimg
      },
      {
        city: "Tylösand",
        south: true,
        lon: 12.731792,
        lat: 56.648600,
        picture: tylosandimg
      }
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

  console.log(data);

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
