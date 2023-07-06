import React from 'react';
import './Newsletter.css'

function Form() {
  return(
    <form action="https://api.smtprelay.co/contact/add?version=2"
      // data-id="iFLPQLZpZv"
      data-id="qUHalnEMsc"
      method="post"
      // id="ewf_subscriptionForm_iFLPQLZpZv"
      id="ewf_subscriptionForm_qUHalnEMsc"
      className="EWF__form Inline">
      <div className="headers">
      <h1 id="ewf_formheader" className="white-text">Subscribe to my newsletter</h1>
      <p id="ewf_formdesc" className="white-text mt-20">Sign up to receive news and updates</p>
      </div>
      <div className="Form-inputs-container">
        <fieldset className="webform-custominputs">
        <div className="inputs">
          <input maxLength="100" className="form-control" name="field_firstname" size="20" type="text" false="" placeholder="First name"></input>
          <input maxLength="100" className="form-control" name="field_lastname" size="20" type="text" false="" placeholder="Last name"></input>
          <input maxLength="81" className="form-control" name="email" size="20" type="email" required="" placeholder="Email address"></input>
        </div>
        <div className="checkboxes">
        </div>
        <div className="webform-lists">
        </div>
        <div className="consent">
        </div>
        <p id="ewf_datadisclaimer">By signing up I agree to Elastic Mail's&nbsp;
          <a href="https://elasticemail.com/resources/usage-policies/terms-of-use/" target="_blank" rel="noreferrer">Terms of Use</a> and&nbsp;
          <a href="https://elasticemail.com/resources/usage-policies/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>.
        </p>
        </fieldset>
        {/* <fieldset className="webform-options style-updated">
          <input type="submit" name="submit" value="Sign up" id="eesubmit" className="Button"></input>
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
        </fieldset> */}
        <fieldset class="webform-options style-updated">
          <input type="submit" name="submit" value="Sign up" id="eesubmit" className="Button"></input>
          <input type="hidden" name="publicaccountid" value="a6974da8-d636-4cbd-a0f9-0a2ecc8218db"></input>
          <input type="hidden" name="returnUrl" value="http://zoekline.online/"></input>
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
      <div id="ewf_style" className="Inline">
      </div>
    </form>
  )
}

export default Form;
