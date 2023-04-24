package com.douzone.smartlogistics.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.smartlogistics.vo.DBLogVo;
import com.douzone.smartlogistics.vo.ReceiveDetailVo;
import com.douzone.smartlogistics.vo.ReceiveMasterVo;


@Repository
public class ReceiveRepository {
	
	@Autowired
	private SqlSession sqlSession;

	public List<ReceiveMasterVo> findByKeyword(String receiveCode, String businessName, String receiveDate) {
		Map<String, Object> map = Map.of("rcode",receiveCode,"bname",businessName,"rdate",receiveDate);
		return sqlSession.selectList("receive.findByKeyword",map);
	}
	
	public List<ReceiveDetailVo> findByMasterNo(String receiveCode) {
		return sqlSession.selectList("receive.findByMasterNo",receiveCode);
	}

	public void insertMaster(ReceiveMasterVo receiveVo, DBLogVo logVO) {
		Map<String, Object> map = Map.of("vo",receiveVo,"log",logVO);
		sqlSession.insert("receive.insertMaster",map);	
	}
	
	public void insertDetail(List<ReceiveDetailVo> receiveDetailVo, DBLogVo logVO) {
		Map<String, Object> map = Map.of("list",receiveDetailVo,"log",logVO);
		sqlSession.insert("receive.insertDetail",map);	
	}

	public void updateMasterByCode(ReceiveMasterVo receiveVo, DBLogVo logVO) {
		Map<String, Object> map = Map.of("vo",receiveVo,"log",logVO);
		sqlSession.insert("receive.updateMasterByCode",map);			
	}

	public void updateDetailByCode(ReceiveDetailVo receiveVo, DBLogVo logVO) {
		Map<String, Object> map = Map.of("vo",receiveVo,"log",logVO);
		sqlSession.insert("receive.updateDetailByCode",map);	
		
	}
	


}
