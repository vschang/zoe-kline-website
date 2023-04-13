import React from 'react';
import './Newsletter.css'

function Form() {
  return(
    <form action="https://api.smtprelay.co/contact/add?version=2" data-id="iFLPQLZpZv" method="post" id="ewf_subscriptionForm_iFLPQLZpZv" className="EWF__form Inline">
      <div class="headers">
      <h1 id="ewf_formheader" className="white-text">Subscribe to my newsletter</h1>
      <p id="ewf_formdesc" className="white-text mt-20">Sign up to receive news and updates</p>
      </div>
      <div class="Form-inputs-container">
        <fieldset class="webform-custominputs">
        <div class="inputs">
          <input maxlength="100" class="form-control" name="field_firstname" size="20" type="text" false="" placeholder="First name"></input>
          <input maxlength="100" class="form-control" name="field_lastname" size="20" type="text" false="" placeholder="Last name"></input>
          <input maxlength="81" class="form-control" name="email" size="20" type="email" required="" placeholder="Email address"></input>
        </div>
        <div class="checkboxes">
        </div>
        <div class="webform-lists">
        </div>
        <div class="consent">
        </div>
        <p id="ewf_datadisclaimer">By signing up I agree to Elastic Mail's&nbsp;
          <a href="https://elasticemail.com/resources/usage-policies/terms-of-use/" target="_blank" rel="noreferrer">Terms of Use</a> and&nbsp;
          <a href="https://elasticemail.com/resources/usage-policies/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>.
        </p>
        </fieldset>
        <fieldset class="webform-options style-updated">
          <input type="submit" name="submit" value="Sign up" id="eesubmit" class="Button"></input>
          <input type="hidden" name="publicaccountid" value="8a925a47-504f-442e-a1c1-555b0ac48a83"></input>
          <input type="hidden" name="returnUrl" value=""></input>
          <input type="hidden" name="activationReturnUrl" value=""></input>
          <input type="hidden" name="alreadyactiveurl" value=""></input>
          <input type="hidden" name="activationTemplate" value=""></input>
          <input type="hidden" name="source" value="WebForm"></input>
          <input type="hidden" name="verifyemail" value="false" id="ewf_verifyEmails"></input>
          <input type="hidden" id="ewf_captcha" name="captcha" value="false"></input>
          <input type="hidden" name="sendActivation" value="true"></input>
          <input type="hidden" name="notifyEmail" value=""></input>
        </fieldset>
      </div>
      <div id="ewf_style" class="Inline">
      </div>
    </form>
  )
}

export default Form;
