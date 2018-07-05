var finished = false;

$(document).ready(function(){

    // Step show event
    $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
       //alert("You are on step "+stepNumber+" now");
       if(stepPosition === 'first'){
          $("#prev-btn").addClass('disabled');
          $("#next-btn").addClass('disabled');
       }else if(stepPosition === 'final'){
           $("#next-btn").addClass('disabled');
       }else{
           $("#prev-btn").removeClass('disabled');
           $("#next-btn").removeClass('disabled');
       }
    });

    // Toolbar extra buttons
    var btnFinish = $('<button></button>').text('Finish')
                                     .addClass('btn btn-success')
                                     .on('click', function(){ displayCheckedOutCompleted(); });
    var btnCancel = $('<button></button>').text('Reset')
                                     .addClass('btn btn-dark')
                                     .on('click', function(){ $('#smartwizard').smartWizard("reset"); });


    // Smart Wizard
    $('#smartwizard').smartWizard({
            selected: 0,
            theme: 'default',
            transitionEffect:'fade',
            showStepURLhash: true,
            toolbarSettings: {toolbarPosition: 'unique',
                              toolbarButtonPosition: 'end',
                              toolbarExtraButtons: [btnFinish, btnCancel]
                            }
    });

    // Leaving step
    $("#smartwizard").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
		console.log(stepDirection)
		if(stepDirection === "forward"){
         if (parseInt(stepNumber) == 0) {
           // Validate step 1
           if (!validateStepOne()) {
            return false;
           }
         } else if (parseInt(stepNumber) == 1) {
           // Validate step 2
           if (!validateStepTwo()) {
            return false;
           }
         } else if (parseInt(stepNumber) == 2) {
           // Validate step 3
           if (!validateStepThree()) {
            return false;
           }
         } else if (parseInt(stepNumber) == 3) {
           // Validate step 4
           if (!validateStepFour()) {
            return false;
           }
			finish = true;
         }
		}
      });


    // External Button Events
    $("#reset-btn").on("click", function() {
        // Reset wizard
        $('#smartwizard').smartWizard("reset");
        return true;
    });

    $("#prev-btn").on("click", function() {
        // Navigate previous
        $('#smartwizard').smartWizard("prev");
        return true;
    });

    $("#next-btn").on("click", function() {
        // Navigate next
        $('#smartwizard').smartWizard("next");
        return true;
    });

    $("#theme_selector").on("change", function() {
        // Change theme
        $('#smartwizard').smartWizard("theme", $(this).val());
        return true;
    });

    // Set selected theme on page refresh
    $("#theme_selector").change();

    $("#validateONE").on('click', function() {
      validateStepOne();
    });

});

function toggleStatus() {

    if ($('#inlineCheckbox2').is(':checked')) {
        $('#shippingAddress :input').attr('disabled', true);
		validateStepTwo();
    } else {
        $('#shippingAddress :input').removeAttr('disabled');
		validateStepTwo();
    }
}

function validateStepOne() {
  var firstname = $("#inputFirstname").val();
  var lastname = $("#inputLastname").val();;
  var email = $("#inputEmail4").val();
  var password = $("#inputPassword4").val();
  var address = $("#inputAddress").val();
  var city = $("#inputCity").val();
  var province = document.getElementById("inputState").value;
  var zip = $("#inputZip").val();

  var success = true;

  if (firstname.length < 6 || firstname === "") {
    $("#fnameError").html("The firstname is required and must be at least 6 caracters.").addClass("text-danger");
    success = false;
  } else { $("#fnameError").html("").removeClass("text-danger"); }

  if (lastname.length < 6 || lastname === "") {
    $("#lnameError").html("The lastname is required and must be at least 6 caracters.").addClass("text-danger");
    succes = false;
  } else { $("#lnameError").html("").removeClass("text-danger"); }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!(re.test(String(email).toLowerCase())) || email === "") {
    $("#emailError").html("The email is required and must satisfied a normal email pattern (a@test.ca).").addClass("text-danger");
    success = false;
  } else { $("#emailError").html("").removeClass("text-danger");}

  if (password.length < 6 || password === "") {
    $("#passError").html("The password is required and must be at least 6 caracters.").addClass("text-danger");
    success = false;
  } else { $("#passError").html("").removeClass("text-danger"); }

  if (address.length < 6 || address === "") {
    $("#addError").html("The address is required and must be at least 6 caracters.").addClass("text-danger");
    success = false;
  } else { $("#addError").html("").removeClass("text-danger"); }

  if (city.length < 6 || city === "") {
    $("#cityError").html("The city is required and must be at least 6 caracters.").addClass("text-danger");
    success = false;
  } else { $("#cityError").html("").removeClass("text-danger"); }

  if (province <= 0) {
    $("#provError").html("The province is required.").addClass("text-danger");
    success = false;
  } else { $("#provError").html("").removeClass("text-danger"); }

  re = /^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/;
  if (!(re.test(String(zip))) || zip === "") {
    $("#zipError").html("The zip is required and must satisfy this pattern [A1B2C3].").addClass("text-danger");
    success = false;
  } else { $("#zipError").html("").removeClass("text-danger"); }

  return success;
}

