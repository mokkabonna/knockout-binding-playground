define(['knockout', 'src/hidden'], function(ko, Hidden ) {

  describe('Hidden', function() {

    var viewModel;

    beforeEach(function() {
      document.body.innerHTML = '<input id="input" data-bind="hidden:obs">';

      viewModel = {
        obs: ko.observable()
      };

      ko.applyBindings(viewModel, document.body);
    });

    afterEach(function() {
      ko.cleanNode(document.body);
    });

    it('should be tested', function() {
      expect(true).to.be.false();
    });

  });

});
