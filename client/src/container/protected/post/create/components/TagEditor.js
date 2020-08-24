import React from "react";
import { Tag, Input, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";
import { selectTags } from "../selectors";

class TagEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: this.props.tags,
      inputVisible: false,
      inputValue: "",
      editInputIndex: -1,
      editInputValue: "",
    };
  }

  handleClose = (removedTag) => {
    const tags = this.props.tags.filter((tag) => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
    this.props.setDataValue({
      key: this.props.name,
      tags,
    });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: "",
    });
  };

  handleEditInputChange = (e) => {
    this.setState({ editInputValue: e.target.value });
  };

  handleEditInputConfirm = () => {
    this.setState(({ tags, editInputIndex, editInputValue }) => {
      const newTags = [...tags];
      newTags[editInputIndex] = editInputValue;

      return {
        tags: newTags,
        editInputIndex: -1,
        editInputValue: "",
      };
    });
  };

  saveInputRef = (input) => (this.input = input);

  saveEditInputRef = (input) => (this.editInput = input);

  render() {
    console.log("this.props", this.props);

    const {
      tags,
      inputVisible,
      inputValue,
      editInputIndex,
      editInputValue,
    } = this.state;
    return (
      <div>
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Input
                ref={this.saveEditInputRef}
                key={tag}
                size="small"
                className="tag-input"
                value={editInputValue}
                onChange={this.handleEditInputChange}
                onBlur={this.handleEditInputConfirm}
                onPressEnter={this.handleEditInputConfirm}
              />
            );
          }

          const isLongTag = tag.length > 20;

          const tagElem = (
            <Tag
              className="edit-tag"
              key={tag}
              closable={index !== 0}
              onClose={() => this.handleClose(tag)}
            >
              <span
                onDoubleClick={(e) => {
                  if (index !== 0) {
                    this.setState(
                      { editInputIndex: index, editInputValue: tag },
                      () => {
                        this.editInput.focus();
                      }
                    );
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            className="tag-input"
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag className="site-tag-plus" onClick={this.showInput}>
            <PlusOutlined /> New Tag
          </Tag>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tags: selectTags,
});

export default connect(mapStateToProps, mapDispatchToProps)(TagEditor);
