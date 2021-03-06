'use strict';

describe('Controller: HjalmarCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var HjalmarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HjalmarCtrl = $controller('HjalmarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HjalmarCtrl.awesomeThings.length).toBe(3);
  });
});
