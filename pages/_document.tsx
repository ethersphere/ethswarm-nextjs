import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
 var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://mtm.swarm.foundation/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '4']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
    /** This section is only needed once per page if manually copying **/
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
    }else if (typeof MauticSDK != 'undefined') {
        MauticSDK.onLoad();
    }
`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
