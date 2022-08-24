define(function (require) {
    let Vue = require('libs/vue');
    const baseData = require('./base-data');

  
    Vue.component('report-by-date', {
      props: [],
      data() {
        return {
          from: "2022-01-01",
          to: "2030-01-01"
        }
      },
      methods: {
      },
      computed: {
        baseData() {
            return baseData;
        },
        itemsBySex() {
            return this.$store.state.data.users
                .flatMap(e => e.visits.map(f => ({sex:e.sex,age:e.age,visit:f})))
                .filter(e => e.visit >= this.from && e.visit <= this.to)
                .reduce((p, v) => { p[v.sex]++; return p; }, {m: 0, f: 0, d: 0});
        },
        itemsByAge() {
            return this.$store.state.data.users
                .flatMap(e => e.visits.map(f => ({sex:e.sex,age:e.age,visit:f})))
                .filter(e => e.visit >= this.from && e.visit <= this.to)
                .reduce((p, v) => { p[v.age]++; return p; }, baseData.altersGruppen.reduce((acc, curr) => (acc[curr.id]=0,acc), {}));
        },
      },
      template: `
          <div style="border: 1px solid black;">
              Visits by date (yyyy-mm-dd);
              <form>
                  From: <input v-model="from" />
                  To: <input v-model="to" />
              </form>
              <div>
              male={{ itemsBySex.m }}x
              </div>
              <div>
              female={{ itemsBySex.f }}x
              </div>
              <div>
              diverse={{ itemsBySex.d }}x
              </div>
              <div v-for="(val, propertyName, index) in itemsByAge" :key="index">
                "{{ baseData.altersGruppen.filter(e => e.id == propertyName).map(e => e.desc).join() }}" = {{ val }}x
              </div>
          </div>
  `,
    });
  });
  