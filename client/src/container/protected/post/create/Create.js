import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Col, Row } from "antd";
import { createStructuredSelector } from "reselect";
import { navigate } from "@reach/router";
import { reduxKey, selectLoading, selectData } from "./selectors";
import { createPost, resetForm, getCategories } from "./actions";
import { useInjectReducer } from "../../../../utils/injectReducer";
import reducer from "./reducers";
import { Title, openNotification, PrimaryButton } from "../../../components";
import InputField from "./components/InputField";
import Selector from "./components/Selector";
import TextArea from "./components/TextArea";
import ContentEditor from "./components/ContentEditor";
// import TagEditor from "./components/TagEditor";
import FileUpload from "./components/FileUpload";

const Create = (props) => {
  useInjectReducer({ key: reduxKey, reducer });
  const [error, setError] = useState({
    data: {},
  });

  useEffect(() => {
    props.getCategories();
  }, []);

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 11 },
    wrapperCol: { span: 24 },
  };

  const handleSubmit = async () => {
    try {
      const createdPost = await props.createPost();
      props.resetForm();
      openNotification("success", createdPost.message);
      navigate(`/view-post/${createdPost.data._id}`);
    } catch (err) {
      console.log("err", err.error);
      if (err.message) {
        openNotification("error", err.message.toUpperCase());
      }
    }
  };

  return (
    <div>
      <Title textAlign="center">
        Write what is flying around your thoughts...
      </Title>
      <Form {...layout} form={form} onFinish={handleSubmit}>
        <Row gutter={[12, 12]}>
          <Col lg={12} xs={24} sm={24}>
            <InputField
              required
              error={error.data.title}
              label="Enter the title"
              name="title"
            />
          </Col>
          <Col lg={12} xs={24} sm={24}>
            {props.data.title && (
              <Selector
                required
                name="category"
                label="So, What are you writing about?"
              />
            )}
          </Col>
        </Row>
        <div>
          {props.data.category && (
            <TextArea
              label="Background behind the story?  [Optional though]"
              name="summary"
            />
          )}
        </div>
        {props.data.category && <FileUpload />}
        {props.data.category && <ContentEditor />}
        <br />
        {/* {props.data.content && ( */}
        {/* <TagEditor
          name="tags"
          label="Want others to find your creation faster?"
        /> */}
        {/* )} */}
        <br />
        {props.data.content && (
          <PrimaryButton
            // onKeyPressCapture={(e) => console.log("object", e)}
            loading={props.loading}
            disabled={props.loading}
            onClick={handleSubmit}
            curved
            htmlType="submit"
          >
            Post
          </PrimaryButton>
        )}
      </Form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
  loading: selectLoading,
});

export default connect(mapStateToProps, {
  createPost,
  resetForm,
  getCategories,
})(Create);
