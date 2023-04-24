package com.douzone.smartlogistics.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.douzone.smartlogistics.repository.ReceiveRepository;
import com.douzone.smartlogistics.vo.DBLogVo;
import com.douzone.smartlogistics.vo.ReceiveDetailVo;
import com.douzone.smartlogistics.vo.ReceiveMasterVo;

@Service
@Transactional
public class ReceiveService {

	@Autowired
	private ReceiveRepository receiveRepository;

	public List<ReceiveMasterVo> findByKeyword(String receiveCode, String businessName, String receiveDate) {
		return receiveRepository.findByKeyword(receiveCode, businessName, receiveDate);
	}

	public List<ReceiveDetailVo> findByMasterNo(String receiveCode) {
		return receiveRepository.findByMasterNo(receiveCode);
	}

	public void insertMaster(ReceiveMasterVo receiveVo, DBLogVo logVO) {
		receiveRepository.insertMaster(receiveVo,logVO);

	}

	public void insertDetail(List<ReceiveDetailVo> receiveDetailVo,DBLogVo logVO) {
		receiveRepository.insertDetail(receiveDetailVo,logVO);

	}

	public void updateMasterByCode(ReceiveMasterVo receiveVo, DBLogVo logVO) {
		receiveRepository.updateMasterByCode(receiveVo,logVO);
	}

	public void updateDetailByCode(ReceiveDetailVo receiveVo, DBLogVo logVO) {
		receiveRepository.updateDetailByCode(receiveVo,logVO);
		
	}
}
