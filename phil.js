$(document).ready(function() {
        //first div
        //first div works, pops up Nice To Meet You
        $("#appear").click(function() {
        $("#phil").fadeIn();
        $("#phildiv").hide();
        $("#seconddiv").fadeIn();
        $("#phil2").show();
        $("#nicetomeetyou").fadeIn();
      });

        //second div

        $("#nicetomeetyou").click(function(){
          $("#seconddiv").hide();
          //one day phil hears something approaching
        $("#pillappeardiv").show();
         $("#philhears").show();
        $("#nicetomeetyou").hide();
        $("#whoisthat").fadeIn();
        
      });
      
      //$("#whoisthat").click(function(){
        //$("#pillappeardiv").show();
      // $("#seconddiv").show();
    //   $("#nicetomeetyou").show();
  //   });

      $("#whoisthat").click(function() {
        $("#phil2").hide();
        $("#pillappeardiv").hide();
        $("#appear").hide();
        $("#philhears").hide()
        $("#phil3").show();
        $("#pill").fadeIn(6000);
        $("#wordbubble").fadeIn(10000);
        $("#whoisthat").hide();
        $("#but").fadeIn(10000);


      });
  
      $("#but").click(function() {
        $("#phil3").hide();
        $("#pillappeardiv").hide();
        $("#miasma").show();
        //this was causing a big problem
        $("#pill").hide();
        $("#wordbubble").hide();
        $("#whoisthat").hide();
        $("#but").hide();
        $("#phildissolvediv").show();
        $("#phildissolve").show();
        $("#whoami").show();
      });

      //why is dissolve not working?
        $("#whoami").click(function() {
          $("#phildissolve").fadeOut("slow");
          //$("#phildissolvediv").hide();
          $("#miasma").hide();
          $("#whoami").hide();
          $("#fugue").show();
          $("#philleftdiv").show();
          $("#philleft").show();
          $("#phillooksleftbutton").fadeIn();

        });

        $("#phillooksleftbutton").click(function(){          
          //phil looking left
          $("#phillooksleftbutton").hide();
            //Phil looking right button
            $("#philleftdiv").hide();
            $("#philrightdiv").show();
            $("#philright").show();
          $("#philrightbutton").show();
        });
//phil looks right
        $("#philrightbutton").click(function(){
          $("#philrightbutton").hide();
          $("#philrightdiv").hide();
          $("#philright").hide();
          $("#philgivesup").show();
          $("#philgivesupdiv").show();
          $("#philgivesupeffect").show();
          
        });

        $("#philgivesupeffect").click(function() {
          $("#philgivesup").fadeOut(2000);
          $("#philgivesupeffect").hide();
          $("#philgivesupdiv").hide();
          $("#princessappearsdiv").show(); 
          $("#princessappears").show();
        });

        $("#helloprincesseffect").click(function() {
   //this all works
  $("#princessappearsdiv").hide(); 
          $("#princessappears").hide();
          $("#princesslooksdowndiv").show();
          $("#princesslooksdown").show();
          $("#princesslooksdownbutton").show();
        });
$("#princesslooksdownbutton").click(function(){

        $("#princesslooksdowndiv").hide();
          $("#princesslooksdown").hide();
          $("#princesslooksdownbutton").hide();
        //What's this thing on the floor//                        
        $("#princesstakespilldiv").show();
        $("#takepillid").show();
          $("#princesstakespill").fadeIn(2000);
          $("#princesstakespillbutton").show();

});

$("#princesstakespillbutton").click(function(){
          $("#princesstakespilldiv").hide();
          $("#takepillid").hide();
          $("#princesstakespill").hide();
          $("#princesstakespillbutton").hide();
           $("#princesspartiesdiv").show();
          $("#princessparties").fadeIn(2000);
          $("#princesspartiesid").show();
        });

     //   $("#princesstakespillbutton").click(function() {
       //   $("#princesstakespill").hide();
         // $("#princessappears").hide();
          //$("#princesseats").fadeIn();
        //});

        //$("#princesseatseffect").click(function() {
          //$("#princesseats").fadeIn();
          //$("#princesseats").rotate();
        //});
        //$("#eatphil").click(function() {
          //$("#princessparty").show();
       // });
      });