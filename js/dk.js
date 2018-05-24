var dk={};
dk.$=function(id){return document.getElementById(id)}
dk.addListener = function(target,type,handler) {
	if(target.addEventListener) { target.addEventListener(type,handler,false);}else {
	if(target.attachEvent) { target.attchEvent("on"+type,handler);} else {
		target["on"+type]=handler;
	}}}

