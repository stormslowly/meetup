'use strict';
/*global moment*/
Template.meets.helpers({
  meets: function() {
    return Meet.find();
  },

  shortTimeDate: function(dateStr) {
    var mm = moment(dateStr);
    return mm.format('YYYY-MM-DD HH:MM');
  }

});


Template.meets.events = {
  'click .join': function(event, target) {
    console.log(event, this, target);
  },
  'click .new': function(event, target) {
    console.log('new meet');
  }

};