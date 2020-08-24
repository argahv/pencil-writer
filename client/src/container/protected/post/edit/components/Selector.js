import React from "react";
import { Select, Form } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategories } from "../selectors";
import { setDataValue } from "../actions";
import "./component.css";

const { Option } = Select;
const Selector = (props) => {
  function onChange(value) {
    props.setDataValue({
      key: props.name,
      value,
    });
  }

  return (
    <Form.Item
      rules={[
        {
          required: props.required,
          message: `Please Input ${props.label}`,
        },
      ]}
    >
      <Select
        listItemHeight={10}
        listHeight={250}
        showSearch
        placeholder="Select a category"
        optionFilterProp="children"
        onSelect={onChange}
        onChange={onChange}
        className="selector-input"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {props.categories.map((categ) => (
          <Option
            style={{ fontSize: 20 }}
            value={categ.categoryName}
            key={`post-category-${categ._id}`}
          >
            {categ.categoryName}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default connect(mapStateToProps, { setDataValue })(Selector);
