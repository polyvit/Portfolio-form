import React from "react";
import Input from "../elements/Input";
import Textarea from "../elements/Textarea";
import Stepper from "./Stepper";

// Демо, репозиторий, фотографии, задачи, стек, описание, коротко, название, год

const ProjectForm = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Stepper />
      <form className="w-[500px]">
        <Input
          label="Название"
          error="Поле не должно быть пустым"
          touched={false}
          invalid={false}
          placeholder="Укажите название проекта"
        />
        <Input
          label="Описание"
          error="Поле не должно быть пустым"
          touched={false}
          invalid={false}
          placeholder="Укажите короткое описание проекта"
        />
        <Textarea
          label="Подробное описание"
          error="Поле не должно быть пустым"
          touched={false}
          invalid={false}
          placeholder="Укажите подробное описание проекта"
          rows={5}
          id="Description"
        />
        <Input
          label="Демоверсия"
          error="Поле не должно быть пустым"
          touched={false}
          invalid={false}
          placeholder="Прикрепите ссылку на демоверсию проекта"
        />
        <Input
          label="Репозиторий"
          error="Поле не должно быть пустым"
          touched={false}
          invalid={false}
          placeholder="Прикрепите ссылку на репозиторий проекта"
        />
        <Input
          type="number"
          label="Дата выполнения"
          error="Нужно ввести год"
          touched={false}
          invalid={false}
          min="1900"
          max="2099"
          step="1"
          placeholder="2024"
        />
      </form>
      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Добавить
      </button>
    </div>
  );
};

export default ProjectForm;
