import { FC } from 'react'
import Script from 'next/script'

interface NewsletterProps {}

const Newsletter: FC<NewsletterProps> = () => {
  return (
    <>
      <Script
        id="mauticform-script-websitenewslettersubscription"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              if (typeof MauticSDKLoaded == 'undefined') {
                  var MauticSDKLoaded = true;
                  var head            = document.getElementsByTagName('head')[0];
                  var script          = document.createElement('script');
                  script.type         = 'text/javascript';
                  script.src          = 'https://mautic.int.ethswarm.org/index.php/media/js/mautic-form.js';
                  script.onload       = function() {
                      MauticSDK.onLoad();
                  };
                  head.appendChild(script);
                  var MauticDomain = 'https://mautic.int.ethswarm.org/index.php';
                  var MauticLang   = {
                      'submittingMessage': "Please wait..."
                  }
              } else if (typeof MauticSDK != 'undefined') {
                  MauticSDK.onLoad();
              }
            }
          `,
        }}
      />
      <div id="mauticform_wrapper_websitenewslettersubscription" className="mauticform_wrapper">
        <form
          autoComplete="false"
          role="form"
          method="post"
          action="https://mautic.int.ethswarm.org/index.php/form/submit?formId=4"
          id="mauticform_websitenewslettersubscription"
          data-mautic-form="websitenewslettersubscription"
          encType="multipart/form-data"
        >
          <div className="mauticform-innerform">
            {/* These divs are required for Mautic to show success/error messages */}
            <div className="mauticform-error" id="mauticform_websitenewslettersubscription_error"></div>
            <div className="mauticform-message" id="mauticform_websitenewslettersubscription_message"></div>

            <div className="mauticform-page-wrapper mautic-page-1" data-mautic-form-page="1">
              <div
                id="mauticform_websitenewslettersubscription_email_address"
                className="mauticform-row mauticform-email mauticform-field-1"
              >
                <label className="sr-only" htmlFor="mauticform_input_websitenewslettersubscription_email_address">
                  Enter your email address
                </label>
                
                <div className="flex items-center bg-[#2D3843] rounded-full p-1">
                  <input
                    id="mauticform_input_websitenewslettersubscription_email_address"
                    name="mauticform[email_address]"
                    placeholder="Enter your email address"
                    className="flex-grow bg-transparent text-white placeholder-gray-400 px-4 py-2 focus:outline-none"
                    type="email"
                    required
                  />
                  <button
                    type="submit"
                    name="mauticform[submit]"
                    id="mauticform_input_websitenewslettersubscription_submit"
                    value="Submit"
                    className="bg-[#F6F7F9] text-black rounded-full p-2 hover:bg-gray-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
                 <div className="mt-4 text-[10px] text-[#F6F7F9] text-opacity-50">
                   By clicking on Subscribe you consent to usage of your given
                   e-mail address for receiving communication and news about the
                   Swarm project. Data will be controlled and processed by Swarm
                   Foundation.
                 </div>
              </div>
            </div>
          </div>

          {/* These hidden fields are required by Mautic for the form to submit correctly */}
          <input type="hidden" name="mauticform[formId]" id="mauticform_websitenewslettersubscription_id" value="4" />
          <input type="hidden" name="mauticform[return]" id="mauticform_websitenewslettersubscription_return" value="" />
          <input type="hidden" name="mauticform[formName]" id="mauticform_websitenewslettersubscription_name" value="websitenewslettersubscription" />
          <input name="mauticform[gdpr_accepted]" id="mauticform_radiogrp_radio_gdpr_accepted_Yes0" type="hidden" value="1" />
          <input name="mauticform[i_consent_to_gathering_an]" id="mauticform_radiogrp_radio_i_consent_to_gathering_an_Yes0" type="hidden" value="1" />
        </form>
      </div>
    </>
  )
}

export default Newsletter

