function popupOpenClose(popup){if($(".wrapper").length==0){$(popup).wrapInner("<div class='wrapper'></div>");}$(popup).show();$(popup).click(function(e){if(e.target==this){if($(popup).is(':visible')){$(popup).hide();}}});$(popup).find("button[name=close]").on("click",function(){if($(".formElementError").is(':visible')){$(".formElementError").remove();}$(popup).hide();});}$(document).ready(function(){$("[data-js=open]").on("click",function(){popupOpenClose($(".popup"));});});