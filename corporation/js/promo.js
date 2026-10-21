
$( document ).ready(function() {
	$(".click-to-events").click(function()
	{
		promoPage.scrolleaTo("events");
	});

	$(".click-to-appmanagevent").click(function()
	{
		window.location.href = "http://appmanagevent.com/";
	});

	$( "#sendApplyNowBtn" ).click(function( event ) {
    	registerForm.sendForm('applyNowForm','showApplyNowForm');
    	event.preventDefault();
  	});

  $(".showApplyNowForm").click(function(){
  		$("#applyNowForm").slideDown(600);
  		$(this).hide();
  		promoPage.scrolleaTo("applyNowForm");
  });

	$("#signUpBtn").click(function( event ) {
    	registerForm.sendForm('signUpForm','showsignUpForm');
    //	event.preventDefault();
  	});

  $(".showsignUpForm").click(function(){
  		$("#signUpForm").slideDown(600);
  		$(this).hide();
  		promoPage.scrolleaTo("signUpForm");
  });

  $("#sendApplyCancelBtn").click(function(){
  		$("#applyNowForm").slideUp(600);
  		$(".showApplyNowForm").show();
  });

  $("#signUpCancelBtn").click(function(){
  		$("#signUpForm").slideUp(600);
  		$(".showsignUpForm").show();
  });

 	$(".showBetaSignup").click(function () {
      $("#BetaSignup").slideDown(600);
      $(this).hide();
      promoPage.scrolleaTo("BetaSignup");
 	});

 	$("#BetaSignupCancelBtn").click(function () {
      $("#BetaSignup").slideUp(600);
      $(".showBetaSignup").show();
 	});

  $("#BetaSignUpBtn").click(function( event ) {
      registerForm.sendForm('BetaSignup','Register for Beta');
      event.preventDefault();
  });
  $("#subscribeBtn").click(function () {
      var emailFrom = $(".subscribetextbox").val();
      console.log(emailFrom);
      emailProvider.sendSubscriptionEmail(emailFrom);
      $(this).parent().parent().append('Thank you! We have sent you a confirmation email.');
      $(this).parent().hide();
  });
  
});

var promoPage = {
	scrolleaTo : function(elemId)
	{
    	$('html, body').animate({
        	scrollTop: $("#"+elemId).offset().top - 75
    	}, 1000);
	},

	showSuccessMsg : function(msg)
	{
		$("#events").append('<div class="alert alert-success alert-dismissible alert-messages" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Thank you!</strong> '+msg+'</div>');
		setTimeout(function(){
			$(".alert-messages")[0].remove();
		}, 5000);
	}
};

var registerForm = {
  validate : function(formId)
  {
    valid = registerForm.checkFieldRequiredById('firstNameTb',formId);
    valid &= registerForm.checkFieldRequiredById('lastNameTb',formId);
    valid &= registerForm.checkFieldRequiredById('companyTb',formId);
    valid &= registerForm.checkFieldRequiredById('jobTitleTb',formId);
    valid &= registerForm.checkFieldRequiredById('emailTb',formId);
    return valid;
  },
  
  checkFieldRequiredById : function(id,formId)
  {
    var elem = $('#'+formId).find('#'+id);
    if ((elem.val()) && (elem.val() != ""))
    {
      elem.parent().removeClass('has-error').addClass('has-success');
      return true;
    }
    elem.parent().addClass('has-error').removeClass('has-success');
    return false;
  },
  
  sendForm : function(formId,buttonClass)
  {
    if (registerForm.validate(formId))
    {
      $('#'+formId).find("#requiredMessage").hide(); 
      registerForm.clearFields(formId);
      
      var firstname = registerForm.getField('firstNameTb',formId);
      var lastname = registerForm.getField('lastNameTb',formId);
      var company = registerForm.getField('companyTb',formId);
      var jobtitle = registerForm.getField('jobTitleTb',formId);
      var email = registerForm.getField('emailTb',formId);
      
	    if (formId == 'BetaSignup')
      {
        emailProvider.sendRegistrationBetaEmail(email,firstname,lastname,company,jobtitle);
      }else{
        emailProvider.sendRegistrationEmail(email,firstname,lastname,company,jobtitle);
      }
      
      $('.'+buttonClass).show(); 
      $('#'+formId).hide();       
    }
    else
    {
      $('#'+formId).find("#requiredMessage").show();  
    }
  },

  clearFields : function(formId)
  {
    registerForm.clearField('firstNameTb',formId);
    registerForm.clearField('lastNameTb',formId);
    registerForm.clearField('companyTb',formId);
    registerForm.clearField('jobTitleTb',formId);
    registerForm.clearField('emailTb',formId);
  },

  clearField: function (id,formId)
  {
  	var elem = $('#'+formId).find('#'+id);
  	elem.removeAttr('value');
  },

  getField: function (id,formId)
  {
  	var elem = $('#'+formId).find('#'+id);
  	return elem.val();
  }
};

var emailProvider = {
	sendEmail : function (emailFrom,emailTo,subject,body)
	{
		$.ajax({
		  type: "POST",
		  url: "https://mandrillapp.com/api/1.0/messages/send.json",
		  data: {
		    'key': 'REPLACE_WITH_YOUR_VALUE',
		    'message': {
		      'from_email': emailFrom,
		      'to': [
		          {
		            'email': emailTo,
		            'name': 'Qompat',
		            'type': 'to'
		          }
		        ],
		      'autotext': 'true',
		      'subject': subject,
		      'html': body
		    }
		  }
		 }).done(function (){
		 	promoPage.showSuccessMsg('You will receive an email confirmation shortly.');
		 });
	},

  sendRegistrationEmail : function (emailFrom,firstname,lastname,company,jobtitle)
  {
    var body = firstname + ' ' +lastname +' is a ' + jobtitle + ' in a company called ' + company;
    emailProvider.sendEmail(emailFrom,'user@example.invalid','Register for Beta',body);
  },

  sendRegistrationBetaEmail : function (emailFrom,firstname,lastname,company,jobtitle)
  {
    var body = firstname + ' ' +lastname +' is a ' + jobtitle + ' in a company called ' + company;
    emailProvider.sendEmail(emailFrom,'user@example.invalid','Register',body);
  },

  sendSubscriptionEmail : function (emailFrom)
  {
    emailProvider.sendEmail(emailFrom,'user@example.invalid','Subscribe to Newsletter','I would like to be subscribed to your Newsletter');
  }
};