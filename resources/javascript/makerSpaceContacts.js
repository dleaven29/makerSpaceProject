 
	  //makerspace
	    var education=document.querySelector("#school");
       education.addEventListener("mousedown",myLogo,false);
       education.addEventListener("mouseup",showSchool,false);
       function myLogo(){
       document.querySelector("#school").src="./resources/images/makerSpaceLogo1.png";
       }
	   function showSchool(){
	     document.querySelector("#school").src="./resources/images/ATCBuilding.jpg";
	   }
	   //cyber club 
	   var learning=document.querySelector("#school2");
	   learning.addEventListener("click",myLogo2,false);
	   learning.addEventListener("dblclick",displaySchool,false);
	   
	   function myLogo2(){
	     document.querySelector("#school2").src="./resources/images/makerSpaceLogo1.png";
		 
	   }
	   function displaySchool(){
	      document.querySelector("#school2").src="./resources/images/ATCBuilding.jpg";
	   }
	   
	   //coding club
        var coding=document.querySelector("#programming");
		coding.addEventListener("mouseover",startCoding,false);
		coding.addEventListener("mouseout",endCoding,false);
		
		function startCoding(){
		  document.querySelector("#programming").src="./resources/images/codingClub.jpg";
		}
		function endCoding(){
		  document.querySelector("#programming").src="./resources/images/Lynnhaven.jpg";
		}
		
		//computer club
		var computer=document.querySelector("#repair");
		computer.addEventListener("mouseover",computerFix,false);
		computer.addEventListener("mouseout",computerCheck,false);
		
		function computerFix(){
		  document.querySelector("#repair").src="./resources/images/computerClub.jpg";
		}
		function computerCheck(){
		  document.querySelector("#repair").src="./resources/images/Lynnhaven.jpg";
		}
	 