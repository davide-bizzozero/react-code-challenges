import { Children, isValidElement, cloneElement } from 'react';

export const ControlledStepsFlow = ({
  children,
  currentIndex,
  onNext,
  onPrev,
}) => {
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  const goToPrev = (stepData) => {
    onPrev(stepData);
  };

  const currentChild = Children.toArray(children)[currentIndex];

  if (isValidElement(currentChild)) {
    return cloneElement(currentChild, { goToNext, goToPrev });
  }

  return currentChild;
};
