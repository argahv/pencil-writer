import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import posed from "react-pose";
import { selectData } from "../selectors";
import * as mapDispatchToProps from "../actions";
import TextArea from "antd/lib/input/TextArea";
import "./component.css";

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
});

const InputField = (props) => {
  const [error, setError] = useState([]);
  const handleChange = (e) => {
    const { value } = e.target;
    props.setDataValue({
      key: props.name,
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

  return (
    <Div>
      {/* <Text>{props.label}</Text> */}
      <Form.Item>
        <TextArea
          placeholder={props.label}
          className="text-area-summary"
          style={{ resize: "none" }}
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
