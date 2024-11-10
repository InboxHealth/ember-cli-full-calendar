/* jshint node: true */
"use strict";

module.exports = {
  name: "ember-cli-full-calendar",

  included: function (app) {
    this._super.included(app);

    app.import("node_modules/fullcalendar/dist/fullcalendar.min.js");
    app.import("node_modules/fullcalendar/dist/fullcalendar.min.css");
  },
};
