$(document).ready(function() {
  var myCodeMirror = CodeMirror.fromTextArea(input);
  myCodeMirror.setSize(1700, 500);
  
  $('#parse').click(function() {
		var value = myCodeMirror.getValue();
        $.get("/parse",
          { data: value },
          function (data) {
			if(data.status == 1) {
				$("#output").html('<textarea rows="30" cols="300" style="resize: none;">' + JSON.stringify(data.result, undefined, 2) + '</textarea><br><br><br><br>'); 
			} else {
				$("#output").html('<div class="error"><pre>Error at line ' + data.result.location.start.line + ' column ' + data.result.location.start.column + '. Message: ' + data.result.message + '\n</pre></div>'); 
			}  		   
          },
          'json'
        );
  });

  $("#examples").change(function(ev) {
    var f = ev.target.files[0]; 
    var r = new FileReader();
    r.onload = function(e) { 
      var contents = e.target.result;
      
      myCodeMirror.setValue(contents);
    }
    r.readAsText(f);
  });

});

  
