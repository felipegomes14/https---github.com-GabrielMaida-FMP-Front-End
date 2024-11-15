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
  const handleExerciseDecriment = (exercise) => {
    setExerciseCounts((prevCounts) => ({
      ...prevCounts,
      [exercise]: prevCounts[exercise] -1,
    }));
  };

  const handleWaterIncrement = () => {
    setWaterCount((prevCount) => prevCount + 1);
  };
  
  const handleWaterDecriment = () => {
    setWaterCount((prevCount) => prevCount -1);
  };

  return (
    <div>
      <h1>EVOLUÇÃO</h1>
      <ul>
        <li>
          Flexão: {exerciseCounts.flexao} x
          <button1 onClick={() => handleExerciseIncrement('flexao')}>+1</button1>
          <button2 onClick={() => handleExerciseDecriment('flexao')}>-1</button2>
        
        </li>
        <li>
          Agachamento: {exerciseCounts.agachamento} x
          <button1 onClick={() => handleExerciseIncrement('agachamento')}>+1</button1>
          <button2 onClick={() => handleExerciseDecriment('agachamento')}>-1</button2>
        </li>
        <li>
          Barra Fixa: {exerciseCounts.barraFixa} x
          <button1 onClick={() => handleExerciseIncrement('barraFixa')}>+1</button1>
          <button2 onClick={() => handleExerciseDecriment('barraFixa')}>-1</button2>
        </li>
        <li>
          Caminhada: {exerciseCounts.caminhada} km
          <button1 onClick={() => handleExerciseIncrement('caminhada')}>+1</button1>
          <button2 onClick={() => handleExerciseDecriment('caminhada')}>-1</button2>
        </li>
      </ul>
      <p>Água: {waterCount} Litros</p>
      <button1 onClick={handleWaterIncrement}>+1</button1>
      <button2 onClick={handleWaterDecriment}>-1</button2>
    </div>
  );
}

export default ExerciseTracker;