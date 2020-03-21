<template>
  <div v-if="!consentSet" id="cookie-notice" class="show" ref="cookieNotice">
    <div id="notice-container">
      <p id="cookie-headline">Diese Website verwendet Cookies</p>      
      <div class="separator"></div>
      <p>Cookies werden zur Benutzerführung und Webanalyse verwendet und helfen dabei, diese Website zur verbessern.</p>

      <div id="cookie-options">
        <div id="essentiell-container">
          <input disabled checked type="checkbox" id="essentiell-cookies" />
          <label for="essentiell-cookies">Essenzielle Cookies</label>
        </div>
        <div id="matomo-container">
          <input v-model="matomoConsent" type="checkbox" id="matomo-cookies">
          <label for="essentiell-cookies">Web-Analytics</label>
        </div>
      </div>
    
      <input v-on:click="submitConsent()" class="btn" id="cookie-submit" type="submit" value="Bestätigen" />

      <div>
        <a href="https://www.thm.de/site/impressum.html" title="Impressum">Impressum</a>
        <span class="link-separator">|</span>
        <a href="https://www.thm.de/site/datenschutz.html" title="Datenschutz">Datenschutz</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cookie-notice",
  data: function() {
    const cookieArray = document.cookie.replace(" ", "").split(";");
    
    let consentSet, matomoConsent;

    if(cookieArray.includes("matomo=true") || cookieArray.includes("matomo=false")) {
      consentSet = true;

      if(cookieArray.includes("matomo=true")) {
        matomoConsent = true;
      } else {
        matomoConsent = false;
      }
    } else {
      consentSet = false;
    }

    return {
      consentSet,
      matomoConsent
    };
  },
  methods: {
    submitConsent() {
      /**
       * ToDo: Set cookie
       */

      if(this.matomoConsent) {
        document.cookie = "matomo=true";
      } else {
        document.cookie = "matomo=false";
      }

      this.consentSet = true;

      this.$refs.cookieNotice.classList.remove("show");
    }
  }
};
</script>