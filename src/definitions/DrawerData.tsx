import { HomeOutlined, InboxOutlined, CheckBoxOutlineBlankOutlined, MailOutline, DraftsOutlined, ReceiptOutlined } from "@mui/icons-material";


const DrawerData = [
    {
      name: "Home",
      icon: <HomeOutlined />,
    },
    { name: "Inbox", icon: <InboxOutlined /> },
    { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined /> },
    { name: "Sent mail", icon: <MailOutline /> },
    { name: "Draft", icon: <DraftsOutlined /> },
    { name: "Trash", icon: <ReceiptOutlined /> },
  ];


  
  export {DrawerData}