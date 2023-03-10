import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "ðĶ": "Lion",
  "ðŊ": "Tiger Face",
  "ð": "Goat",
  "ðŠ": "Camel",
  "ð": "Rat",
  "ðĶ": "Eagle",
  "ðĶ": "Duck",
  "ðĶĒ": "Swan",
  "ðĶ": "Owl",
  "ðđ": "Hamster",
  "ð°": "Rabbit Face",
  "ðĪ": "Baby Chick",
  "ðĩ": "Monkey Face",
  "ðĶ": "Gorilla",
  "ðķ": "Dog Face"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning =
        "The emot you entered isnt updated into DB yet, Kindly try another";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <div class="header">Emoticon-Interpreter</div>

      <h1>The Animal kingdom</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> All the available animal emoji are </h3>
      {emojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
