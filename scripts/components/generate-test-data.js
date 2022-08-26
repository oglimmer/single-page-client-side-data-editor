define(function (require) {
    let Vue = require('libs/vue');
  
    Vue.component('generate-test-data', {
      props: [],
      data() {
        return {
            totalNumber: "100",
            numberVisits: "10"
        }
      },
      methods: {
        generate() {
            const zeroPad = (num, places) => String(num).padStart(places, '0');

            function makeid(length) {
                var result           = '';
                var characters       = 'abcdefghijklmnopqrstuvwxyz';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                  result += characters.charAt(Math.floor(Math.random() * charactersLength));
               }
               return result;
            }
            
            function makedate() {
                return (2020+parseInt(Math.random()*3))+"-"+zeroPad(parseInt(Math.random()*12)+1, 2)+"-"+zeroPad(parseInt(Math.random()*30)+1, 2);
            }
            
            function makeUser(numberVisits) {
            
                const name = makeid(10);
                const sex =  ["m","f","d"][parseInt(Math.random()*3)];
                const age =  1+parseInt(Math.random()*5);
                const visits =  [...new Set([...Array(1+parseInt(Math.random()*numberVisits)).keys()].map(e => makedate()))].sort();
                const lastvisit = visits[visits.length-1];
            
                const user = {
                    name,sex,age,visits,lastvisit
                }
            
                return user;
            }
        
            const data = {
                users: Array(parseInt(this.totalNumber)).fill(1).map(e => makeUser(parseInt(this.numberVisits)))
            };
            
            this.$store.commit("updateData", data);
        }
      },
      template: `
          <div style="border: 1px solid black;">
              Generate test data:
              <form>
                  Number of Users: <input v-model="totalNumber" /> <br/>
                  Number of max Visits: <input v-model="numberVisits" />
                  <button v-on:click="generate" type="button">Generate</button>
              </form>              
          </div>
  `,
    });
  });
  