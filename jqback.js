$(document).ready(function(){

   $('#medium').on('click',function(){
      alert("PORTION LEFT OUT FOR YOU")
   
})

$('#hard').on('click',function(){
   alert("PORTION LEFT OUT FOR YOU")

})

   //start button here
   $('#start').click(function(){

    $('#cont').toggle();
    $('#num1').toggle();
    
   })

//back button in qtn 1
   $('#qtn1back').click(function(){
      $('#num1').toggle();
      $('#cont').toggle();
      $('#start').text('RESUME');
   })
      
//declaring variable for points gained   
   var points=$('#points').text();
    
//go next button in qtn1 
   $('#onebottombtn').click(function(){
     
      //validaing answer
      var at1=$('#attemp1').is(':checked');
      var at2=$('#attemp2').is(':checked');
      var at3=$('#attemp3').is(':checked');
      var at4=$('#attemp4').is(':checked');

      if((at1==true && (at2==true||at3==true||at4==true))
         ||(at2==true && (at1==true||at3==true||at4==true))
         ||(at3==true && (at1==true||at2==true||at4==true))
         ||(at4==true && (at1==true||at3==true||at2==true))
      ){
         
         $('#alert').show();

      }
      else if((at2==true && (at1==false||at3==false||at4==false))
         ||(at3==true && (at1==false||at2==false||at4==false))
         ||(at4==true && (at1==false||at3==false||at2==false))
         ||(at1==true && (at1==false||at2==false||at4==false))
      ){

         if(at2==true && (at1==false||at3==false||at4==false)){
            points++;           
         $(".points").text(points);
         }
         
      //putting stuff for qtn 2
      $('#qtnnum').text('2.')
      $("#qtn").text("Cattle have ---- stomachs?");
      
      $('#option1').attr('value','7')
      $('#option2').attr('value','6')
      $('#option3').attr('value','1')
      $('#option4').attr('value','4')

      $('#attemp2').prop('checked',false)

      $("#onebottombtn").remove();
      var secondbtn=$("<div id='twobottombtn' class='btn'><b> GO NEXT</b></div>")
      $('#next_btn').html(secondbtn);   
      }

// validatiionn for qtn two
      $('#twobottombtn').click(function(){
     
         //validaing answer
         var at1=$('#attemp1').is(':checked');
         var at2=$('#attemp2').is(':checked');
         var at3=$('#attemp3').is(':checked');
         var at4=$('#attemp4').is(':checked');
   
         if((at1==true && (at2==true||at3==true||at4==true))
            ||(at2==true && (at1==true||at3==true||at4==true))
            ||(at3==true && (at1==true||at2==true||at4==true))
            ||(at4==true && (at1==true||at3==true||at2==true))
         ){
            
            $('#alert').show();
   
         }
         else if((at2==true && (at1==false||at3==false||at4==false))
            ||(at3==true && (at1==false||at2==false||at4==false))
            ||(at4==true && (at1==false||at3==false||at2==false))
            ||(at1==true && (at1==false||at2==false||at4==false))
         ){
   
            if(at4==true && (at1==false||at3==false||at2==false)){
               points++;           
            $(".points").text(points);
            }
            
         //putting stuff for qtn 3
         $('#qtnnum').text('3.')
         $("#qtn").text("Wives of Solomon were..?");
         
         $('#option1').attr('value','100')
         $('#option2').attr('value','200')
         $('#option3').attr('value','2')
         $('#option4').attr('value','700')
   
         $('#attemp4').prop('checked',false)
   
         $("#twobottombtn").remove();
         var thirdbtn=$("<div id='threebottombtn' class='btn'><b> GO NEXT</b></div>")
         $('#next_btn').html(thirdbtn);   
   
            
        $('#threebottombtn').click(function(){

            alert("wozopedzisa add your other things\n Your points are :" + points)

        })
            }

         })
      
      
                     
   } ) 

   
});