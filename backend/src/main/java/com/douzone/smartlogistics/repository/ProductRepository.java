package com.douzone.smartlogistics.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.smartlogistics.vo.DBLogVo;
import com.douzone.smartlogistics.vo.ProductVo;
import com.douzone.smartlogistics.vo.UserVo;


@Repository
public class ProductRepository {
	
	@Autowired
	private SqlSession sqlSession;

	public List<ProductVo> findByKeyword(String productkeywd, String productSize) {
		Map<String, Object> map = Map.of("pkeywd",productkeywd,"psize",productSize);
		return sqlSession.selectList("product.findByKeyword",map);
	}
	public boolean insert(ProductVo vo,DBLogVo logVo) {
		Map<String, Object> map = Map.of("vo",vo,"log",logVo);
		return sqlSession.insert("product.insert",map) > 0;
	}
	public ProductVo findByCode(String productCode) {
		return sqlSession.selectOne("product.findByCode",productCode);
	}
	public int updateByCode(String productCode, ProductVo vo,DBLogVo logVo) {
		Map<String, Object> map = Map.of("pcode",productCode,"vo",vo,"log",logVo);
		return sqlSession.update("product.updateByCode",map);
	}
	public boolean deleteByCode(List<String> deleteItem) {
		return 1<=sqlSession.delete("product.deleteByCode",deleteItem);
	}



}
