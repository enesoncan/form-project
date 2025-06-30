import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import type { FieldValues, FieldPath, RegisterOptions, ControllerRenderProps } from "react-hook-form";


type FormItemProps<TFieldValues extends FieldValues = FieldValues> = {
  name: string;
  label?: string;
  children: (field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>) => React.ReactElement;
  rules?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
  required?: boolean;
};

const FormItem = ({
  name,
  label,
  rules,
  children,
  required,
}: FormItemProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <label htmlFor={name} className="min-w-24 text-left sm:text-right">
        {required && <span className="text-red-500">*</span>}
        {label}
      </label>

      <div className="flex flex-col relative">
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => children(field)}
        />

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default FormItem;
