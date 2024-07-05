import React from "react";
import Textarea from "../elements/Textarea";
import Input from "../elements/Input";
import useForm from "../hooks/use-form";

const GeneralData = () => {
  const formData = useForm();

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
