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
import DetailItem from "./DetailItem";
import checkImg from "../../assets/img/checkmark.png";
import SearchIcon from "@mui/icons-material/Search";
/** 테이블 Header 고정을 위한 styled component 사용 */
// top의 px값은 첫 행의 높이와 같게
const TableStickyTypeCell = styled(TableCell)`
  && {
    top: 43px;
    p: 0;
    height: 30px;
  }
`;

const ReceiveDetail = ({ details }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        width: "100%",
        height: 360,
        backgroundColor: "#FFF",
        borderRadius: "8px",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ display: "flex", paddingLeft: 3, width: "94%" }}>
        <Box
          component="img"
          src={checkImg}
          sx={{
            width: "30px",
            height: "30px",
          }}
        />
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
              height: 300,
              // marginLeft: "40px",
            }}
            // onScroll={handleScroll}
          >
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      width: "5%",
                      backgroundColor: "#F6F7F9",
                      p: 0,
                      textAlign: "center",
                    }}
                  >
                    <Checkbox size="small" />
                  </TableCell>
                  <TableCell sx={{ width: "10%", backgroundColor: "#F6F7F9" }}>
                    순번
                  </TableCell>
                  <TableCell sx={{ width: "15%", backgroundColor: "#F6F7F9" }}>
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
                    진행상태
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell>
                    <Box
                      sx={{
                        p: 0,
                        border: "1px solid #C4C4C4",
                        height: "28px",
                        display: "flex",
                        width: "190px",
                        marginRight: "5px",
                        borderRadius: "4px",
                        paddingRight: "8px",
                      }}
                    >
                      <input
                        type="text"
                        style={{
                          marginLeft: "1px",
                          width: "140px",
                          height: "27px",
                          border: 0,
                        }}
                      />
                      <SearchIcon
                        sx={{ marginLeft: "auto", marginTop: "3px" }}
                      />
                    </Box>
                  </TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {details.length > 0 ? (
                  details.map((detail, index) => (
                    <DetailItem
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
                    <TableCell colSpan={9} sx={{ textAlign: "center" }}>
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

export default ReceiveDetail;
