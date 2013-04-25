require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min',
    jqmobile: 'components/jquery-mobile/js/jquery.mobile'
  }
});
 
require(['app'], function(app) {
  // use app here
  console.log(app);
});