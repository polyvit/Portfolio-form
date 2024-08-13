import Textarea from "../elements/Textarea";
import { IInput } from "../types";

const Tasks = ({ tasks }: { tasks: IInput }) => {
  return (
    <Textarea
      label="Задачи на доработку"
      placeholder="Перечислите через запятую, какие задачи по проекту вы планируете выполнить в дальнейшем"
      value={tasks.value}
      onChange={tasks.onChange}
      onBlur={tasks.onBlur}
      error={tasks.errorText}
      touched={tasks.wasTouched}
      invalid={tasks.inputValid}
      rows={8}
    />
  );
};

export default Tasks;
