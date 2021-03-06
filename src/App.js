import React, { useState, useEffect } from "react";
import "./App.css";
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
import henanimg from "./images/henan.jpeg";
import bastadimg from "./images/bastad.webp";
import helsingborgimg from "./images/helsingborg.jpeg";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const [data, setData] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const cities = [
      {
        city: "Strömstad",
        isSouth: false,
        lon: 11.61272,
        lat: 58.242343,
        picture: stromstadimg,
      },
      {
        city: "Fjällbacka",
        isSouth: false,
        lon: 11.97456,
        lat: 57.70887,
        picture: fjallbackaimg,
      },
      {
        city: "Skärhamn",
        isSouth: false,
        lon: 11.549795,
        lat: 57.990922,
        picture: skarhamngimg,
      },
      {
        city: "Smögen",
        isSouth: false,
        lon: 11.226118,
        lat: 58.353644,
        picture: smogenimg,
      },
      {
        city: "Grebbestad",
        isSouth: false,
        lon: 11.254233,
        lat: 58.692007,
        picture: grebbestadimg,
      },
      {
        city: "Henån",
        isSouth: false,
        lon: 11.6793,
        lat: 58.2362,
        picture: henanimg,
      },
      {
        city: "Onsala",
        isSouth: true,
        lon: 12.03027,
        lat: 57.427218,
        picture: onsalaimg,
      },
      {
        city: "Falkenberg",
        isSouth: true,
        lon: 12.534556,
        lat: 56.899686,
        picture: falkenbergimg,
      },
      {
        city: "Varberg",
        isSouth: true,
        lon: 12.250294,
        lat: 57.105741,
        picture: varbergimg,
      },
      {
        city: "Tylösand",
        isSouth: true,
        lon: 12.731792,
        lat: 56.6486,
        picture: tylosandimg,
      },
      {
        city: "Helsingborg",
        isSouth: true,
        lon: 12.860715,
        lat: 56.426789,
        picture: helsingborgimg,
      },
      {
        city: "Båstad",
        isSouth: true,
        lon: 12.860715,
        lat: 56.426789,
        picture: bastadimg,
      },
    ];

    for (let index = 0; index < cities.length; index++) {
      const city = cities[index];

      fetch(
        `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${city.lon}/lat/${city.lat}/data.json`
      )
        .then((response) => response.json())
        .then((entries) => {
          const object = {
            entries: entries.timeSeries,
            name: city.city,
            picture: city.picture,
            south: city.isSouth,
          };

          setData((prevData) => [...prevData, object]);
          setFilterList((prevData) => [...prevData, object]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  // Function to filter out cities depending on south or north
  function filterTown(isSouth) {
    setFilterList(
      data.filter(function (el) {
        return el.south === isSouth;
      })
    );
    setIsFiltered(true);
  }

  // Sorting the data on degrees
  data.sort(function (a, b) {
    return (
      b.entries[2].parameters[10].values[0] -
      a.entries[2].parameters[10].values[0]
    );
  });

  return (
    <div className="container">
      <Nav />
      <div className="hero-section">
        <Hero />
      </div>
      <div className="buttons">
        <Button onClick={() => filterTown(false)} message="Norr" />

        <Button onClick={() => filterTown(true)} message="Söder" />
      </div>
      <div className="card-container">
        {isFiltered
          ? filterList.map((item, i) => (
              <Card
                key={i}
                src={item.picture}
                weather={item.entries[2].parameters[10].values[0]}
                header={item.name}
                alt="Naturbild från stad på västkusten"
              />
            ))
          : data.map((item, i) => (
              <Card
                key={i}
                src={item.picture}
                weather={item.entries[2].parameters[10].values[0]}
                header={item.name}
                alt="Naturbild från stad på västkusten"
              />
            ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
