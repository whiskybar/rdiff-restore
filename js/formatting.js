angular.module('RDiffBackupModule', []).
  filter('binary', function() {
    return function(input) {
      if (input < 1024) {
          return input + '';
      }
      var units = ['K', 'M', 'G', 'T'];
      for (var i = 0; i < units.length; i++) {
        input = input / 1024;
        if (input < 1024) {
          return input.toFixed(1) + units[i];
        }
      }
      return input.toFixed(0) + units[units.length() - 1];
    }
  });
