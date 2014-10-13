'use strict';
Template.meets.helpers({
  meets: function() {
    return Meet.find();
  }
});


Template.meets.events = {
  'click .join': function(event, target) {
    console.log(event, this, target);
  },

};