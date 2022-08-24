define(function (require) {
    let Vue = require('libs/vue');
    const baseData = require('./base-data');

  
    Vue.component('report-by-user', {
      props: [],
      data() {
        return {
          name: ""
        }
      },
      methods: {
      },
      computed: {
        items() {
            return this.$store.state.data.users.filter(e => e.name == this.name);
        },
        baseData() {
            return baseData;
        }
      },
      template: `
          <div style="border: 1px solid black;">
              Visits by user name:
              <form>
                  Name: <input v-model="name" />
              </form>
              <div v-for="item in items" :key="item.id">
                Vists of {{ item.name }} (sex:{{ item.sex }}, age:{{ baseData.altersGruppen.filter(e => e.id == item.age).map(e => e.desc).join() }})
                <ul>
                    <li v-for="visit in item.visits" :key="visit">
                       * {{ visit }}
                    </li>
                </ul>
              </div>
          </div>
  `,
    });
  });
  