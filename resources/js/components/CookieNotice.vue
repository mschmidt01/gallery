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
          <input v-model="matomoConsent" type="checkbox" id="matomo-cookies" />
          <label for="matomo-cookies">Web-Analytics</label>
        </div>
        <div id="recaptcha-container">
          <input v-model="recaptchaConsent" type="checkbox" id="recaptcha-cookies" />
          <label for="recaptcha-cookies">ReCAPTCHA v3</label>
        </div>
      </div>

      <input
        v-on:click="submitConsent()"
        class="btn"
        id="cookie-submit"
        type="submit"
        value="Bestätigen"
      />

      <div>
        <router-link title="Impressum" :to="{name: 'impressum'}">Impressum</router-link>
        <span class="link-separator">|</span>
        <router-link title="Datenschutz" :to="{name: 'privacypolicy'}">Datenschutz</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { VueReCaptcha } from "vue-recaptcha-v3";
import Vue from "vue";

export default {
  name: "cookie-notice",
  data: function() {
    const cookieArray = document.cookie.replace(" ", "").split(";");

    let consentSet, matomoConsent, recaptchaConsent;
    consentSet = matomoConsent = recaptchaConsent = false;

    if (cookieArray.includes("piwik_ignore=true")) {
      matomoConsent = false;

      consentSet = true;
    } else if (cookieArray.includes("piwik_ignore=false")) {
      matomoConsent = true;

      consentSet = true;
    } else {
      consentSet = false;
    }

    if (cookieArray.includes("recaptcha=true")) {
      recaptchaConsent = true;

      Vue.use(VueReCaptcha, {
        siteKey: "6LcgP-sUAAAAAKLnLp5lZfmXupbJXQ7Z70hQ7dAm"
      });

      consentSet &= true;
    } else if (cookieArray.includes("recaptcha=false")) {
      recaptchaConsent = false;

      consentSet &= true;
    } else {
      consentSet &= false;
    }

    if (!consentSet) recaptchaConsent = matomoConsent = false;

    return {
      consentSet,
      matomoConsent,
      recaptchaConsent
    };
  },
  methods: {
    submitConsent() {
      if (!this.matomoConsent) {
        document.cookie = "piwik_ignore=true";
      } else {
        document.cookie = "piwik_ignore=false";
      }
      if (this.recaptchaConsent) {
        document.cookie = "recaptcha=true";

        Vue.use(VueReCaptcha, {
          siteKey: "6LcgP-sUAAAAAKLnLp5lZfmXupbJXQ7Z70hQ7dAm"
        });
      } else {
        document.cookie = "recaptcha=false";
      }

      this.consentSet = true;

      this.$refs.cookieNotice.classList.remove("show");
    }
  }
};
</script>