import React from "react";
import { Col, Form } from "antd";
import { connect } from "react-redux";
import { useInjectReducer } from "../../../utils/injectReducer";
import {
  Head,
  Paragraph,
  PrimaryButton,
  Card,
  openNotification,
} from "../../components";
import InputForm from "./components/InputForm";
import MessageArea from "./components/MessageArea";
import * as mapDispatchToProps from "./actions";
// import { createStructuredSelector } from "reselect";
import { reduxKey, selectLoading } from "./selectors";
import reducer from "./reducer";
import { createStructuredSelector } from "reselect";

const Contact = ({ sendInquiry, resetForm, loading }) => {
  useInjectReducer({ key: reduxKey, reducer });

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 11 },
    wrapperCol: { span: 24 },
  };

  const handleFormSubmit = async () => {
    try {
      const sendSuccess = await sendInquiry();
      // resetForm();
      openNotification("success", sendSuccess.message);
      form.resetFields();
    } catch (err) {
      console.log("err", err.error);
      if (err.message) {
        openNotification("error", err.message.toUpperCase());
      }
    }
  };

  return (
    <div>
      <Col span={24}>
        <Head textAlign="center" color="rgb(242, 56, 224)">
          Contact
        </Head>
      </Col>
      <Col>
        <Paragraph color="white" size={25} textAlign="center">
          Got an inquiry? Submit here
        </Paragraph>
      </Col>
      <Card style={{ width: "75%", margin: "auto" }}>
        <Form onFinish={handleFormSubmit} form={form} {...layout}>
          <InputForm required name="fullName" placeholder="Full Name" />
          <InputForm required name="email" placeholder="Email" />
          <MessageArea required name="message" placeholder="Message" />
          <PrimaryButton
            disabled={loading}
            loading={loading}
            curved
            width="75%"
            htmlType="submit"
          >
            Submit
          </PrimaryButton>
        </Form>
      </Card>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
