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
import MasterItem from "./MasterItem";
import checkImg from "../../assets/img/checkmark.png";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SearchIcon from "@mui/icons-material/Search";
/** 테이블 Header 고정을 위한 styled component 사용 */
// top의 px값은 첫 행의 높이와 같게
const TableStickyTypeCell = styled(TableCell)`
  && {
    top: 43px;
  }
`;

const ReceiveMaster = ({ masters, receiveDetail }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        width: "100%",
        height: 360,
        backgroundColor: "#FFF",
        borderRadius: "8px",
        marginBottom: 1.8,
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
          입고리스트
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
                <TableRow sx={{ height: 3 }}>
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
                  <TableCell sx={{ width: "18%", backgroundColor: "#F6F7F9" }}>
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
                    진행상태
                  </TableCell>
                  <TableCell
                    sx={{ width: "10%", backgroundColor: "#F6F7F9", p: 0 }}
                  >
                    비고
                  </TableCell>
                </TableRow>
                <TableRow sx={{ height: 2, p: 0 }}>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell></TableStickyTypeCell>
                  <TableStickyTypeCell sx={{ p: 0 }}>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      sx={{
                        height: "60px",
                      }}
                    >
                      <DemoContainer
                        components={["DatePicker"]}
                        sx={{
                          p: 0,
                          "& .css-1xhypcz-MuiStack-root": {
                            padding: 0,
                          },
                        }}
                      >
                        <DatePicker
                          disablePast
                          format="YYYY-MM-DD"
                          slotProps={{
                            textField: { size: "small" },
                          }}
                          sx={{
                            paddingLeft: 2,
                            paddingRight: 5,
                            height: "35px",
                            "& .css-19qh8xo-MuiInputBase-input-MuiOutlinedInput-input":
                              {
                                padding: 0,
                                height: 30,
                                width: 150,
                              },
                          }}
                        ></DatePicker>
                      </DemoContainer>
                    </LocalizationProvider>
                  </TableStickyTypeCell>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {masters.length > 0 ? (
                  masters.map((master, index) => (
                    <MasterItem
                      key={index}
                      no={index}
                      code={master.code}
                      date={master.date}
                      username={master.userName}
                      businessname={master.businessName}
                      receiveDetail={receiveDetail}
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

export default ReceiveMaster;
