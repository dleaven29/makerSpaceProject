  
	  var competition=document.querySelector("#hackathon");
     competition.addEventListener("mouseover",insertWoman,false);
     competition.addEventListener("mouseout",exitMan,false);
    function insertWoman(){
	document.querySelector("#hackathon").src="./resources/images/hackathonWoman.jpg";
    }

    function exitMan(){
	document.querySelector("#hackathon").src="./resources/images/hackathonMan.png";
    }

   var security=document.querySelector("#cyber");
   security.addEventListener("mouseover",defense,false);
   security.addEventListener("mouseout",cyberTopics,false)

   function defense(){
	document.querySelector("#cyber").src="./resources/images/captureTheFlag2.jpg";
   }

  function cyberTopics(){
	document.querySelector("#cyber").src="./resources/images/captureTheFlag1.png";
  }
