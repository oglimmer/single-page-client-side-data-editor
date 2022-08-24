define(function (require) {
    let Vue = require('libs/vue');
  
    Vue.component('debug-out', {
      props: [],
      computed: {
        debugOutputOfData() {
          return this.$store.state.data;
        }
      },
      template: `
        <div style="border: 1px solid black;">{{ debugOutputOfData }}</div>
  `,
    });
  });
  