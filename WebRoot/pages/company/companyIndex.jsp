<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>




<base href="<%=basePath%>">

<meta name="viewport" content="width=device-width, initial-scale=1.0">


<title>供应商</title>

<link rel="shortcut icon" href="favicon.ico">
<link href="./page/css/bootstrap.min.css?v=3.3.6" rel="stylesheet">
<link href="./page/css/font-awesome.css?v=4.4.0" rel="stylesheet">
<link href="./page/css/animate.css" rel="stylesheet">
<link href="./page/css/style.css?v=4.1.0" rel="stylesheet">
<link href="./page/css/plugins/sweetalert/sweetalert.css"
	rel="stylesheet">


<script language="javascript" type="text/javascript"
src="<%=request.getContextPath()%>/My97DatePicker/WdatePicker.js">	
</script>
<script type="text/javascript" src="./page/js/contabs.js"></script>
<script type="text/javascript" src="./res/js/jquery-1.10.2.js"></script>
<script type="text/javascript" src="./res/js/jquery-ui-1.10.3.min.js"></script>
<link rel="stylesheet" href="./res/css/jquery-ui.min.css"
	type="text/css"></link>
<script type="text/javascript" src="./res/js/jquery-form.js"></script>



</head>


<body onload="getCompanyIndex(1,5)">



	<script type="text/javascript">
		function getCompanyIndex(page, interval) {
			var start = (page - 1) * interval;
			 var company_name=document.getElementById("company_name").value;
			 

			$
					.ajax({
						type : "post",
						url : "./companyPaginationAndName",
						dataType : 'json',
						data : {
                              company_name:company_name,
							start : start,
							limit:interval,
							
						},
						success : function(json) {
							
							var returnnum = json["code"];
							if (returnnum == '1') {
								$("#CompanyIndex_Company")
										.html("没有查询到供应商信息");

							} else {
								
								var m_str1 = "";

								m_str1 = "<table class='table table-bordered table-striped'><thead><tr><th style=\"text-align: center;\">公司名称</th><th style=\"text-align: center;\">总部地址</th><th style=\"text-align: center;\">公司类型</th><th style=\"text-align: center;\">航空总部地址</th><th style=\"text-align: center;\">操作</th></tr></thead><tbody>";
								var list = json["list"];
								
								
								for ( var p in list) {
								
								
									m_str1 = m_str1 + "<tr  >";

									//jiade
									m_str1 = m_str1
											+ "<td style=\"width:200px;text-align: center;display:none\" >"
											+ list[p].id + "</td>";
									m_str1 = m_str1
											+ "<td style=\"width:200px;text-align: center;\">"
											+ list[p].company_name + "</td>";

									m_str1 = m_str1
											+ "<td style=\"width:100px;text-align: center;\">"
											+ list[p].address + "</td>";
									m_str1 = m_str1
											+ "<td style=\"width:100px;text-align: center;\">"
											+ list[p].type + "</td>";
											
												m_str1 = m_str1
											+ "<td style=\"width:100px;text-align: center;\">"
											+ list[p].aerospace_address + "</td>";
										
										 // var ssss="onclick= Delete_company("+ list[p].id +")";
										 var ssss="onclick=\" Delete_company(" + list[p].id + "\)";
										// var sssss="onclick=\" Update_company(" + list[p].id + "\)";
                                           var ss="href=\"./pages/company/companyDetails.jsp?id=";
                                           var sss="href=\"./page/echars-graph-id.html?id=";
                                           if(list[p].id !=1&&list[p].id !=2)
                                           {ss="onclick='chakanxinxi()'";
                                           sss=ss;
                                           }else
                                           {
                                         	
                                           ss=ss+list[p].id;
                                           sss=sss+list[p].id;
                                           }
										
                                      
									m_str1 = m_str1
											+ "<td style=\"width:400px;text-align:center;\">"
											+ "<a style=\"width:50px\" class=\"btn  btn-info btn-sm\"  "+ ss + "\")\"> 详情</a>&nbsp"
											+ "<a style=\"width:80px;\"  class=\"btn  btn-success btn-sm J_menuItem\"  "+ sss + "\")\">查看关系图</a>&nbsp"
											+ "<button  type=\"button\" style=\"width:50px\" class=\"btn  btn-info btn-sm\" " + ssss + "\")\"> 删除</button>&nbsp"
											+ "<button class=\"btn btn-sm  btn-default \" data-toggle=\"modal\" style=\"width:50px\"data-target=\"#myModal6\">更改</button>&nbsp"
											+ "</td></tr>"
											;

								}
								m_str1 = m_str1 + "</tbody></table>";
								$("#CompanyIndex_Company").html(m_str1);

								var count = json["count"];

								var page = Math.ceil((start + 1) / interval);
								totalpage = Math.ceil(count / interval);

								var m_str2 = "<button type=\"button\" class='btn btn-white' onclick='CompanyIndex_pageprev("
										+ page + "," + interval + ")'>上一页</button>";
								m_str2 = m_str2
										+ "<button type=\"button\" class='btn btn-white' onclick='CompanyIndex_pagenext("
										+ page + "," + interval + ","
										+ totalpage + ")'>下一页</button>";
								m_str2 = m_str2 + "<span class='btn btn-white'>第" + page + "页/共"
										+ totalpage + "页</span>";

								$("#CompanyIndex_Company_page")
										.html(m_str2);

							}

						},
						beforeSend : function() {

						},
						complete : function(XMLHttpRequest, textStatus) {

						},
						error : function() {

						}
					});
		}

		function CompanyIndex_pagenext(page, interval, totalpage) {

			if (page < totalpage) {
				page = page + 1;
				getCompanyIndex(page, interval);
			} else {
				alert("已到末页");
			}
		}

		function CompanyIndex_pageprev(page, interval) {
			if (page > 1) {
				page = page - 1;
				getCompanyIndex(page, interval);
			} else {
				alert("已到第一页");
			}
		}
		
		
		function chakanxinxi() {
			swal({
				title : "信息不足无法查看",
				text : "信息不足无法查看，请返回！",
				type : "warning",
				showCancelButton : true,
				confirmButtonColor : "#DD6B55",
				confirmButtonText : "是的，我要查看！",
				cancelButtonText : "让我再考虑一下…",
				closeOnConfirm : false,
				closeOnCancel : false
			}, function(isConfirm) {
				if (isConfirm) {
				
							swal("已取消", "查看失败!", "error");
					

				} else {
					swal("已取消", "您取消了查看操作！", "error");
				}
			});

		}
	
	</script>

	<div id="CompanyIndex">

		<div class="ibox-title">
		    <div style="width:100px;float: left">
			<button class="btn btn-sm  btn-default " data-toggle="modal" style="height:34px;"
				data-target="#myModal5">&nbsp;添加公司名称</button>
				</div>
		
		
		    <div  style="float: left">
				    	<form name="Company_form_sousuo">
				    	<input id="company_name" name="company_name"  placeholder="公司名称" class="form-control" style="width: 200px;float: left;">
			    <button  type="button" onclick="getCompanyIndex(1,5)" class="btn btn-primary layer-date"  >查询</button></form>
				</div>
		</div>


		<div class="ibox-content" style="text-align: center;">



			<div class="table-responsive" id="CompanyIndex_Company"></div>
			<div id="CompanyIndex_Company_page"></div>

		</div>



		<div class="modal inmodal fade" id="myModal5" tabindex="-1"
			role="dialog" aria-hidden="true">
			<div class="modal-dialog modal-lg" Style="width:400px">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
						</button>
						<h5 class="modal-title">添加公司名称</h5>
						<small class="font-bold">
					</div>
					<div class="modal-body" style="margin:0 auto; width:396px;">
						<form id="AddCompany_form" name="AddCompany_form">
							

							 <input type="text"
								name="company_name" placeholder="请输入公司名" class="form-control"
								Style="margin-top:5px;width:100%">
							<input type="text"
								name="address" placeholder="请输入公司地址" class="form-control"
								Style="margin-top:5px;width:100%">


						</form>
					</div>

					<div class="modal-footer">
						<button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
						<button type="button" class="btn btn-primary demo2"
							onclick="Add_company()">添加</button>
					</div>
				</div>
			</div>
		</div>
		
		<!-- jiade -->
		<div class="modal inmodal fade" id="myModal6" tabindex="-1"
			role="dialog" aria-hidden="true">
			<div class="modal-dialog modal-lg" Style="width:400px">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
						</button>
						<h5 class="modal-title">更改公司名称</h5>
						<small class="font-bold">
					</div>
					<div class="modal-body" style="margin:0 auto; width:396px;">
						<form id="UpdateCompany_form" name="UpdateCompany_form">
							

							 <input type="text" id="dong"
								name="company_name" placeholder="请输入公司名" class="form-control"
								Style="margin-top:5px;width:100%">


						</form>
					</div>

					<div class="modal-footer">
						<button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
						<button type="button" class="btn btn-primary demo2"
							onclick="Update_company()">更改</button>
					</div>
				</div>
			</div>
		</div>




	</div>
