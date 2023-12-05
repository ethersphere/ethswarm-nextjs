import React from "react";

type NewsletterProps = {};

const Newsletter: React.FC<NewsletterProps> = () => {
  return (
    <div
      id="mauticform_wrapper_websitenewslettersubscription"
      className="mt-4 mauticform_wrapper"
    >
      <form
        autoComplete="false"
        role="form"
        method="post"
        action="https://mautic.int.ethswarm.org/form/submit?formId=4"
        id="mauticform_websitenewslettersubscription"
        data-mautic-form="websitenewslettersubscription"
        encType="multipart/form-data"
      >
        <div
          className="mauticform-error"
          id="mauticform_websitenewslettersubscription_error"
        ></div>
        <div
          className="mauticform-message"
          id="mauticform_websitenewslettersubscription_message"
        ></div>
        <div className="mauticform-innerform">
          <div
            className="flex flex-wrap items-start justify-center w-full gap-4 mauticform-page-wrapper mauticform-page-1 lg:flex-nowrap"
            data-mautic-form-page="1"
          >
            <div
              id="mauticform_websitenewslettersubscription_email_address"
              className="flex-grow mauticform-row mauticform-email mauticform-field-1"
            >
              <label className="sr-only" htmlFor="email">
                Enter your email address
              </label>
              <input
                id="mauticform_input_websitenewslettersubscription_email_address"
                name="mauticform[email_address]"
                className="w-full text-[#F6F7F9] rounded-full duration-100 bg-white bg-opacity-10 border-none focus:ring-1 focus:ring-gray-300 placeholder-[#F6F7F9]  px-8 py-3 text-lg"
                type="email"
                required={true}
                placeholder={"Enter your email address"}
              />

              <div className="mt-4 text-[10px] text-[#F6F7F9] text-opacity-50">
                By clicking on Subscribe you consent to usage of your given
                e-mail address for receiving communication and news about the
                Swarm project. Data will be controlled and processed by Swarm
                Foundation.
              </div>
            </div>

            <button
              type="submit"
              name="mauticform[submit]"
              id="mauticform_input_websitenewslettersubscription_submit"
              value=""
              className="flex-shrink-0 px-4 py-3 text-sm font-semibold bg-white rounded-full focus:outline-none bg-opacity-10"
            >
              {`->`}
            </button>
          </div>
        </div>

        <input
          type="hidden"
          name="mauticform[formId]"
          id="mauticform_websitenewslettersubscription_id"
          value="4"
        />
        <input
          type="hidden"
          name="mauticform[return]"
          id="mauticform_websitenewslettersubscription_return"
          value=""
        />
        <input
          type="hidden"
          name="mauticform[formName]"
          id="mauticform_websitenewslettersubscription_name"
          value="websitenewslettersubscription"
        />
        <input
          name="mauticform[gdpr_accepted]"
          id="mauticform_radiogrp_radio_gdpr_accepted_Yes0"
          type="hidden"
          value="1"
        />
        <input
          name="mauticform[i_consent_to_gathering_an]"
          id="mauticform_radiogrp_radio_i_consent_to_gathering_an_Yes0"
          type="hidden"
          value="1"
        />
      </form>
    </div>
  );
};

export default Newsletter;
