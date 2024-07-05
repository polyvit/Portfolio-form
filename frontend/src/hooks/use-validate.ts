import { useEffect, useState } from "react"

const useValidate = (inputValue: string, validators: Record<string, any>) => {
    const [isEmpty, setIsEmpty] = useState<boolean>(true)
    const [minLengthError, setMinLengthError] = useState<boolean>(false)
    const [isEmail, setIsEmail] = useState<boolean>(true)
    const [isYear, setIsYear] = useState<boolean>(true)
    const [errorText, setErrorText] = useState("")
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for(const validator in validators) {
            switch (validator) {
                case "isEmpty": 
                    inputValue ? setIsEmpty(false) : setIsEmpty(true)
                    break;
                case "isYear": 
                    (+inputValue >= 1000 && +inputValue <= 2100) ? setIsYear(true) : setIsYear(false)
                    break;
                case "minLength": 
                    inputValue.length < validators[validator] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case "isEmail": 
                    const exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                    exp.test(inputValue.toLowerCase()) ? setIsEmail(true) : setIsEmail(false)
                    break;
            }
        }
    }, [inputValue])

    useEffect(() => {
        if (isEmpty) {
            setErrorText("Поле для ввода не должно быть пустым")
            return
        } else {
            setErrorText("")
        }
        if (!isEmail) {
            setErrorText("Введенное значение не является почтой email")
            return
        } else {
            setErrorText("")
        }
        if (!isYear) {
            setErrorText("Введенное значение не является годом")
            return
        } else {
            setErrorText("")
        }
        if (minLengthError) {
            setErrorText("Длина пароля должна быть от 6 символов")
            return
        } else {
            setErrorText("")
        }
    }, [isEmail, isEmpty, minLengthError, isYear])

    useEffect(() => {
        if (!isEmail || isEmpty || minLengthError || !isYear) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmail, isEmpty, minLengthError, isYear])

    return {
        isEmpty,
        minLengthError,
        isEmail,
        isYear,
        errorText,
        inputValid
    }
}

export default useValidate