function validateStepTwo() {
  var sameAS = document.getElementById("inlineCheckbox2").checked;
  var address = $("#inputAddress2").val();
  var city = $("#inputCity2").val();
  var province = document.getElementById("inputState2").value;
  var zip = $("#inputZip2").val();

  var success = true;

  if (!sameAS) {
  if (address.length < 6 || address === "") {
      $("#addError2").html("The address is required and must be at least 6 caracters.").addClass("text-danger");
      success = false;
    } else { $("#addError2").html("").removeClass("text-danger"); }

    if (city.length < 6 || city === "") {
      $("#cityError2").html("The city is required and must be at least 6 caracters.").addClass("text-danger");
      success = false;
    } else { $("#cityError2").html("").removeClass("text-danger"); }

    if (province <= 0) {
      $("#provError2").html("The province is required.").addClass("text-danger");
      success = false;
    } else { $("#provError2").html("").removeClass("text-danger"); }

    re = /^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/;
    if (!(re.test(String(zip))) || zip === "") {
      $("#zipError2").html("The zip is required and must satisfy this pattern [A1B2C3].").addClass("text-danger");
      success = false;
    } else { $("#zipError2").html("").removeClass("text-danger"); }
  }
  else{
		$("#addError2").html("").removeClass("text-danger");
		$("#cityError2").html("").removeClass("text-danger");
		$("#provError2").html("").removeClass("text-danger");
		$("#zipError2").html("").removeClass("text-danger");
  }

  return success;
}

function validateStepThree() {

  var success = true;

  if (!($("input:radio[name='options']:checked").length > 0)) {
    $("#methodError").html("The option is required. You must choose at least one method.").addClass("text-danger");
    success = false;
  } else { $("#methodError").html("").removeClass("text-danger"); }

  return success;
}

function validateStepFour() {
  var cardHolderName = $("#card-holder-name").val();
  var cardNumber = $("#card-number").val();
  var cardMonth = document.getElementById("monthChecked").value;
  var cardYear = document.getElementById("yearChecked").value;
  var cardCVV = $("#cvv").val();

  var success = true;

  if (cardHolderName.length < 6 || cardHolderName === "") {
    $("#holderError").html("The Card Holder's name is required and must be at least 6 caracters.").addClass("text-danger");
    success = false;
  } else { $("#holderError").html("").removeClass("text-danger"); }

  var re = /^[0-9]{12}$/;
  if (!(re.test(String(cardNumber)))) {
    $("#numberError").html("The Card Number is required and must be 12 numbers.").addClass("text-danger");
    succes = false;
  } else { $("#numberError").html("").removeClass("text-danger"); }

  if (cardMonth <= 0) {
    $("#monthError").html("The month is required.").addClass("text-danger");
    success = false;
  } else { $("#monthError").html("").removeClass("text-danger"); }

  if (cardYear <= 0) {
    $("#yearError").html("The year is required.").addClass("text-danger");
    success = false;
  } else { $("#yearError").html("").removeClass("text-danger"); }

  var re = /^[0-9]{3}$/;
  if (!(re.test(String(cardCVV)))) {
    $("#cvvError").html("The Security Code is required and must be 3 numbers.").addClass("text-danger");
    success = false;
  } else { $("#cvvError").html("").removeClass("text-danger"); }

  return success;
}

function alertTimeout(wait){
	setTimeout(function(){
		$('#alert_addCart').alert('close');
    window.location.href = "home.html";
    }, wait);
}

function displayCheckedOutCompleted() {
	if(finish){
	$("#alert_space_checkout").empty()
    $("#alert_space_checkout").append(`
		<div class="row">
			<div id="alert_space_checkout" class="col-md-12 text-center">
				<div id="alert_addCart" class="alert alert-success alert-dismissible fade show font-weight-bold">
				  Order successfully completed, you'll receive an email of confirmation.
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
			</div>
			</div>`);
    alertTimeout(2000);
	}
}
