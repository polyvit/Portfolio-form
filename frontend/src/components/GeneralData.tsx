import { useEffect } from "react";
import Textarea from "../elements/Textarea";
import Input from "../elements/Input";
import useFormContext from "../hooks/use-form-context";
import { IForm } from "../types";

const GeneralData = ({ formData }: { formData: IForm }) => {
  const context = useFormContext();

  useEffect(() => {
    return () => {
      if ("setData" in context.actions) {
        context.actions.setData((prev) => ({
          ...prev,
          title: formData.title.value,
          description: formData.description.value,
          short: formData.short.value,
          demo: formData.demo.value,
          repo: formData.repo.value,
          year: formData.year.value || `${new Date().getFullYear()}`,
        }));
      }
    };
  }, [...Object.values(formData).map((e) => e.value)]);

  return (
    <>
      {Object.values(formData).map((inputData) => {
        if (inputData.rows) {
          return (
            <Textarea
              key={inputData.label}
              label={inputData.label}
              placeholder={inputData.placeholder}
              value={inputData.value}
              onChange={inputData.onChange}
              onBlur={inputData.onBlur}
              error={inputData.errorText}
              touched={inputData.wasTouched}
              invalid={inputData.inputValid}
              rows={inputData.rows}
            />
          );
        } else {
          return (
            <Input
              type={inputData.type}
              key={inputData.label}
              label={inputData.label}
              placeholder={inputData.placeholder}
              value={inputData.value}
              onChange={inputData.onChange}
              onBlur={inputData.onBlur}
              error={inputData.errorText}
              touched={inputData.wasTouched}
              invalid={inputData.inputValid}
            />
          );
        }
      })}
    </>
  );
};

export default GeneralData;
