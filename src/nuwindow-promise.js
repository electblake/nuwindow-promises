// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.nuWindow = factory();
  }
}(this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    var _ = window._;
    var nuWindow = function(name, url, options) {

        var _defaults = {
          width: 520,
          height: 350
        };

        options = _.defaults(_defaults, options);

        var specs = [];
        if (options) {
            _.forIn(options, function(element, index) {
                specs.push(index+'='+element);
            });
        }

        var optString = specs.join(', ');
        
        console.log('nuWindow optString', optString);
        var thisWindow = window.open(url, name, optString);

        var promise = new Promise(function(resolve, reject) {
            try {
              var interval = setInterval(function() {
                  if (thisWindow == null || thisWindow.closed) {
                      clearInterval(interval);
                      resolve(thisWindow);
                  }
              }, 1000);
            } catch (err) {
                reject(err);
            }
        });
        
        return promise;
    };

    return nuWindow;
}));

/**
 * 
 */

// var opts = {
//   width: 520,
//   height: 350
// };

// var tweetShareUrl = new URI('http://twitter.com/share');

// tweetShareUrl.addQuery('url', this.shareURL);
// tweetShareUrl.addQuery('text', this.shareText);
// tweetShareUrl.addQuery('via', 'getmusicl');

// var tweetURL = tweetShareUrl.toString();

// nuWindow(this._id + 'shareTwitter', tweetURL, opts)
//   .then(function() {
//     $log.debug('-- nuWindow finished');
//   })