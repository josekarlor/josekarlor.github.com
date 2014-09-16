
$(function() {

	$('.tab-panels .tabs li').on('click', function() {
	
		var $panel = $(this).closest('.tab-panels');
		
		$panel.find('.tabs li.active').removeClass('active');
		$(this).addClass('active');
		
		//figure out which panel to show
		var panelToShow = $(this).attr('data-panelid');
		
		//hide current panel
		$panel.find('.panel.active').slideUp(300, showNextPanel);
		
		//show next panelToShow
		function showNextPanel () {
			$(this).removeClass('active');
			
			$('#'+panelToShow).slideDown(300, function() { 
				$(this).addClass('active');
			});
		}
	});
});