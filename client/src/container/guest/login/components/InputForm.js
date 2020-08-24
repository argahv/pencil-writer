import React, { useState } from "react";
import { Form } from "antd";
import { Head, PrimaryButton, Card } from "../../../components";
import InputComponent from "./InputComponent";
import { inputFields } from "./inputfields";

const InputForm = () => {
  const [field, setFields] = useState("signup");
  // console.log("field", inputFields[field]);
  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <Card
      style={{
        textAlign: "center",
        margin: "auto",
        position: "relative",
        top: "3rem",
      }}
    >
      <Head color="white" textAlign="center">
        {field === "login" ? "Login" : "Sign Up"}
      </Head>
      <Form size="small" layout="horizontal" form={form} {...layout}>
        {inputFields[field].map((fields, i) => {
          return (
            <InputComponent
              form={form}
              placeholder={fields.placeholder}
              key={`${i}-${fields.name}-signup`}
              label={fields.label}
              name={fields.name}
            />
          );
        })}
      </Form>
      <br />
      <PrimaryButton
        color={field === "signup" ? "#2edb48" : "#8d31d4"}
        onClick={() => console.log("signup")}
        curved
      >
        {field === "signup" ? "Sign Up" : "Login"}
      </PrimaryButton>
      <br />
      <PrimaryButton
        color="white"
        onClick={() =>
          field === "signup" ? setFields("login") : setFields("signup")
        }
        curved
      >
        {field === "signup"
          ? "Already have an account? Login"
          : "Sign Up to Create an account"}
      </PrimaryButton>
    </Card>
  );
};

export default InputForm;
