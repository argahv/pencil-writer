import { notification } from "antd";

const openNotification = async (
  type = "",
  message = "",
  description = "",
  icon = "",
  placement = ""
) => {
  return await notification[type]({
    message,
    description,
    icon,
    placement,
  });
};

export default openNotification;
