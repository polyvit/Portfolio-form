import React from "react";

const FormPage = () => {
  return (
    <div>
      <h1>Здесь будет форма по добавлению новых проектов. </h1>
      <h2 className="my-10">
        Если вы не видите кнопку, значит вы просто посетитель и не имеете право
        на добавление проектов
      </h2>
      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Добавить
      </button>
    </div>
  );
};

export default FormPage;
