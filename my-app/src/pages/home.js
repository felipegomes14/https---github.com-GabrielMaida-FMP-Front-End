import React from 'react';
import './Home.css';

import { useState } from 'react';

function ExerciseTracker() {
  const [exerciseCounts, setExerciseCounts] = useState({
    flexao: 0,
    agachamento: 0,
    barraFixa: 0,
    caminhada: 0,
  });
  const [waterCount, setWaterCount] = useState(0);

  const handleExerciseIncrement = (exercise) => {
    setExerciseCounts((prevCounts) => ({
      ...prevCounts,
      [exercise]: prevCounts[exercise] + 1,
    }));
  };

  const handleWaterIncrement = () => {
    setWaterCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>EVOLUÇÃO</h1>
      <ul>
        <li>
          Flexão: {exerciseCounts.flexao}
          <button onClick={() => handleExerciseIncrement('flexao')}>+</button>
        </li>
        <li>
          Agachamento: {exerciseCounts.agachamento}
          <button onClick={() => handleExerciseIncrement('agachamento')}>+</button>
        </li>
        <li>
          Barra Fixa: {exerciseCounts.barraFixa}
          <button onClick={() => handleExerciseIncrement('barraFixa')}>+</button>
        </li>
        <li>
          Caminhada: {exerciseCounts.caminhada}
          <button onClick={() => handleExerciseIncrement('caminhada')}>+</button>
        </li>
      </ul>
      <p>Água: {waterCount} litros</p>
      <button onClick={handleWaterIncrement}>+ 1 Litro de aguá</button>
    </div>
  );
}

export default ExerciseTracker;