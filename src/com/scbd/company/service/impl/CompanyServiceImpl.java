package com.scbd.company.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.common.tag.PageIterator;
import com.scbd.company.dao.CompanyDao;
import com.scbd.company.form.CompanyForm;
import com.scbd.company.service.CompanyService;



@Service("CompanyServiceImpl")
public class CompanyServiceImpl implements CompanyService {

	
	@Autowired
	private CompanyDao CompanyDaoImpl;
	
	@Override
	public PageIterator QueryCompany(int start, int limit) {
	
		return CompanyDaoImpl.QueryCompany(start, limit);
	}
	@Override
	public CompanyForm QueryCompanybyId(int id) {
		
		return CompanyDaoImpl.QueryCompanybyId(id);
	}
	
	@Override
	public List<CompanyForm> QueryCompanybyrelationid(String relation_id) {
		
		return CompanyDaoImpl.QueryCompanybyrelationid(relation_id);
	}
	
	@Override
	public List<CompanyForm> companyname() {
		
		return CompanyDaoImpl.companyname();
	}
	
	@Override
	public PageIterator QueryCompanybycompanyname(String company_name,
			int start, int limit) {
		
		return CompanyDaoImpl.QueryCompanybycompanyname(company_name, start, limit);
	}
	@Override
	public int AddcompanyInfo(CompanyForm companyInfo) {
		
		return CompanyDaoImpl.AddcompanyInfo(companyInfo);
	}
	@Override
	public int DeletecompanyInfo(int id) {
		
		return CompanyDaoImpl.DeletecompanyInfo(id);
	}
	@Override
	public int updatecompanyInfo(String company_name,int id) {
		
		return CompanyDaoImpl.updatecompanyInfo(company_name,id);
	}


}