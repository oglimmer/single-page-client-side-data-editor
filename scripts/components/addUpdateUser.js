define(function (require) {
    let Vue = require('libs/vue');
    const baseData = require('./base-data');

    Vue.component('addUpdateUser', {
      props: [],
      data() {
        return {
          name: "",
          sex: "",
          age: 0
        }
      },
      methods: {
        addUpdateUser: function() {
          const {name, sex, age} = this;
          if(!name || !sex || !age) {
            alert("You have to enter a name and choose sex and age!");
          } else {
            this.$store.commit("addUpdateUser", {name, sex, age});
            this.name = "";
            this.sex = "";
            this.age = "";
          }
        }
      },
      computed: {
        ageOptions() {
          return baseData.altersGruppen;
        }
      },
      template: `
          <div style="border: 1px solid black;">
              Add/Update User:
              <form>
                  Name: <input v-model="name" />
                  Sex: <select v-model="sex"><option value="m">Male</option><option value="f">Female</option><option value="d">Diverse</option></select>
                  Age: 
                  <select v-model="age">
                    <option v-for="item in ageOptions" :value="item.id">{{ item.desc }}</option>
                  </select>
                  <button v-on:click="addUpdateUser" type="button">Add/Update</button>
              </form>
          </div>
  `,
    });
  });
  