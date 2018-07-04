
$(document).ready(function(){

    // Step show event
    $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
       //alert("You are on step "+stepNumber+" now");
       if(stepPosition === 'first'){
           $("#prev-btn").addClass('disabled');
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
         } else if (parseInt(stepNumber) == 1) {
           // Validate step 2
         } else if (parseInt(stepNumber) == 2) {
           // Validate step 3
         } else if (parseInt(stepNumber) == 3) {
           // Validate step 4
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
});

function toggleStatus() {
    if ($('#inlineCheckbox1').is(':checked')) {
        $('#shippingAddress :input').attr('disabled', true);
    } else {
        $('#shippingAddress :input').removeAttr('disabled');
    }
}
