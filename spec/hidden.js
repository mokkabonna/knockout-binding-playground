define(['knockout', 'src/hidden'], function(ko, hidden) {

  describe('Hidden', function() {
    var viewModel;
    var root;

    beforeEach(function() {
      document.body.innerHTML = '<input id="input" data-bind="hidden:obs">';
      root = document.getElementById('input');
      viewModel = {
        obs: ko.observable()
      };

      ko.applyBindings(viewModel, root);
    });

    afterEach(function() {
      ko.cleanNode(root);
    });

    it('should be bound', function() {
      expect(ko.dataFor(root)).to.be(viewModel);
    });

  });
});
