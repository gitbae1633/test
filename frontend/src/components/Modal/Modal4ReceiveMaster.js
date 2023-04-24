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
import Modal4MasterItem from "./Modal4MasterItem";
import checkImg from "../../assets/img/checkmark.png";
/** 테이블 Header 고정을 위한 styled component 사용 */
// top의 px값은 첫 행의 높이와 같게
const TableStickyTypeCell = styled(TableCell)`
  && {
    top: 50.5px;
  }
`;

const Modal4ReceiveMaster = ({ masters, modal4receiveDetail }) => {
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
        marginBottom: 2,
      }}
    >
      <Box sx={{ display: "flex",  width: "94%" }}>
        <span
          style={{
            position: "relative",
            fontSize: "16px",
            fontWeight: 800,
            marginRight: "15px",
            marginTop: "0px",
            marginLeft: "10px",
          }}
        >
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
              
              paddingTop: 0,
              boxShadow: "none",
              height: 200,
              // marginLeft: "40px",
            }}
            // onScroll={handleScroll}
          >
            <Table stickyHeader size="small">
              <TableHead>
              <span
          style={{
            position: "relative",
            fontSize: "12px",
            fontWeight: 800,
            marginRight: "12px",
            marginTop: "5px",
            marginLeft: "2px",
          }}
        >
          입고리스트
        </span>
                <TableRow>
                  <TableCell sx={{ width: "5%", backgroundColor: "#F6F7F9" }}>
                    <Checkbox size="small" />
                  </TableCell>
                  <TableCell sx={{ width: "5%", backgroundColor: "#F6F7F9" }}>
                    입고번호
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "#F6F7F9" }}>
                    입고일
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "#F6F7F9" }}>
                    담당자
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "#F6F7F9" }}>
                    거래처
                  </TableCell>
                  <TableCell sx={{ width: "10%", backgroundColor: "#F6F7F9" }}>
                    선택
                  </TableCell>
                </TableRow>
                <TableRow sx={{ height: 5 }}>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {masters.length > 0 ? (
                  masters.map((master, index) => (
                    <Modal4MasterItem
                      key={index}
                      no={index}
                      code={master.code}
                      date={master.date}
                      username={master.userName}
                      businessname={master.businessName}
                    />
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} sx={{ textAlign: "center" }}>
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

export default Modal4ReceiveMaster;
