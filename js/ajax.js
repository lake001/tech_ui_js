var ajax={};
/*
ajax.AJAX = function(config,callback) {

	var xmlhttp;
	if(window.XMLHttpRequest) { xmlhttp=new XMLHttpRequest()} 
	if(window.ActiveXObject) { 
		try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}catch (e) {
		try { xmlhttp = new ActiveXObject("msxml2.XMLHTTP");}catch (x){}}}
	if(xmlhttp) {
		
		if(config.ISASYN) {
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState==4 && xmlhttp.status ==200) {
					callback(xmlhttp.responseText,xmlhttp.responseXML);}}
			
			xmlhttp.open(config.TYPE, config.URL,true);
			xmlhttp.send(config.DATA);
		}
		else {
			xmlhttp.open(config.TYPE, config.URL,false);
			xmlhttp.send(config.DATA);
			callback(xmlhttp.responseText,xmlhttp.responseXML);
		}
	}}
(function() {
	var ajaxBtn = dk.$("ajaxBtn");
	dk.addListener(ajaxBtn,"click",function() {
		ajax.AJAX({ TYPE:"GET",
			URL:"www.baidu.com",
			ISASYN:true,
			DATA:"192.168.1.11:2016/ajax.html",
		}, function(data) {
			dk.$("myajax").innerHTML = data;
		});
	});
})();
*/
