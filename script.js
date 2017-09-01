$(document).ready(function() {
	
	$('.category').hide()

	$('[type="checkbox"]').change(function() {
    	// if ( $('[type="checkbox"]').prop('checked', true) ) {
    		var theId = $(this).val()
    		$("#" + theId).slideToggle()
    	/*}
    	else {
        	$('.category').hide()
        }*/
	})

/*	$('[type="checkbox"]').change(function() {
    	if ($('[type="checkbox"]').is(":checked")) {
        	alert("checked, unchecking");
        	$('[type="checkbox"]').prop("checked", false);
    	} else {
        	alert("unchecked, checking");
        	$('[type="checkbox"]').prop("checked", true);
    	}
    })*/

	$('#submit').click(function() {
		var initialBudget = Number($("#initialBudget").val());
		var expenses = Number($("#expenses").val());
		var remainingBudget = initialBudget - expenses
		var remainingBudgetPerc = 100 * (initialBudget - expenses) / initialBudget
		console.log("your budget is now " + remainingBudget)
		$('.statusBudget').width(remainingBudgetPerc + '%')
	})

	

	/*$("#submit").click(function() {
		var spent = $("#spent").val()
		var available = $("#available").val()
	})*/



})