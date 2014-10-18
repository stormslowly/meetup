'use strict';
/*global moment*/
Template.meets.helpers({
  meets: function() {
    return Meet.find();
  },

  shortTimeDate: function(dateStr) {
    var mm = moment(dateStr);
    return mm.format('YYYY-MM-DD hh:mm');
  }

});


Template.meets.events = {
  'click .join': function(event, target) {
    console.log(event, this, target);
  },

};