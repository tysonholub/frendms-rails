;(function($) {
    $.fn.dompath = function(config) {
        var dompath = [],
            node,
			sender = $(this)[0],
			tag;

		// dompath.push(_buildTag(sender))

		for (node = sender; node; node = node.parentNode) {
			if(node.tagName.toLowerCase() == "html") break;
			dompath.push(_buildTag(node))
		}

		function _buildTag(node) {
			tag = node.tagName.toLowerCase();

			if (node.id) {
				tag += "#" + node.id.replace(/ /g, '#');
			}
			else if (node.className) {
				tag += "." + node.className.replace(/ /g, '.');
			}

			return tag;
		}

		return dompath.reverse().join(" ");
    }
})(jQuery);
