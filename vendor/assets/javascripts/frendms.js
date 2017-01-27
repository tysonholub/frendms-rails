function getElements(frender){
	$.ajax({
		url : '/element/all',
		type : 'GET',
		data : { frender : frender },
		dataType : 'json',
		beforeSend : function() {

		},
		success : function(data) {
			$.each(data, function(i, element){
				$(element['elementId'])[element['elementIndex']].innerHTML = element['text'];
			});
			$('.frend').show()
		},
		complete : function(data) {
		    if (location.hash) {
		        location.href = location.hash;
		    }
		},
		error : function(XMLHttpRequest, textStatus, errorThrown){
		}
	})
}

function updateElement(element){
	var id = element.dompath().replace('.enabled', '');
	var text = element.html().trim();
	var index = $(id).toArray().indexOf(element[0]);
	var frender = element.closest('.frender').attr('id');

	$.ajax({
		url : '/element/update',
		data : {
			frender : frender,
			text : text,
			index : index,
			id : id
		},
		type : 'PUT',
		dataType : 'json',
		success : function(data) {
			$.notify('Successfully updated element', 'success')
		},
		error : function(XMLHttpRequest, textStatus, errorThrown){
			$.notify('Failed to update element', 'error')
		}
	});
}

$(window).load(function(){

	$('.frender').each(function(index, frender){
		getElements(frender.id);
	});

	$('.frender').on('blur', '.enabled', function(){
		updateElement($(this))

		if($(this).html().length < 1){
			$(this).html($(this).dompath().replace('.enabled', ''))
		}
	})
})
