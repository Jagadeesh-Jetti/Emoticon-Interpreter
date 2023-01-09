import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐀": "Rat",
  "🦅": "Eagle",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "🐹": "Hamster",
  "🐰": "Rabbit Face",
  "🐤": "Baby Chick",
  "🐵": "Monkey Face",
  "🦍": "Gorilla",
  "🐶": "Dog Face"
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
