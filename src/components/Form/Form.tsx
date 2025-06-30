import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type FormProps = {
  children: React.ReactNode;
  defaultValues?: object;
  onSubmit: SubmitHandler;
  className: string;
};

const Form: React.FC<FormProps> = ({ children, defaultValues, onSubmit, ...props }) => {
  const methods = useForm({ defaultValues });

return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
  }
export default Form;
