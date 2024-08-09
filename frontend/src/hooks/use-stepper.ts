import { ReactElement, useState } from "react";

const useStepper = (steps: ReactElement[]) => {
    const [stepIndex, setStepIndex] = useState(0);

    const next = () => {
        setStepIndex(prev => prev + 1)
    }

    const back = () => {
        setStepIndex(prev => prev - 1)
    }

    const setStepNumber = (i: number) => {
        setStepIndex(i)
    }

    return {
        step: steps[stepIndex],
        stepIndex,
        next,
        back,
        setStepNumber,
        isFirstStep: stepIndex === 0,
        isLastStep: stepIndex === steps.length - 1
    }
}

export default useStepper