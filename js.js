function clickme(elem) {
    var a = document.getElementsByTagName('button')
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('pressed');
    }
    elem.classList.add('pressed');
  
 			if (document.getElementById("imperial").classList.contains("pressed")) {
			document.getElementById("weight-measure").innerHTML = "(LBS)";
			document.getElementById("height-measure").innerHTML = "(INCHES)"
		  } else {
			document.getElementById("weight-measure").innerHTML = "(KG)";
			document.getElementById("height-measure").innerHTML = "(CM)"
		  }
		

}


function clickme2(elem2) {
    var b = document.getElementsByTagName('button')
    for (i = 0; i < b.length; i++) {
        b[i].classList.remove('pressed2')
    }
    elem2.classList.add('pressed2');
	
}

function bmiCalculator() {
	
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	
	if (document.getElementById("imperial").classList.contains("pressed")) {
		
	var  bmi = (703 * weight/Math.pow(height,2));
	
	var bmi = bmi.toFixed(2);
		
	} else {
		
	var trueHeight = height / 100;
		
	var  bmi = (weight/Math.pow(trueHeight,2));
	
	var bmi = bmi.toFixed(2);
		
	}
	
	document.getElementById("result").innerHTML = (bmi);
	
	if ( bmi < 18.5){
	
		var recom = "below"; }
	
	else if ( bmi >= 18.5 &&  bmi <= 24.9 ){
	
	   var recom = "considered";
	
	}
	
	else if ( bmi >= 25 &&  bmi <= 29.9 ){
	
	   var recom = "above";
	
	}
	
	else if ( bmi > 30 ){
	
	   var recom = "highly above";
	
	}
	
	document.getElementById("recom").innerHTML = (recom);
	
	
	if ( bmi < 18.5){
	
		document.getElementById("chart").classList.add("und"); }
	
	else if ( bmi >= 18.5 &&  bmi <= 24.9 ){
	
	   document.getElementById("chart").classList.add("norm");
	
	}
	
	else if ( bmi >= 25 &&  bmi <= 29.9 ){
	
	   document.getElementById("chart").classList.add("over");
	
	}
	
	else if ( bmi > 30 ){
	
	   document.getElementById("chart").classList.add("obese");
	
	}
		
}


var idealWeight = function() {
	
	if (document.getElementById("male").classList.contains("pressed2")) {

		if (height >= 150 && height < 155) {
			idealWeight = "48";
			
	}

document.getElementById("idealWeight").innerHTML = (idealWeight);
	
}

}

		var modal = document.getElementById("myModal");
		
		var btn = document.getElementById("myBtn");
		
		var span = document.getElementsByClassName("close")[0];
		
		btn.onclick = function() {
		  modal.style.display = "block";
		}
		
		span.onclick = function() {
		  modal.style.display = "none";
		}
		
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

