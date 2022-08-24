define(function (require) {
    let Vue = require('libs/vue');
    let CryptoJS = require('libs/crypto');

    Vue.component('load', {
      props: [],
      data() {
        return {
            password: ""
        }
      },
      methods: {
        loadData: function(event) {
          event.preventDefault();
          const file = document.getElementById("data").files[0];
          if (file) {
              const reader = new FileReader();
              reader.readAsText(file, "UTF-8");
              reader.onload = evt => {
                try {
                    let rawData;
                    if(this.password) {
                        const decryptedAsBinary = CryptoJS.AES.decrypt(evt.target.result, this.password);
                        rawData = decryptedAsBinary.toString(CryptoJS.enc.Utf8);
                    } else {
                        rawData = evt.target.result;
                    }
                    data = JSON.parse(rawData);
                    this.$store.commit("updateData", data);                
                } catch (e) {
                    if ( e == "Error: Malformed UTF-8 data"){
                        this.$store.commit("updateData", "Wrong password!");
                    } else {
                        this.$store.commit("updateData", e);
                    }
                }
              }
              reader.onerror = err => {
                this.$store.commit("updateData", "error reading file");
              }
          }
        }
      },
      template: `
        <div style="border: 1px solid black;">
            Load:
            <form v-on:submit="loadData" >
                Password: <input type="text" v-model="password" /> <br/>
                <input type="file" name="data" id="data" />
                <input type="submit" name="load" />
            </form>
        </div>
  `,
    });
  });
  