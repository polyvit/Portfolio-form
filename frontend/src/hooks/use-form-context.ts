import { useContext } from 'react';
import { FormContext } from '../contextProvider';

const useFormContext = () => {
    return useContext(FormContext);
}

export default useFormContext