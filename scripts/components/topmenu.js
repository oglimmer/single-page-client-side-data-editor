define(function (require) {
  let Vue = require('libs/vue');

  Vue.component('topmenu', {
    props: [],
    template: `
      <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://github.com/oglimmer/">
              Data Editor
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div>
                All systems up.
              </div>
            </div>
          </div>
        </nav>
      </div>
`,
  });
});
