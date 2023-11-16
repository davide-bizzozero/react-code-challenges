import { useState } from 'react';
import { ControlledStepsFlow } from './ControlledStepsFlow';

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <p>First step component</p>
    <button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
  </>
);
const StepTwo = ({ goToNext, goToPrev }) => (
  <>
    <h1>Step 2</h1>
    <p>Second step component</p>
    <button onClick={() => goToPrev({})}>Prev</button>
    <button onClick={() => goToNext({ age: 80 })}>Next</button>
  </>
);
const StepThree = ({ goToNext, goToPrev }) => (
  <>
    <h1>Step 3</h1>
    <p>Third step component</p>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToPrev({})}>Prev</button>
    <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
  </>
);
const StepFour = ({ goToPrev }) => (
  <>
    <h1>Step 4</h1>
    <p>Fourth step component</p>
    <button onClick={() => goToPrev({})}>Prev</button>
    {/*  <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button> */}
  </>
);

export default function StepsFlow() {
  const [steppingData, setSteppingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onPrev = (stepData) => {
    setSteppingData({ ...steppingData, ...stepData });
    setCurrentIndex(currentIndex - 1);
  };

  const onNext = (stepData) => {
    setSteppingData({ ...steppingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };
  console.log(steppingData);
  return (
    <ControlledStepsFlow
      currentIndex={currentIndex}
      onNext={onNext}
      onPrev={onPrev}
    >
      <StepOne />
      <StepTwo />
      {steppingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledStepsFlow>
  );
}
