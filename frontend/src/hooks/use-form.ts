import useInput from "./use-input"

const useForm = () => {
    const title = useInput("", { isEmpty: true })
    const short = useInput("", { isEmpty: true })
    const description = useInput("", { isEmpty: true })
    const demo = useInput("", { isEmpty: true })
    const repo = useInput("", { isEmpty: true })
    const year = useInput(`${new Date().getFullYear()}`)

    return {
        title: {...title, label: 'Название', placeholder: "Укажите название проекта", type: "text"}, 
        short: {...short, label: 'Описание', placeholder: "Укажите короткое описание проекта", type: "text"},
        description: {...description, label: 'Подробное описание', placeholder: "Укажите подробное описание проекта", rows: 5, type: "text"},
        demo: {...demo, label: 'Демоверсия', placeholder: "Прикрепите ссылку на демоверсию проекта", type: "text"},
        repo: {...repo, label: 'Репозиторий', placeholder: "Прикрепите ссылку на репозиторий проекта", type: "text"},
        year: {...year, label: 'Дата выполнения', placeholder: "2024", type: "nuumber"}
    }
}

export default useForm