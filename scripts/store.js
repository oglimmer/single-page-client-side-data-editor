define(function(require) {
  let Vue = require('libs/vue');
  let Vuex = require('libs/vuex');

  Vue.use(Vuex);

  const zeroPad = (num, places) => String(num).padStart(places, '0');

  return new Vuex.Store({
    state: {
      data: { "users": [ 
      ]}
    },
    mutations: {
      addUpdateUser(state, value) {
        const userArr = state.data.users.filter(e => e.name === value.name);
        const now = new Date();
        const nowDate = now.getUTCFullYear() + "-" + zeroPad(now.getUTCMonth() + 1, 2) + "-" + zeroPad(now.getUTCDate(), 2);
        if (userArr.length > 0) {
          userArr.filter(e => e.lastVisit !== nowDate).forEach(e => {
            if(e.sex !== value.sex || e.age !== value.age) {
              if(confirm("Found a user with the name name, but different sex or age. Confirm to overwrite this user!")) {
                e.lastVisit = nowDate;
                e.sex = value.sex;
                e.age = value.age;
                e.visits.push(nowDate);  
              }
            } else {
              e.lastVisit = nowDate;
              e.visits.push(nowDate);  
            }
          });
        } else {
          state.data.users.push({
            id: state.data.users.reduce((val, user) => user.id > val ? user.id : val, 0) + 1,
            name: value.name,
            sex: value.sex,
            age: value.age,
            lastVisit: nowDate,
            visits: [nowDate]
          });
        }
      },
      updateData(state, value) {
        state.data = value;
      }
    },
    actions: {      
    },
  });
});
