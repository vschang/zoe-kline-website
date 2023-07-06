import React from 'react';
import './Newsletter.css'

function FormZoe() {
  return(
      <form action="https://api.smtprelay.co/contact/add?version=2" data-id="qUHalnEMsc" method="post" id="ewf_subscriptionForm_qUHalnEMsc" class="EWF__form Inline">
        <div class="headers" style="">
        <h4 id="ewf_formheader" class="EWF__header">Subscribe to our newsletter
        </h4>
        <p id="ewf_formdesc">Enter specific and clear language on the intended use of the collected information.
        </p>
        </div>
        <fieldset style="border:none;" class="webform-custominputs">
        <div class="inputs">
        <div>
        <label for="email" class="requiredInput">Email
        </label>
        <input maxlength="81" class="form-control" name="email" size="20" type="email" required="" placeholder="Please enter your email address">
        </div>
        <div>
        <label for="field_firstname">First name
        </label>
        <input maxlength="100" class="form-control" name="field_firstname" size="20" type="text" false="" placeholder="Please enter your first name">
        </div>
        <div>
        <label for="field_lastname">Last name
        </label>
        <input maxlength="100" class="form-control" name="field_lastname" size="20" type="text" false="" placeholder="Please enter your last name">
        </div>
        </div>
        <div class="checkboxes">
        </div>
        <div class="webform-lists">
        </div>
        <div class="consent">
        </div>
        <p id="ewf_datadisclaimer">We use Elastic Email as our marketing automation service. By submitting this form, you agree that the information you provide will be transferred to Elastic Email for processing in accordance with their
        <a href="https://elasticemail.com/resources/usage-policies/terms-of-use/" target="_blank">Terms of Use</a> and
        <a href="https://elasticemail.com/resources/usage-policies/privacy-policy/" target="_blank">Privacy Policy</a>.
        </p>
        </fieldset>
        <fieldset class="webform-options style-updated" style="border:none;">
        <input type="submit" name="submit" value="Subscribe" id="eesubmit" class="EWF__subscribe">
        <input type="hidden" name="publicaccountid" value="a6974da8-d636-4cbd-a0f9-0a2ecc8218db">
        <input type="hidden" name="returnUrl" value="http://zoekline.online/">
        <input type="hidden" name="activationReturnUrl" value="">
        <input type="hidden" name="alreadyactiveurl" value="">
        <input type="hidden" name="activationTemplate" value="">
        <input type="hidden" name="source" value="WebForm">
        <input type="hidden" name="verifyemail" value="false" id="ewf_verifyEmails">
        <input type="hidden" id="ewf_captcha" name="captcha" value="false">
        <input type="hidden" name="sendActivation" value="true">
        <input type="hidden" name="notifyEmail" value="">
        <button type="button" name="dismissForm" id="ewf_dismissForm" style="display:none; position: absolute; top: 0; right: 0; float: right">X
        </button>
        </fieldset>
      </form>
   )
  }

  export default FormZoe;
