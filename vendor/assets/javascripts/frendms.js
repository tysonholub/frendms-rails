function getElements(page){
	$.ajax({
		url : '/element/all',
		type : 'GET',
		data : { page : page },
		dataType : 'json',
		beforeSend : function() {

		},
		success : function(data) {
			$.each(data, function(i, element){
				if($(element['elementId'].length > 1)){
					$.each($(element['elementId']), function(j, inner){
						if($(inner).dompath().split(' ').length + 1 == element['elementId'].split(' ').length){
							$(inner).html(element['text'])
						}
					})
				} else {
					$(element['elementId']).html(element['text'])
				}
			})
			$('.frend').show()
		},
		complete : function(data) {

		},
		error : function(XMLHttpRequest, textStatus, errorThrown){
		}
	})
}

function updateElement(element){
	element.parent().toggleClass('focused')
	var id = element.dompath().replace('.enabled', '')
	var text = element.val().trim()
	var page = element.parent().attr('data-frend')
	
	$.ajax({
		url : '/element/update',
		data : { page : page, text : text, id : id },
		type : 'PUT',
		dataType : 'json',
		success : function(data) {
			$.notify('Successfully updated element', 'success')
		},
		error : function(XMLHttpRequest, textStatus, errorThrown){
			$.notify('Failed to update element', 'error')
		}
	})		
}

$(window).load(function(){
	var value = ''
	$('.frend.enabled').on('click', function(){
		if(($(this).find('textarea').prop('tagName')) != 'TEXTAREA'){
			var height = $(this).height()
			var width = $(this).width()
			$(this).toggleClass('focused')
			var content = $(this).text()
			value = content
			$(this).html('<textarea id="box-in-frend" class="frend-input-box" />')
			$('#box-in-frend').val(content.trim())
			$(this).find('.frend-input-box').css({
				'height' : height + 'px',
				'width' : width + 'px'
			}).select()
		}
	})

	$('.frend.enabled').on('blur', 'textarea', function(){
		if($(this).val() != value){
			updateElement($(this))
		}

		if($(this).val().length < 1){
			$(this).parent().html($(this).parent().dompath().replace('.enabled', ''))
		} else {
			$(this).parent().html($(this).val())	
		}
		$('.frend').removeClass('focused')
	})

	$('.frend.enabled').on('keyup', 'textarea', function(){
		var h = $(this).height()
		$(this).css('height', '0px')
		var sh = $(this).prop('scrollHeight')
		var minh = $(this).css('min-height').replace('px', '')
		$(this).css('height', Math.max(sh,minh)+'px')
	})
})
