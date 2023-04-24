import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
const Modal2 = ({ open, onClose }) => {
  const DEFAULT_ROWS_PER_PAGE = 5;
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [selected1, setSelected1] = React.useState([]);
  const [selected2, setSelected2] = React.useState([]);
  // const [visibleRows, setVisibleRows] = React.useState(null);
  const [paddingHeight, setPaddingHeight] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
  const [page, setPage] = React.useState(0);
  const isSelected1 = (name) => selected1.indexOf(name) !== -1;
  const isSelected2 = (name) => selected2.indexOf(name) !== -1;

  const data1 = [
    {
      no: 1,
      code: "i-100",
      name: "사과",
      size: "1",
      unit: "EA",
    },
    {
      no: 2,
      code: "i-200",
      name: "오렌지",
      size: "2",
      unit: "EA",
    },
    {
      no: 3,
      code: "i-300",
      name: "수박",
      size: "3",
      unit: "EA",
    },
    {
      no: 4,
      code: "i-400",
      name: "오렌지",
      size: "2",
      unit: "EA",
    },
    {
      no: 5,
      code: "i-500",
      name: "수박",
      size: "3",
      unit: "EA",
    },
  ];
  console.log(data1);
  const handleClick1 = (event, code) => {
    const selectedIndex = selected1.indexOf(code);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected1, code);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected1.slice(1));
    } else if (selectedIndex === selected1.length - 1) {
      newSelected = newSelected.concat(selected1.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected1.slice(0, selectedIndex),
        selected1.slice(selectedIndex + 1)
      );
    }
    setSelected1(newSelected);
  };

  const handleClick2 = (event, code) => {
    const selectedIndex = selected2.indexOf(code);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected2, code);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected2.slice(1));
    } else if (selectedIndex === selected2.length - 1) {
      newSelected = newSelected.concat(selected2.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected2.slice(0, selectedIndex),
        selected2.slice(selectedIndex + 1)
      );
    }

    setSelected2(newSelected);
  };
  const handleSelectAllClick1 = (event) => {
    if (event.target.checked) {
      const newSelected = data1.map((n) => n.code);
      setSelected1(newSelected);
      return;
    }
    setSelected1([]);
  };
  const handleSelectAllClick2 = (event) => {
    if (event.target.checked) {
      const newSelected = data1.map((n) => n.code);
      setSelected2(newSelected);
      return;
    }
    setSelected2([]);
  };
  // const handleChangePage = React.useCallback(
  //   (event, newPage) => {
  //     setPage(newPage);

  //     const updatedRows = sortedRows.slice(
  //       newPage * rowsPerPage,
  //       newPage * rowsPerPage + rowsPerPage,
  //     );

  //     setVisibleRows(updatedRows);

  //     // Avoid a layout jump when reaching the last page with empty rows.
  //     const numEmptyRows =
  //       newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;

  //     const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
  //     setPaddingHeight(newPaddingHeight);
  //   },
  //   [rowsPerPage],
  // );

  // const handleChangeRowsPerPage = React.useCallback(
  //   (event) => {
  //     const updatedRowsPerPage = parseInt(event.target.value, 10);
  //     setRowsPerPage(updatedRowsPerPage);

  //     setPage(0);

  //     const updatedRows = sortedRows.slice(
  //       0 * updatedRowsPerPage,
  //       0 * updatedRowsPerPage + updatedRowsPerPage,
  //     );

  //     setVisibleRows(updatedRows);

  //     // There is no layout jump to handle on the first page.
  //     setPaddingHeight(0);
  //   },
  //   [],
  // );
  return (
    <Box>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1200,
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: 5,
            p: 4,
          }}
        >
          <Box>
            <Box
              variant="h6"
              sx={{
                fontSize: "28px",
              }}
            >
              품목
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "60px",
            }}
          >
            <Box
              sx={{
                mt: 1,
                display: "flex",
                float: "right",
              }}
            >
              <Box
                sx={{
                  lineHeight: "40px",
                  pl: 1,
                }}
              >
                검색어
              </Box>
              <TextField
                size="small"
                sx={{
                  p:0,
                  ml:1,
                  height: 30, width: 150
                }}
              ></TextField>
              <Box
                sx={{
                  lineHeight: "40px",
                  pl: 1,
                }}
              >
                규격
              </Box>
              <TextField
                size="small"
                sx={{
                  p:0,
                  ml:1,
                  height: 30, width: 150
                }}
              ></TextField>

              <Box
                sx={{
                  lineHeight: "40px",
                  pl: 1,
                }}
              >
                단위
              </Box>
              <TextField
                size="small"
                sx={{
                  ml:1,
                  p:0,
                  height: 30, width: 150
                }}
              ></TextField>
              <Button>
                <SearchIcon />
              </Button>
            </Box>
          </Box>
          <Box>
            <Box
              variant="h6"
              sx={{
                fontSize: "20px",
                mt: 1,
              }}
            >
              <strong>품목리스트</strong>
            </Box>
          </Box>
          <TableContainer sx={{ mt: 1 }}>
            <Table sx={{ width: "100%" }} aria-labelledby="tableTitle">
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#E9ECEF",
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      onChange={handleSelectAllClick1}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <strong>품번</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>품명</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>규격</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>단위</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>선택</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data1.map((data, index) => {
                  const isItemSelected = isSelected1(data.code);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick1(event, data.code)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={data.code}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick1(event, data.code)}
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell align="center" size="small">
                        {data.code}
                      </TableCell>
                      <TableCell align="center" size="small">
                        {data.name}
                      </TableCell>
                      <TableCell align="center" size="small">
                        {data.size}
                      </TableCell>
                      <TableCell align="center" size="small">
                        {data.unit}
                      </TableCell>
                      <TableCell align="center" size="small">
                        <Box sx={{ cursor: "pointer", zIndex:999 }} onClick={() => console.log('click!!!!!')}>추가</Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {paddingHeight > 0 && (
                  <TableRow
                    style={{
                      height: paddingHeight,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            sx={{
              mt: 2,
              color: "#41719C",
              border: "2px solid #41719C",
              borderRadius: "5px",
              float: "right",
              ":hover": {
                color: "#fff",
                backgroundColor: "#41719C",
              },
            }}
          >
            <strong>추가</strong>
          </Button>
          <Box
            sx={{
              mt: 10,
              width: "100%",
              height: "40px",
            }}
          >
            <Box
              variant="h6"
              sx={{
                fontSize: "20px",
                mt: 1,
                float: "left",
              }}
            >
              <strong>리스트</strong>
            </Box>
            <Button
              sx={{
                float: "right",
              }}
            >
              <DeleteIcon sx={{ color: "black" }} />
            </Button>
          </Box>

          <TableContainer>
            <Table sx={{ width: "100%" }} aria-labelledby="tableTitle">
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#E9ECEF",
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      onChange={handleSelectAllClick2}
                      inputProps={{
                        "aria-label": "select all desserts",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <strong>품번</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>품명</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>규격</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>단위</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>수량</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data1.map((data, index) => {
                  const isItemSelected = isSelected2(data.code);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick2(event, data.code)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={data.code}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick2(event, data.code)}
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell align="center" size="small">
                        {data.code}
                      </TableCell>
                      <TableCell align="center" size="small">
                        {data.name}
                      </TableCell>
                      <TableCell align="center" size="small">
                        {data.size}
                      </TableCell>
                      <TableCell align="center" size="small">
                        {data.unit}
                      </TableCell>
                      <TableCell align="center" size="small">
                        10
                      </TableCell>
                    </TableRow>
                  );
                })}
                {paddingHeight > 0 && (
                  <TableRow
                    style={{
                      height: paddingHeight,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data1.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
          <Button
            sx={{
              mt: 2,
              color: "#41719C",
              border: "2px solid #41719C",
              borderRadius: "5px",
              float: "right",
              ":hover": {
                color: "#fff",
                backgroundColor: "#41719C",
              },
            }}
          >
            <strong>등록</strong>
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Modal2;
