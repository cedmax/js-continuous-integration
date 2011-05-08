var test = new TestCase("Slider.test", {
	setUp: function(){
		/*:DOC += <ul id="foo"><li></li><li></li></ul> */
	},
	
	testSliderIsAPlugin: function(){
		var test = function(){
			$("foo").slider();
		};
		assertNoException(test);
	},
	
	tearDown: function(){
		
	}
});
