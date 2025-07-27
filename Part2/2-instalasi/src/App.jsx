/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

const Judul = () => {
  return <h1>Penghitung Score</h1>;
};

const ScoreCounter = () => {
  // Langkah 5: Buat sebuah Hook dengan useState. score dimulai dari 0, dan akan memiliki fungsi setScore
  const [score, setScore] = useState(0);

  // Langkah 6: Buat fungsi plusScore
  function plusScore() {
    setScore(score + 1);
  }

  // Langkah 7: Buat sebuah fungsi untuk mengurangi score
  function minusScore() {
    setScore(score - 1);
  }

  // Langkah 8: Buat sebuah fungsi untuk reset skor (logika: untuk dapet skor 0, tinggal kurangin skor dengan dirinya sendiri)
  function resetScore() {
    setScore(score - score);
  }

  // Langkah 9: Panggil masing masing fungsinya
  return (
    <div>
      <div className="score-row">
        <button onClick={minusScore}>-</button>
        <h3>{score}</h3>
        <button onClick={plusScore}>+</button>
      </div>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
};

function App() {
  return (
    <>
      <Judul />
      <ScoreCounter />
    </>
  );
}
export default App;
