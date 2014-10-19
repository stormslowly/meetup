'use strict';

var shakeDOM = function(jdom) {
	jdom
		.addClass('shake animated')
		.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function() {
				$(this).removeClass('shake animated');
			});
};

var genMoment = function(date, time) {
	console.log(date, time);
	return moment(date + ' ' + time, 'YYYY-mm-DD HH:mm', true);
};

Template.newMeet.events({
	'click .save': function() {
		var title = $('input#meetTitle').val();
		var startDate = $('input#startDate').val();
		var startTime = $('input#startTime').val();

		var startDatetime = genMoment(startDate, startTime);

		var endDate = $('input#endDate').val();
		var endTime = $('input#endTime').val();

		var endDateTime = genMoment(endDate, endTime);

		var hoster = $('input#hoster').val();
		var detail = $('input#meetDetail').val();

		if (!title.trim()) {
			shakeDOM($('#titleGroup'));
			return;
		}

		if (!startDatetime.isValid()) {
			shakeDOM($('#startGroup'));
			return;
		}

		if (!endDateTime.isValid()) {
			shakeDOM($('#endGroup'));
			return;
		}



		console.log(startDate, startTime);

	}
});