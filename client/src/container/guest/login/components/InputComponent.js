import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
import { Paragraph } from "../../../components";

const InputComponent = (props) => {
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
    <Form.Item
      colon={false}
      label={
        <Paragraph margin={"auto"} color="white">
          {props.label}:
        </Paragraph>
      }
    >
      <Input
        disabled
        placeholder={props.placeholder}
        style={{
          padding: 8,
          fontSize: 25,
          width: 300,
          borderRadius: 30,
          textAlign: "center",
        }}
        // onChange={(e) => handleChange(e)}
      />
    </Form.Item>
  );
};

// const mapStateToProps = createStructuredSelector({
//     data: selectData,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);

export default InputComponent;
