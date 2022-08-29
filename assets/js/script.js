(function ($) {
	$(function () {
		function highlights(thisObject) {
			highlights.appendTo(thisObject.parents('svg>g'));
		}

		$('.map-svg-india').click(function () {
			$(this).siblings().removeClass('map-svg-india-active');
			$(this).addClass('map-svg-india-active');
			$('.select-state').val($(this).attr('id')).trigger('change');
			highlights($(this));
		});

		$('.select-state > option').each(function () {
			$(this).addClass($(this).attr('value'));
		});

		$('.select-state').change(function () {
			$('.' + $(this).val() + '-class').siblings().removeClass('map-svg-india-active');
			$('.' + $(this).val() + '-class').addClass('map-svg-india-active');
			highlights($('.' + $(this).val() + '-class'));
		});

	});
})(jQuery);