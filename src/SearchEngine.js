import React, { useState } from "react";

export default function SearchEngine(props) {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let h2 = document.querySelector("h2");
    h2.innerHTML = `The weather in ${city} is ${props.temperature} ℃`;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
