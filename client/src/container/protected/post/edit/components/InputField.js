import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectData, selectPost } from "../selectors";
import * as mapDispatchToProps from "../actions";
import "./component.css";
import { motion } from "framer-motion";

const InputField = (props) => {
  const handleChange = (e) => {
    let { value } = e.target;

    props.setDataValue({
      key: props.name,
      value: value.trim(),
    });
  };

  useEffect(() => {
    props.form.setFieldsValue({
      [props.name]: props.post[props.name],
    });
  }, [props.post]);

  console.log("props", props);

  return (
    <motion.div>
      <Form.Item
        rules={[
          {
            required: props.required,
            message: `Please Enter the ${props.label}!`,
          },
        ]}
        valuePropName={props.name}
        initialValue={props.post[props.name]}
        name={props.name}
      >
        <Input
          autoFocus
          placeholder={props.label}
          style={{
            outline: 0,
            outlineColor: "none",
            padding: 8,
            fontSize: 25,
            height: 50,
            width: 300,
            // borderRadius: 30,
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            textAlign: "center",
          }}
          onChange={(e) => handleChange(e)}
        />
      </Form.Item>
    </motion.div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
  post: selectPost,
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
