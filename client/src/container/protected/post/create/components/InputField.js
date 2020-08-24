import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import posed from "react-pose";
import { selectData } from "../selectors";
import * as mapDispatchToProps from "../actions";
import { Text } from "../../../../components";
import "./component.css";
import { motion } from "framer-motion";

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
});

const InputField = (props) => {
  // const [error, setError] = useState([]);
  const handleChange = (e) => {
    let { value } = e.target;

    props.setDataValue({
      key: props.name,
      value: value.trim(),
    });
  };

  // useEffect(() => {
  //   if (props.error) {
  //     setError(props.error);
  //   } else {
  //     setError([]);
  //   }
  // }, [props.error]);

  return (
    <motion.div>
      <Form.Item
        rules={[
          {
            required: props.required,
            message: `Please Enter the ${props.label}!`,
          },
        ]}
        // valuePropName={props.data[props.name]}
        // name={props.name}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
