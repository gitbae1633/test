import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal4Search from "./Modal4Search";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  TextField,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox, // Checkbox 추가
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Modal4ReceiveMaster from "./Modal4ReceiveMaster";
import Modal4MasterItem from "./Modal4MasterItem";
import Modal4ReceiveDetail from "./Modal4ReceiveDetail";
import Modal4Outlist from "./Modal4Outlist";

const Modal4 = ({ open, onClose }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  // Receive 검색
  // const productSearch = async (searchKw) => {
  //   var url = `/api/product/list`;
  //   if (searchKw) {
  //     url = `/api/product/list?pk=${searchKw.pkeywd}&ps=${searchKw.psize}`;
  //   }
  //   try {
  //     const response = await fetch(url, {
  //       method: "get",
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: localStorage.getItem("token"),
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`${response.status} ${response.statusText}`);
  //     }

  //     const json = await response.json();
  //     if (json.result !== "success") {
  //       throw new Error(`${json.result} ${json.message}`);
  //     }
  //     //console.log(json.data);
  //     setProducts(json.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  
  // ReceiveMaster
  const [modal4receiveMaster, setreceiveMaster] = useState([]);
  // ReceiveDetail
  const [modal4receiveDetail, setreceiveDetail] = useState([]);

  const[modal4outlist,setoutdetail] = useState([]);
  useEffect(() => {
    modal4receiveMasterSearch(null);
  }, []);
  // ReceiveMaster검색
  const modal4receiveMasterSearch = async (searchKw) => {
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
  const modal4receiveDetailSearch = async (code) => {
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

  // ReceiveDetail
  const modal4outlistitem = async (code) => {
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
      setreceoutiveout(json.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <Modal open={open} onClose={onClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              width: "80%",
              padding: "80px",
              paddingTop: '20px',
              height: "80%",
              borderRadius: "8px",
            }}
          >


          <Grid container spacing={2}>
            <Modal4Search callback={modal4receiveMasterSearch} />
            <Modal4ReceiveMaster
              masters={modal4receiveMaster}
              receiveDetail={modal4receiveDetailSearch}
            />
            <Modal4ReceiveDetail details={modal4receiveDetail} />
            <Modal4Outlist 
            
              outdtail={modal4outlist}>

            </Modal4Outlist>
          </Grid>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
export default Modal4;
