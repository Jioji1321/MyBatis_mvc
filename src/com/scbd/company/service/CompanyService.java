package com.scbd.company.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.common.tag.PageIterator;
import com.scbd.company.form.CompanyForm;


@Transactional
public interface CompanyService {
	
public PageIterator QueryCompany(int start,int limit);
	
	public CompanyForm QueryCompanybyId(int id);
	public List<CompanyForm> QueryCompanybyrelationid(String relation_id);
	public List<CompanyForm> companyname();
	
	
	
	public PageIterator QueryCompanybycompanyname(String company_name,int start,int limit);
	
	public int AddcompanyInfo(CompanyForm companyInfo);
	
	public int DeletecompanyInfo(int id);
	
	public int updatecompanyInfo(String company_name,int id);

}
