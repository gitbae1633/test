package com.douzone.smartlogistics.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.smartlogistics.annotation.DBLog;
import com.douzone.smartlogistics.dto.JsonResult;
import com.douzone.smartlogistics.service.ReceiveService;
import com.douzone.smartlogistics.vo.DBLogVo;
import com.douzone.smartlogistics.vo.ReceiveDetailVo;
import com.douzone.smartlogistics.vo.ReceiveMasterVo;

@RestController
@RequestMapping("/api/receive")
public class ReceiveController {

	@Autowired
	private ReceiveService receiveService;

	// receive select masterList
	@GetMapping("/list")
	public ResponseEntity<JsonResult> readReceive(
			@RequestParam(value = "rc", required = true, defaultValue = "") String receiveCode,
			@RequestParam(value = "bn", required = true, defaultValue = "") String businessName,
			@RequestParam(value = "dt", required = true, defaultValue = "") String receiveDate) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(JsonResult.success(receiveService.findByKeyword(receiveCode, businessName, receiveDate)));
	}

	// receive select detailList
	@GetMapping("/detail")
	public ResponseEntity<JsonResult> readReceive(
			@RequestParam(value = "rc", required = true, defaultValue = "") String receiveCode) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(JsonResult.success(receiveService.findByMasterNo(receiveCode)));
	}

	// receive master,detail insert
	@PostMapping("/insert")
	public ResponseEntity<JsonResult> insertReceive(@RequestBody ReceiveMasterVo receiveVo, @DBLog DBLogVo logVO) {
		// 2022-08-09
//		System.out.println(receiveVo.getDate().substring(2,7).replaceAll("-", ""));
		System.out.println(receiveVo);
		System.out.println(receiveVo.getReceiveDetails());
		receiveService.insertDetail(receiveVo.getReceiveDetails(), logVO);
		receiveService.insertMaster(receiveVo, logVO);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(receiveVo));
	}

	// receive detail insert
	@PostMapping("/insertdetail")
	public ResponseEntity<JsonResult> insertReceive(@RequestBody List<ReceiveDetailVo> receiveDetailVo,
			@DBLog DBLogVo logVO) {
		System.out.println(receiveDetailVo);
		receiveService.insertDetail(receiveDetailVo, logVO);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(receiveDetailVo));
	}

	// receive master update
	@PostMapping("/update")
	public ResponseEntity<JsonResult> updateReceive(@RequestBody ReceiveMasterVo receiveVo, @DBLog DBLogVo logVO) {
		receiveService.updateMasterByCode(receiveVo, logVO);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(receiveVo));
	}

	// receive detail count update
	@PostMapping("/updatedetail")
	public ResponseEntity<JsonResult> updateReceive(@RequestBody ReceiveDetailVo receiveVo, @DBLog DBLogVo logVO) {
		receiveService.updateDetailByCode(receiveVo, logVO);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(receiveVo));
	}
	

}
