import React from "react";
import { ArrowIcon } from "@/icons/components/index";

type NewsletterProps = {};

const Newsletter: React.FC<NewsletterProps> = () => {
  return (
    <div
      id="mauticform_wrapper_websitenewslettersubscription"
      className="mauticform_wrapper"
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
                className="w-full text-gray-300 duration-100 bg-gray-800 border-none focus:ring-1 focus:ring-gray-300 placeholder-gray-275 font-display px-4 py-2.5 text-lg"
                type="email"
                required={true}
                placeholder={"Enter your email address"}
              />

              <div className="px-4 mt-5 text-xs tracking-wider text-gray-275 font-display text-opacity-70">
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
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-lg font-semibold tracking-wider uppercase transition duration-200 hover:bg-opacity-80 font-display group focus:outline-none focus:ring-4 focus:ring-opacity-50"
            >
              <span>Subscribe</span>
              <div className="relative w-4 h-4">
                <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 group-hover:translate-x-4 group-hover:opacity-0" />
                <ArrowIcon className="absolute inset-0 w-4 h-4 duration-200 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
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
    // <form className="flex flex-wrap justify-center w-full gap-4 lg:flex-nowrap">
    //   <label className="sr-only" htmlFor="email">
    //     Enter your email address
    //   </label>
    //   <InputField
    //     onChange={() => {}}
    //     value={""}
    //     placeholder="Enter your email address"
    //     type="email"
    //     name="email"
    //     className="px-4 py-2.5 text-lg flex-grow lg:w-full"
    //   />
    //   <Button
    //     title="Subscribe"
    //     arrow={true}
    //     href="/"
    //     background="transparent"
    //     color="gray"
    //   />
    // </form>
  );
};

export default Newsletter;
