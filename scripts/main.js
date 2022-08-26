define(function (require) {
  let Vue = require('libs/vue');
  let store = require('store');
  require('components/topmenu');
  require('components/download-button');
  require('components/load');
  require('components/debug-out');
  require('components/addUpdateUser');
  require('components/report-by-user');
  require('components/report-by-date');
  require('components/generate-test-data');


  const getUrlParameter = function getUrlParameter(sParam) {
    const sPageURL = window.location.search.substring(1);
    const sURLVariables = sPageURL.split('&');

    for (let i = 0; i < sURLVariables.length; i++) {
      const sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
    return 'DEFAULT';
  };

  new Vue({
    el: '#main',
    store: store,
    created() {
      this.$store.commit('setUrlParams', {        
      });
    },
    template: `
      <div>
        <topmenu />
        <hr />
        <load />
        <hr />
        <download-button />
        <hr />
        <addUpdateUser />
        <hr />
        <report-by-user />
        <hr />
        <report-by-date />
        <hr />
        <generate-test-data />
        <hr />
        <debug-out />
      </div>
        `,
  });
});