</body>





<!-- 全局js -->
<script src="./page/js/jquery.min.js?v=2.1.4"></script>
<script src="./page/js/bootstrap.min.js?v=3.3.6"></script>
<!-- 自定义js -->
<script src="./page/js/content.js?v=1.0.0"></script>

<!-- Sweet alert -->
<script src="./page/js/plugins/sweetalert/sweetalert.min.js"></script>
<script>
	$("#myModal5").on("hidden.bs.modal", function() {
		$("input").val('');
	});
	$("#update5").on("hidden.bs.modal", function() {
		
	});
	$("#update5").on("shown.bs.modal", function() {

	});



	function Add_company() {

 	var form = new FormData(document
				.getElementById("AddCompany_form"));
				
		
		$.ajax({
			type : "post",
			url : "./AddcompanyInfo",
			dataType : 'json',
			data : form,
			processData : false,
			contentType : false,
			success : function(json) {
			
				var code = json["code"];
				if (code == '0') {
					swal({
						title : "添加成功",
						text : "",
						type : "success"
					});
					$("#myModal5").modal("hide");
					$("#myModal5").removeData("bs.modal");
				} else {
					swal({
						title : "添加失败",
						text : "",
						type : "error"
					});
					$("#myModal5").modal("hide");
				}
				getCompanyIndex(1, 5);
			},
			beforeSend : function() {

			},
			complete : function(XMLHttpRequest, textStatus) {

			},
			error : function() {

			}
		});
	}
	
	//删除
	function Delete_company(id) {
		
	if(confirm("are you sure?")){
	var tt=id;
	//alert(tt);
	var sl="./DeletecompanyInfo?id="+tt;	
		$.ajax({
			type : "post",
			//url : "./DeletecompanyInfo" ,
			url : sl,
			//dataType :'int',
			//data : 8
			processData : false,
			contentType : false,
			success : function(json) {
			
				var code = json["code"];
				if (code == '0') {
					swal({
						title : "删除成功",
						text : "",
						type : "success"
					});
					/* $("#myModal5").modal("hide");
					$("#myModal5").removeData("bs.modal"); */
				} else {
					swal({
						title : "删除失败",
						text : "",
						type : "error"
					});
					/* $("#myModal5").modal("hide"); */
				}
				getCompanyIndex(1, 5);
			},
			beforeSend : function() {

			},
			complete : function(XMLHttpRequest, textStatus) {
				alert("删除成功");
				getCompanyIndex(1,5);

			},
			error : function() {
			
			}
		});
		}
	}
	//update
function Update_company() {

//alert(tr);
//$('#myModal6').modal();
 	/* var form = new FormData(document
				.getElementById("UpdateCompany_form")); */
				//var form=$("dong").html();
				 var company_name=document.getElementById("dong").value;
				alert(form);
				
		//var st="./UpdatecompanyInfo?company_name="+ form + "&id="+ tr	;
		
		$.ajax({
			type : "post",
			url : "./UpdatecompanyInfo",
			//url:st,
		  	dataType : 'json',
			data :
			 {
			 Company_name:form,
			 id:tr,
			 },  
			processData : false,
			contentType : false,
			success : function(json) {
			
				var code = json["code"];
				if (code == '0') {
					swal({
						title : "更改 成功",
						text : "",
						type : "success"
					});
					$("#myModal6").modal("hide");
					$("#myModal6").removeData("bs.modal");
				} else {
					swal({
						title : "更改失败",
						text : "",
						type : "error"
					});
					$("#myModal6").modal("hide");
				}
				getCompanyIndex(1, 5);
			},
			beforeSend : function() {

			},
			complete : function(XMLHttpRequest, textStatus) {

			},
			error : function() {

			}
		});
	}


	
	


</script>

</html>