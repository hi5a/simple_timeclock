
 var start=getTime();
 var start2=getTime();
onEvent("button3", "click", function( ) {
	setScreen("screen2");
});
onEvent("button8", "click", function( ) {
	setScreen("screen1");
});
onEvent("button4", "click", function( ) {
var text={};
  text.name = getText("text_input3");
	createRecord("users", text, function(record) {
	  
	});
});

onEvent("button2", "click", function( ) {
	setScreen("screen3");
});
 
onEvent("button1", "click", function( ) {
	var text2={};
	 text2.name = getText("text_input1");
	console.log("button1 clicked!");
	readRecords("users", {}, function(records) {
	  for (var i =0; i < records.length; i++) {
	    console.log(records[i].id + ': ' + records[i].name);
	    if (text2.name == records[i].name) {
	  setScreen("screen4");
	}
	  }
	});
	

});
var stop2=getTime();
onEvent("button5", "click", function( ) {
	setScreen("screen5");
	
		
});
onEvent("button6", "click", function( ) {
	var stop=getTime();
	setScreen("screen6");
	console.log(stop2-start2);
	setText("text_area3", stop-start);
	
	console.log(stop-start);
});
onEvent("button7", "click", function( ) {
	console.log("button7 clicked!");
	setScreen("screen1");
});
