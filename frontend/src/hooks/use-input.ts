import { ChangeEvent, useState } from "react"
import useValidate from "./use-validate"

const useInput = (initialVal: any, validators: Record<string, any>) => {
    const [value, setValue] = useState(initialVal)
    const [wasTouched, setWasTouched] = useState<boolean>(false)
    const valid = useValidate(value, validators)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
 
    const onBlur = () => {
        setWasTouched(true)
    }

    const resetInput = () => {
        setValue(initialVal)
    }

    return {
        value,
        onChange,
        onBlur,
        resetInput,
        wasTouched,
        ...valid
    }
}

export default useInput