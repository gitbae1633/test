import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import React from "react";
import Modal4Outlist from "./Modal4Outlist";

const Modal4OutItem = ({
  no,
  mcode,
  pcode,
  pname,
  psize,
  putil,
  receivecnt,
  stockcnt,
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
        Modal4Outlist(code || "");
      }}
    >
      <TableCell align="center">
        <Checkbox size="small" />
      </TableCell>
      <TableCell>{no + 1}</TableCell>
      <TableCell>{pcode}</TableCell>
      <TableCell>{pname}</TableCell>
      <TableCell>{psize}</TableCell>
      <TableCell>{putil}</TableCell>
      <TableCell>{receivecnt}</TableCell>
      <TableCell>{stockcnt}</TableCell>
      <TableCell>
        <Box
          sx={{
            width: "70px",
            height: "30px",
            backgroundColor: "#FFE7B3",
            borderRadius: "25px",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: 450, margin: "3px" }}>대기</span>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default Modal4OutItem;
