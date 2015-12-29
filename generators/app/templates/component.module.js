/**
 * Created by <%= authorName %> on 29.12.2015.
 */

define('js!SBIS3.<%= componentNamespace %>', [
  'js!SBIS3.CORE.CompoundControl',
  'html!SBIS3.<%= componentNamespace %>',
  'css!SBIS3.<%= componentNamespace %>'], function( CompoundControl, dotTplFn ) {
  /**
   * SBIS3.<%= componentNamespace %>
   * @class SBIS3.<%= componentNamespace %>
   * @extends $ws.proto.CompoundControl
   * @control
   */
  var moduleClass = CompoundControl.extend(/** @lends SBIS3.<%= componentNamespace %> */{
    _dotTplFn: dotTplFn,
    $protected: {
      _options: {

      }
    },
    $constructor: function() {
    },

    init: function() {
      moduleClass.superclass.init.call(this);
    }
  });
  return moduleClass;
});
