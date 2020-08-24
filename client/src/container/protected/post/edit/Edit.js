import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Col, Row } from "antd";
import { createStructuredSelector } from "reselect";
import { navigate, useParams } from "@reach/router";
import { reduxKey, selectLoading, selectData } from "./selectors";
import { editPost, resetForm, getCategories, singlePostView } from "./actions";
import { useInjectReducer } from "../../../../utils/injectReducer";
import reducer from "./reducers";
import { Title, openNotification, PrimaryButton } from "../../../components";
import InputField from "./components/InputField";
import Selector from "./components/Selector";
import TextArea from "./components/TextArea";
import ContentEditor from "./components/ContentEditor";
// import TagEditor from "./components/TagEditor";
import FileUpload from "./components/FileUpload";

const Edit = (props) => {
  useInjectReducer({ key: reduxKey, reducer });
  const [error, setError] = useState({
    data: {},
  });
  const params = useParams();

  useEffect(() => {
    props.singlePostView(params.id);
    props.getCategories();
  }, []);

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 11 },
    wrapperCol: { span: 24 },
  };

  const handleSubmit = async () => {
    try {
      const editedPost = await props.editPost();
      props.resetForm();
      openNotification("success", editedPost.message);
      navigate(`/view-post/${editedPost.data._id}`);
    } catch (err) {
      console.log("err", err.error);
      if (err.message) {
        openNotification("error", err.message.toUpperCase());
      }
    }
  };

  return (
    <div>
      <Title textAlign="center">Editing {"title"}</Title>
      <Form {...layout} form={form} onFinish={handleSubmit}>
        <Row gutter={[12, 12]}>
          <Col lg={12} xs={24} sm={24}>
            <InputField
              form={form}
              required
              error={error.data.title}
              label="Enter the title"
              name="title"
            />
          </Col>
          <Col lg={12} xs={24} sm={24}>
            <Selector
              form={form}
              required
              name="category"
              label="So, What are you writing about?"
            />
          </Col>
        </Row>
        <div>
          <TextArea
            form={form}
            label="Background behind the story?  [Optional though]"
            name="summary"
          />
        </div>
        <FileUpload />
        <ContentEditor />
        <br />

        <br />
        <PrimaryButton
          // onKeyPressCapture={(e) => console.log("object", e)}
          loading={props.loading}
          disabled={props.loading}
          onClick={handleSubmit}
          curved
          htmlType="submit"
        >
          Done
        </PrimaryButton>
      </Form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
  loading: selectLoading,
});

export default connect(mapStateToProps, {
  editPost,
  resetForm,
  singlePostView,
  getCategories,
})(Edit);
