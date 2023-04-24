import {
  Box,
  Checkbox,
  FormControl,
  Grid,
  NativeSelect,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import React from "react";
import Modal4DetailItem from "./Modal4DetailItem";
import checkImg from "../../assets/img/checkmark.png";
/** 테이블 Header 고정을 위한 styled component 사용 */
// top의 px값은 첫 행의 높이와 같게
const TableStickyTypeCell = styled(TableCell)`
  && {
    top: 50.5px;
  }
`;

const Modal4ReceiveDetail = ({ details }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        width: "100%",
        height: 230,
        // position: "relative",
        backgroundColor: "#FFF",
        borderRadius: "25px",
      }}
    >
      <Box sx={{ display: "flex", paddingLeft: 3, width: "94%" }}>
        <span
          style={{
            position: "relative",
            fontSize: "16px",
            fontWeight: 800,
            marginRight: "15px",
            marginTop: "5px",
            marginLeft: "10px",
          }}
        >
          품목리스트
        </span>
        <DeleteIcon
          sx={{
            padding: "7px",
            cursor: "pointer",
            marginLeft: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <FormControl component="form">
          <TableContainer
            component={Paper}
            sx={{
              width: "94%",
              paddingLeft: 3,
              paddingTop: 0,
              boxShadow: "none",
              height: 200,
              // marginLeft: "40px",
            }}
            // onScroll={handleScroll}
          >
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "5%", backgroundColor: "#F6F7F9" }}>
                    <Checkbox size="small" />
                  </TableCell>
                  <TableCell sx={{ width: "10%", backgroundColor: "#F6F7F9" }}>
                    순번
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "#F6F7F9" }}>
                    품번
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "#F6F7F9" }}>
                    품명
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "#F6F7F9" }}>
                    규격
                  </TableCell>
                  <TableCell sx={{ width: "10%", backgroundColor: "#F6F7F9" }}>
                    단위
                  </TableCell>
                  <TableCell sx={{ width: "10%", backgroundColor: "#F6F7F9" }}>
                    수량
                  </TableCell>
                  <TableCell sx={{ width: "10%", backgroundColor: "#F6F7F9" }}>
                    잔량
                  </TableCell>
                  <TableCell sx={{ width: "10%", backgroundColor: "#F6F7F9" }}>
                    출고할잔량
                  </TableCell>
                  <TableCell sx={{ width: "10%", backgroundColor: "#F6F7F9" }}>
                    선택
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {details.length > 0 ? (
                  details.map((detail, index) => (
                    <Modal4DetailItem
                      key={index}
                      no={index}
                      mcode={detail.masterCode}
                      pcode={detail.productCode}
                      pname={detail.productName}
                      psize={detail.productSize}
                      putil={detail.productUnit}
                      receivecnt={detail.receiveCount}
                      stockcnt={detail.stockCount}
                    />
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={10} sx={{ textAlign: "center" }}>
                      등록된 품목이 없습니다.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </FormControl>
      </Box>
    </Grid>
  );
};

export default Modal4ReceiveDetail;
