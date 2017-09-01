$(document).ready(function() {
	
/*	$('.category').hide()

	$('[type="checkbox"]').change(function() {
    	if ( $('[type="checkbox"]').prop('checked', true) ) {
    		var theId = $(this).val()
    		$("#" + theId).slideToggle()
    	}
    	else {
        	$('.category').hide()
        }
	})

	$('[type="checkbox"]').change(function() {
    	if ($('[type="checkbox"]').is(":checked")) {
        	alert("checked, unchecking");
        	$('[type="checkbox"]').prop("checked", false);
    	} else {
        	alert("unchecked, checking");
        	$('[type="checkbox"]').prop("checked", true);
    	}
    })*/
	
	$('#submit').click(function() {
		var savings = Number($("#savings").val());
		var income = Number($("#income").val());
		var expenses = Number($("#expenses").val());
		var initBudg = savings + income
		var availBudg = savings + income - expenses
		var availBudgPerc = 100 * (availBudg) / initBudg
		console.log("savings " + savings)
		console.log("income " + income)
		console.log("expenses " + expenses)
		console.log("your initial budget is now " + initBudg)
		console.log("your budget is now " + availBudg)
		$('.statBudgBar').width(availBudgPerc + '%')

		if (availBudgPerc >= 90) {
			$('.statBudgBar').css("background-color", "#b3e6b3")
		} else if (availBudgPerc >= 10) {
			$('.statBudgBar').css("background-color", "#ffa366")
		} else { 
			$('.statBudgBar').css("background-color", "#ff9999")
		}

		$('#availBudgT').text(availBudg)
		$('#availBudgPercT').text(availBudgPerc + "%")
	})
})