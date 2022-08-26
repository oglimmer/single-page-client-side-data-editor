define(function (require) {
  let Vue = require('libs/vue');
  const baseData = require('./base-data');

  Vue.component('report-by-date-aggregatedStats', {
    props: ["items"],
    computed: {
      baseData() {
          return baseData;
      },
      itemsBySex() {
          return this.items
            .reduce((p, v) => { p[v.sex]++; return p; }, {m: 0, f: 0, d: 0});
      },
      itemsByAge() {
        return this.items
          .reduce((p, v) => { p[v.age]++; return p; }, baseData.altersGruppen.reduce((acc, curr) => (acc[curr.id]=0,acc), {}));
      },
      uniqueName() {
        return this.items.reduce((p,v) => {p[v.name] = true; return p;}, {});
      }
    },
    template: `
        <div>
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
            Visitors:
            <ul>
              <li v-for="(_, name) in uniqueName" :key="name">
                * {{ name }}
              </li>
            </ul>
        </ul>
</div>
`,
  });

  Vue.component('report-by-date', {
    props: [],
    data() {
      return {
        from: "2020-01-01",
        to: "2030-01-01",
        unique: false
      }
    },
    computed: {
      items() {
        if(this.unique) {
          return this.$store.state.data.users
            .filter(e => e.visits.some( f => f >= this.from && f <= this.to ));
        } else {
          return this.$store.state.data.users
            .flatMap(e => e.visits.map(f => ({name:e.name,sex:e.sex,age:e.age,visit:f})))
            .filter(e => e.visit >= this.from && e.visit <= this.to);
        }
      }
    },
    template: `
        <div style="border: 1px solid black;">
            Visits by date (yyyy-mm-dd);
            <form>
                From: <input v-model="from" />
                To: <input v-model="to" />
                Unique stats <input v-model="unique" type="checkbox" />
            </form>
            <report-by-date-aggregatedStats v-bind:items="items" />
        </div>
`,
  });
});
