$(document).ready(function() {
  $("#lovelabel").hide();
  $("#loveparagraph").hide();
  $("#addbutton").click(function() {
    var number1 = $("#num1").val();
    var number2 = $("#num2").val();
    var addresult= parseInt(number1) + parseInt(number2);
    $("#result").val(addresult);
  });
  $("#clearbutton").click(function() {
    $("#num1").val("");
    $("#num2").val("");
    $("#result").val("");
  });
  $("#costbutton").click(function() {
    var result= $("#beverage").val();
    console.log(result);
    var currency = $("input:radio[name=currency]:checked").val();
    if($("#beverage").val()=="Coffee" && currency=="dollars")
     {
  //alert("A coffee = 3.35$");
  $("#lovelabel").show();
  $("#loveparagraph").show();
     }
     if(result=="Tea" && currency=="dollars")
     {
       alert("A Tea = 3.10$");
     }
     if($("#beverage").val()=="Coffee" && currency=="rupees")
      {
        var converttorupees = 3.35*68;
        //alert("A coffee = Rs." + converttorupees);
        $("#lovelabel").fadeIn();
        $("#loveparagraph").text("A coffee = Rs." + converttorupees);
        $("#loveparagraph").fadeIn();

      }
      if(result=="Tea" && currency=="rupees")
      {
        var converttorupees = 3.10*68;
   alert("A Tea =" + converttorupees);

      }
  });
});
