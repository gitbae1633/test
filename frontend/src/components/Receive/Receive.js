import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Box, Grid } from "@mui/material";
import ReceiveMaster from "./ReceiveMaster";
import ReceiveDetail from "./ReceiveDetail";

const Receive = () => {
  // ReceiveMaster
  const [receiveMaster, setreceiveMaster] = useState([]);
  // ReceiveDetail
  const [receiveDetail, setreceiveDetail] = useState([]);
  useEffect(() => {
    receiveMasterSearch(null);
  }, []);
  // ReceiveMaster검색
  const receiveMasterSearch = async (searchKw) => {
    //console.log(searchKw);
    var url = `/api/receive/list`;
    if (searchKw) {
      url = `/api/receive/list?rc=${searchKw.rcode}&bn=${searchKw.bname}&dt=${searchKw.rdate}`;
    }
    try {
      const response = await fetch(url, {
        method: "get",
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }
      //console.log(json.data);
      setreceiveMaster(json.data);
    } catch (err) {
      console.log(err);
    }
  };
  // ReceiveDetail
  const receiveDetailSearch = async (code) => {
    try {
      const response = await fetch(`/api/receive/detail?rc=${code}`, {
        method: "get",
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }
      //console.log(json.data);
      setreceiveDetail(json.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Grid container spacing={2} style={{ marginLeft: "0px" }}>
        <SearchBar callback={receiveMasterSearch} />
        <ReceiveMaster
          masters={receiveMaster}
          receiveDetail={receiveDetailSearch}
        />
        <ReceiveDetail details={receiveDetail} />
      </Grid>
    </Box>
  );
};

export default Receive;
