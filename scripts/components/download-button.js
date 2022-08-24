define(function (require) {
    let Vue = require('libs/vue');
    let CryptoJS = require('libs/crypto');
  
    Vue.component('download-button', {
      props: [],
      data() {
        return {
            password: ""
        }
      },
      methods: {
        download: function() {
          if(!this.password) {
            alert("Password must not be empty!");
            return;
          }
          const link = document.createElement("a");
          link.href = "data:application/json," + CryptoJS.AES.encrypt(JSON.stringify(this.$store.state.data), this.password);
          link.download = "data.json";
          link.click();
        },
      },
      template: `
        <div style="border: 1px solid black;">
            Password: <input type="text" v-model="password" /> | 
            Click here to download the database as json: <button v-on:click="download">Download</button>
        </div>
  `,
    });
  });
  