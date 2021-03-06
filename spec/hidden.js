define(['knockout', 'src/hidden'], function(ko, hidden) {

  describe('Hidden', function() {
    var viewModel;
    var element;
    var root;

    before(function () {
      root = document.createElement('div');
      root.innerHTML = '<input id="input" data-bind="hidden:obs">';
      document.body.appendChild(root);
      element = document.getElementById('input');
    });

    beforeEach(function() {
      viewModel = {
        obs: ko.observable()
      };

      ko.applyBindings(viewModel, root);
    });

    afterEach(function() {
      ko.cleanNode(root);
    });

    it('should be bound', function() {
      expect(ko.dataFor(element)).to.be(viewModel);
    });

  });
});
