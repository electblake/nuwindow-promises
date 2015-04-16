var expect = chai.expect;

describe('nuWindow', function() {
	var thisInst = null;
	var options = { };
	var name = 'nuwindow-test1';
	var url = 'http://github.com/electblake/nuwindow-promises';

	it('should be factory function', function() {
		expect(nuWindow).to.be.a('function');
	});

	var thisInst = nuWindow(name, url, options);
	// console.log('nuWindow', nuWindow);
	it('should return Promise', function() {
		expect(thisInst).to.be.an.instanceof(Promise);
	});

	it('should have window property', function() {
		expect(thisInst.window).to.be.an('object');
	});

	it('should close', function() {
		thisInst.window.close();
	});
});

describe('nuWindow Promise', function() {
	var options = {};
	var name = 'nuwindow-test2';
	var url = 'http://github.com/electblake/nuwindow-promises';

	it('should promise then', function() {
		var thisInst = nuWindow(name, url, options);
		// console.log('thisInst', thisInst);
		thisInst.then(function(result) {
			expect(result).to.exist;
		});
		thisInst.window.close();
	});

	it('should promise catch', function() {
		var thisInst = nuWindow(name, url, options);
		// console.log('thisInst', thisInst);
		thisInst.catch(function(result) {
			expect(result).to.exist;
		});
		thisInst.window.close();
	});
});