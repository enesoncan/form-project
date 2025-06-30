import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form/Form";
import FormItem from "../components/FormItem/FormItem";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const CreateUser: React.FC = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data: object) => {
    navigate("/result", { state: data });
  };

  return (
    <div className="flex justify-center">
      <Form
        onSubmit={(data: object) => handleFormSubmit(data)}
        defaultValues={{
          fullname: "",
          email: "",
          password: "",
          remember: true,
        }}
        className="flex p-8 gap-4 flex-col w-fit text-sm"
      >
        <FormItem name="fullname" label="Fullname">
          {(field) => (
            <Input
              ref={field.ref}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        </FormItem>

        <FormItem
          name="email"
          label="Mail"
          required
          rules={{
            required: "Please input your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email",
            },
          }}
        >
          {(field) => (
            <Input
              ref={field.ref}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        </FormItem>

        <FormItem
          name="password"
          label="Password"
          required
          rules={{
            required: "Please input your password",
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Password must be alphanumeric",
            },
          }}
        >
          {(field) => (
            <Input
              ref={field.ref}
              value={field.value}
              onChange={field.onChange}
              type="password"
            />
          )}
        </FormItem>

        <FormItem name="remember">
          {(field) => (
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="remember"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                onBlur={field.onBlur}
                ref={field.ref}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
          )}
        </FormItem>

        <div className="sm:ml-[104px]">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateUser;
