import React, { useState } from "react";
import axios from "axios";
import { Col, message, Button, Row } from "antd";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";
import { Card } from "../../../../components";
import { createStructuredSelector } from "reselect";
import { selectData } from "../selectors";
import "./component.css";

const FileUpload = ({ data, setDataValue }) => {
  const [file, setFile] = useState();
  const [uploadedFile, setUploadedFile] = useState("");
  const [filePreviewBeforeUpload, setFilePreviewBeforeUpload] = useState("");
  const [uploading, setUploading] = useState(false);

  const onChange = (e) => {
    const { files } = e.target;
    setFile(files[0]);
    setFilePreviewBeforeUpload(URL.createObjectURL(files[0]));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "pencilwriter");
    message.loading("Confirming...");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/argahv/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      message.info("Image Confirmed");

      const { url } = res.data;
      setUploadedFile(url);
      setDataValue({
        key: "image",
        value: url,
      });
    } catch (error) {
      message.error(
        "An error occured while uploading the image, Please try again."
      );
      setUploading(false);
    }
  };

  if (!uploadedFile)
    return (
      <div>
        {!filePreviewBeforeUpload ? (
          <Card hoverable={false}>
            <input
              style={{ padding: 20, background: "#222222", margin: "auto" }}
              className="file-upload"
              onChange={onChange}
              type="file"
            />
          </Card>
        ) : (
          <>
            <img
              style={{
                width: "90%",
                height: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={filePreviewBeforeUpload}
            />
            <br />
            <Row gutter={[12, 12]}>
              <Col span={12}>
                <Button
                  style={{ float: "right" }}
                  disabled={uploading}
                  type="danger"
                  onClick={() => setFilePreviewBeforeUpload(null)}
                >
                  {" "}
                  Remove
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  disabled={uploading}
                  loading={uploading}
                  type="primary"
                  onClick={onSubmit}
                >
                  Confirm
                </Button>
              </Col>
            </Row>
          </>
        )}
      </div>
    );
  return (
    <Card hoverable={false}>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          width: "90%",
          height: "auto",
          marginRight: "auto",
        }}
        src={uploadedFile}
        alt={data.title}
      />
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
});

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
