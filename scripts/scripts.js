$(document).ready(function()	{
	$("ul.main > li").click(function()	{
		$("ul.main > li").removeClass("selected");
		$(this).addClass("selected");
	});
	
	$("ul.main ul li").click(function()	{
		var source = "content/";
		source += $(this).closest("ul.sub").attr("source") + "/";
		source += $(this).attr("source");
		source += ".html";
		
		$.get(source, function( data ) {
			$("main article").html( data );
		});
		
		$("ul.sub").find(".selected").removeClass("selected");
		$(this).addClass("selected");
		
		location.hash = "#/" + $(this).closest("ul.sub").attr("source") + "/" + $(this).attr("source");
	});
	
	$("ul.main > li").click(function()	{
		var source = "content/";
		source += $(this).next("ul.sub").attr("source") + "/";
		source += "einfuehrung";
		source += ".html";
		
		$.get(source, function( data ) {
			$("main article").html( data );
		});
		
		$("ul.sub").find(".selected").removeClass("selected");
		$(this).next("ul.sub").find("li[source=einfuehrung]").addClass("selected");
		
		location.hash = "#/" + $(this).next("ul.sub").attr("source") + "/einfuehrung";
	});
		
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
		});
		
		var i = "ul.sub[\"source\"=\"" + path[1] + "\"]";
		$("ul.sub[source=" + path[1] + "]").find(".selected").removeClass("selected");
		$("ul.sub[source=" + path[1] + "]").find("[source=" + path[2] + "]").addClass("selected");

	}
	
});