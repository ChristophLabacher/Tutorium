$(document).ready(function()	{
	// Click on a topic leads to the topic
	$("ul.main ul li").click(function()	{
		if ($(this).attr("source"))	{
			var source = "content/";
			source += $(this).closest("ul.sub").attr("source") + "/";
			source += $(this).attr("source");
			source += ".html";
			
			$.get(source, function( data ) {
				$("main article").html( data );
				lineNumbers();
			});
			
			$("ul.sub").find(".selected").removeClass("selected");
			$(this).addClass("selected");
			
			location.hash = "#/" + $(this).closest("ul.sub").attr("source") + "/" + $(this).attr("source");
		}
	});
	
	// Click on category leads to its introduction
	$("ul.main > li").click(function()	{
		$("ul.main > li").removeClass("selected");
		$(this).addClass("selected");
		
		var source = "content/";
		source += $(this).next("ul.sub").attr("source") + "/";
		source += "einfuehrung";
		source += ".html";
		
		$.get(source, function( data ) {
			$("main article").html( data );
			lineNumbers();
		});
		
		$("ul.sub").find(".selected").removeClass("selected");
		$(this).next("ul.sub").find("li[source=einfuehrung]").addClass("selected");
		
		location.hash = "#/" + $(this).next("ul.sub").attr("source") + "/einfuehrung";
	});
		
	// Root is meta/introduction else URL-Routing
	if (location.hash == "")	{
		location.hash = "#/meta/einfuehrung";	
	
		$.get("content/meta/einfuehrung.html", function( data ) {
			$("main article").html( data );
		});
	} else	{
		var path = location.hash.split("/");
		var source = "content/";
		source += path[1] + "/";
		source += path[2];
		source += ".html";
		
		$.get(source, function( data ) {
			$("main article").html( data );
			lineNumbers();
		});
		
		$("ul.main li").removeClass("selected");
		$("ul.sub[source=" + path[1] + "]").prev("li").addClass("selected");
		var i = "ul.sub[\"source\"=\"" + path[1] + "\"]";
		$("ul.sub[source=" + path[1] + "]").find(".selected").removeClass("selected");
		$("ul.sub[source=" + path[1] + "]").find("[source=" + path[2] + "]").addClass("selected");
	}
	

	
});

function lineNumbers()	{
	$("code pre").each(function(){
	     var lines = $(this).html().split(/\n/).length;
	
	     for (i = 0; i < lines; i++)	{
	    	 $(this).closest(".code-snippet").find(".lines").append(i+1 + "<br>");
	     }
	});
	
	$(".code-snippet").each(function(){
	    var height = $(this).outerHeight() - $(this).find("cite").height();
	    $(this).children(".lines").outerHeight(height);
	  	$(this).children("code").outerHeight(height);
	   	$(this).children(".result").outerHeight(height);
	    
	});	
}