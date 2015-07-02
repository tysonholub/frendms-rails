function getElements(page){
	$.ajax({
		url : 'element/all',
		type : 'GET',
		data : { page : page },
		dataType : 'json',
		beforeSend : function() {

		},
		success : function(data) {
			$.each(data, function(i, element){
				$(element['id']).html(element['text'])
			})
			$('body').show()
		},
		complete : function(data) {

		},
		error : function(XMLHttpRequest, textStatus, errorThrown){
		}
	})
}

function updateElement(element){
	element.parent().toggleClass('focused')
	var id = element.dompath()
	var text = element.val()
	if(text.length < 1){
		text = element.parent().attr('id')
	}
	var page = element.parent().attr('data')
	$.ajax({
		url : 'element/update',
		data : { page : page, text : text, id : id },
		type : 'POST',
		dataType : 'json'
	})		
}

$(document).ready(function(){
	$.valHooks.textarea = {
		get: function( elem ) {
		    return elem.value.replace( /\r?\n/g, "<br />" );
		}
	};

	$('.frend').click(function(){
		if(($(this).find('textarea').prop('tagName')) != 'TEXTAREA'){
			$(this).toggleClass('focused')
			var id = $(this).attr('id')
			var content = $(this).text()
			$(this).html('<textarea id="box-in-'+id+'" class="input-box" />')
			$('#box-in-'+id).val(content)
			$(this).find('.input-box').select()
			var elementParents = [],
				elm,
				entry;

			elementParents.push($(this).prop('tagName').toLowerCase()+'#'+$(this).attr('id').toLowerCase())
			for(elm = this.parentNode; elm; elm = elm.parentNode){
				entry = elm.tagName.toLowerCase();
				if(entry == 'html'){
					break;
				}
				if(elm.idName){
					entry += "#" + elm.idName;
				}
				elementParents.push(entry);
			}
			elementParents.reverse();
		}
	})

	$('.frend').on('blur', 'textarea', function(){	
		updateElement($(this));
		if($(this).val().length < 1){
			$(this).parent().html($(this).parent().prop('tagName') + '#' + $(this).parent().attr('id'))
		} else {
			$(this).parent().html($(this).val())				
		}
	})

	$('.frend').on('keyup', 'textarea', function(){
		var h = $(this).height()
		$(this).css('height', '0px')
		var sh = $(this).prop('scrollHeight')
		var minh = $(this).css('min-height').replace('px', '')
		$(this).css('height', Math.max(sh,minh)+'px')
	})
})
