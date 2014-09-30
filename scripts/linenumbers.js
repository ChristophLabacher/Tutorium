$(document).ready(function(){
	$("code pre").each(function(){
	     var lines = $(this).html().split(/\n/).length;
	
	     for (i = 0; i < lines; i++)	{
	    	 $(this).parent().parent().find(".lines").append(i+1 + "<br>");
	     }
	});
	
	$(".code-snippet").each(function(){
	    var height = $(this).height() - $(this).find("cite").height();
	    $(this).find(".lines").outerHeight(height);
	  	$(this).find("code").outerHeight(height);
	   	$(this).find(".result").outerHeight(height);
	    
	});
});