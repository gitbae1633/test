import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import React from "react";

const Modal4MasterItem = ({
  no,
  code,
  date,
  username,
  businessname,
  modal4receiveDetail,
}) => {
  return (
    <TableRow
      key={no}
      sx={{
        ":hover": {
          background: "#EFF8FF",
          fontWeight: 600,
        },
        "&.Mui-selected": {
          backgroundColor: "#000",
        },
      }}
      id="searchRow"
      onClick={() => {
        modal4receiveDetail(code || "");
      }}
    >
      <TableCell align="center">
        <Checkbox size="small" />
      </TableCell>
      <TableCell id="code">{code}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{username}</TableCell>
      <TableCell>{businessname}</TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};

export default Modal4MasterItem;
