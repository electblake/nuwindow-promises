(function() {
    var nuWindow = function(name, url, options) {

    	var windowDefer = $q.defer();

    	var specs = [];
    	if (options) {
        	_.forIn(options, function(element, index) {
        		specs.push(index+'='+element);
        	});
    	}

        var optString = specs.join(', ');
    	
    	var thisWindow = window.open(url, name, optString);

        var interval = $interval(function() {
            try {
                if (thisWindow == null || thisWindow.closed) {
                    $interval.cancel(interval);
                    windowDefer.resolve(thisWindow);
                }
            }
            catch (e) {
            }
        }, 1000);
    	return windowDefer.promise;
    };
})(window);