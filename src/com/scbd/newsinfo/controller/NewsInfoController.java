package com.scbd.newsinfo.controller;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.common.controller.BaseController;
import com.common.tag.PageIterator;
import com.scbd.common.form.ControllerOperatorForm;
import com.scbd.newsinfo.service.NewsInfoService;

@Component
@Controller
public class NewsInfoController extends BaseController {

	
	@Autowired
	private NewsInfoService NewsInfoServiceImpl;
	
	

	@RequestMapping(value = "/QueryNewsInfobycompanyId")
	public String QueryNewsInfobycompanyId(
			@RequestParam("start") int start,
			@RequestParam("company_id") int company_id,
			@RequestParam("limit") int limit,
			
			HttpServletResponse response) {
		
		
		JSONObject jsonObject = new JSONObject();
		PageIterator t;
		ControllerOperatorForm s = new ControllerOperatorForm();
		s.setOperator("query");
		s.setObj("QueryNewsInfobycompanyId");
		try {
			t = NewsInfoServiceImpl.QueryNewsInfobycompanyId(company_id, start, limit);
			if (t.getAllCount() == 0) {
				s.setCode("1");
				jsonObject = JSONObject.fromObject(s);
			} else {
				jsonObject.element("list", t.getModelList());
				jsonObject.put("count", t.getAllCount());
			}
			String json = jsonObject.toString();
			response.setContentType("text/xml");
			response.getWriter().write(json);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return null;
	}
	
}
