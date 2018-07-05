
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
                                     .on('click', function(){ window.location.href = "home.html"; });
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
         if (parseInt(stepNumber) == 0) {
           // Validate step 1
           if (!validateStepOne())
            return false;
           return true;
         } else if (parseInt(stepNumber) == 1) {
           // Validate step 2
           alert("Step 2 DONE.");
         } else if (parseInt(stepNumber) == 2) {
           // Validate step 3
           alert("Step 3 DONE.");
         } else if (parseInt(stepNumber) == 3) {
           // Validate step 4
           alert("Step 4 DONE.");
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
    if ($('#inlineCheckbox1').is(':checked')) {
        $('#shippingAddress :input').attr('disabled', true);
    } else {
        $('#shippingAddress :input').removeAttr('disabled');
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
  } else { $("#fnameError").html("").removeClass("text-danger"); success = true; }

  if (lastname.length < 6 || lastname === "") {
    $("#lnameError").html("The lastname is required and must be at least 6 caracters.").addClass("text-danger");
    succes = false;
  } else { $("#lnameError").html("").removeClass("text-danger"); }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!(re.test(String(email).toLowerCase())) || email === "") {
    $("#emailError").html("The email is required and must satisfied a normal email pattern (a@test.ca).").addClass("text-danger");
    success = false;
  } else { $("#emailError").html("").removeClass("text-danger"); success = true; }

  if (password.length < 6 || password === "") {
    $("#passError").html("The password is required and must be at least 6 caracters.").addClass("text-danger");
    success = false;
  } else { $("#passError").html("").removeClass("text-danger"); success = true; }

  if (address.length < 6 || address === "") {
    $("#addError").html("The address is required and must be at least 6 caracters.").addClass("text-danger");
    success = false;
  } else { $("#addError").html("").removeClass("text-danger"); success = true; }

  if (city.length < 6 || city === "") {
    $("#cityError").html("The city is required and must be at least 6 caracters.").addClass("text-danger");
    success = false;
  } else { $("#cityError").html("").removeClass("text-danger"); success = true; }

  if (province <= 0) {
    $("#provError").html("The province is required.").addClass("text-danger");
    success = false;
  } else { $("#provError").html("").removeClass("text-danger"); success = true; }

  re = /^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/;
  if (!(re.test(String(zip))) || zip === "") {
    $("#zipError").html("The zip is required and must satisfy this pattern [A1B2C3].").addClass("text-danger");
    success = false;
  } else { $("#zipError").html("").removeClass("text-danger"); success = true; }

  if (!success) {
    window.location.href = "checkout.html#step-1";
  }
}
