import React from "react";
import { Form, Input } from "antd";
import * as mapDispatchToProps from "../actions";
import { connect } from "react-redux";

const InputForm = ({
  placeholder = "",
  name = "",
  setDataValue,
  required = false,
}) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setDataValue({
      index: name,
      value: value.trim(),
    });
  };

  return (
    <div>
      <Form.Item
        rules={[
          {
            required,
            message: `Please Input ${placeholder}`,
          },
        ]}
        name={name}
      >
        <Input
          onChange={handleInputChange}
          style={{
            outline: 0,
            outlineColor: "none",
            padding: 8,
            fontSize: 25,
            height: 50,
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            textAlign: "center",
          }}
          placeholder={placeholder}
        />
      </Form.Item>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(InputForm);
