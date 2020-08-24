import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import posed from "react-pose";
// import { selectData } from "../selectors";
import * as mapDispatchToProps from "../actions";
import TextArea from "antd/lib/input/TextArea";
import { createStructuredSelector } from "reselect";
import { selectData } from "../selectors";
// import "./component.css";

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
});

const InputField = (props) => {
  const [error, setError] = useState([]);
  const handleChange = (e) => {
    const { value } = e.target;
    props.setDataValue({
      index: props.name,
      value: value.trim(),
    });
  };
  useEffect(() => {
    if (props.error) {
      setError(props.error);
    } else {
      setError([]);
    }
  }, [props.error]);
  console.log("props.data[props.name]", props.data[props.name]);
  return (
    <Div>
      {/* <Text>{props.label}</Text> */}
      <Form.Item
        name={props.name}
        rules={[
          {
            required: props.required,
            message: `Please Input ${props.placeholder}`,
          },
        ]}
      >
        <TextArea
          placeholder={props.placeholder}
          className="text-area-summary"
          value={props.data[props.name]}
          style={{
            resize: "none",
            outlineColor: "none",
            padding: 8,
            fontSize: 25,
            height: 150,
            textAlign: "center",
          }}
          onChange={(e) => handleChange(e)}
        />
      </Form.Item>
    </Div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
