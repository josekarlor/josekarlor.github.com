
$(function() {

	$('.tab-panels .tabs li').on('click', function() {
	
		var $panel = $(this).closest('.tab-panels');
		var $clickedTab = $(this);
		var $activeTab = $panel.find('li.active');
		var $activePanel = $panel.find('div.active');
		//figure out which panel to show
		var panelToShow = $clickedTab.attr('data-panelid');
		
		if ( ! $clickedTab.hasClass("active") ) {
			$activeTab.removeClass('active');
			$activePanel.removeClass('active');
			
			//hide current panel
			$activePanel.slideUp(300, showNextPanel);
		} else
			console.log("¡Ya está activo!");


		//show next panelToShow
		function showNextPanel () {
			//$(this).removeClass('active');
			
			$('#'+panelToShow).slideDown(300, function() { 
				$(this).addClass('active');
				$clickedTab.addClass('active');
			});
		}
	});
});