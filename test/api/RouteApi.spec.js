/**
 * DNL API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2.10
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DnlApi);
  }
}(this, function(expect, DnlApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DnlApi.RouteApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RouteApi', function() {
    describe('routeBlockListGet', function() {
      it('should call routeBlockListGet successfully', function(done) {
        //uncomment below and update the code to test routeBlockListGet
        //instance.routeBlockListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeBlockPost', function() {
      it('should call routeBlockPost successfully', function(done) {
        //uncomment below and update the code to test routeBlockPost
        //instance.routeBlockPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeBlockResBlockIdDelete', function() {
      it('should call routeBlockResBlockIdDelete successfully', function(done) {
        //uncomment below and update the code to test routeBlockResBlockIdDelete
        //instance.routeBlockResBlockIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeBlockResBlockIdGet', function() {
      it('should call routeBlockResBlockIdGet successfully', function(done) {
        //uncomment below and update the code to test routeBlockResBlockIdGet
        //instance.routeBlockResBlockIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeBlockResBlockIdPatch', function() {
      it('should call routeBlockResBlockIdPatch successfully', function(done) {
        //uncomment below and update the code to test routeBlockResBlockIdPatch
        //instance.routeBlockResBlockIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDigitMapItemRefIdDelete', function() {
      it('should call routeDigitMapItemRefIdDelete successfully', function(done) {
        //uncomment below and update the code to test routeDigitMapItemRefIdDelete
        //instance.routeDigitMapItemRefIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDigitMapItemRefIdGet', function() {
      it('should call routeDigitMapItemRefIdGet successfully', function(done) {
        //uncomment below and update the code to test routeDigitMapItemRefIdGet
        //instance.routeDigitMapItemRefIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDigitMapItemRefIdPatch', function() {
      it('should call routeDigitMapItemRefIdPatch successfully', function(done) {
        //uncomment below and update the code to test routeDigitMapItemRefIdPatch
        //instance.routeDigitMapItemRefIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDigitMapListGet', function() {
      it('should call routeDigitMapListGet successfully', function(done) {
        //uncomment below and update the code to test routeDigitMapListGet
        //instance.routeDigitMapListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDigitMapPost', function() {
      it('should call routeDigitMapPost successfully', function(done) {
        //uncomment below and update the code to test routeDigitMapPost
        //instance.routeDigitMapPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDigitMapTranslationIdDelete', function() {
      it('should call routeDigitMapTranslationIdDelete successfully', function(done) {
        //uncomment below and update the code to test routeDigitMapTranslationIdDelete
        //instance.routeDigitMapTranslationIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDigitMapTranslationIdGet', function() {
      it('should call routeDigitMapTranslationIdGet successfully', function(done) {
        //uncomment below and update the code to test routeDigitMapTranslationIdGet
        //instance.routeDigitMapTranslationIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDigitMapTranslationIdItemListGet', function() {
      it('should call routeDigitMapTranslationIdItemListGet successfully', function(done) {
        //uncomment below and update the code to test routeDigitMapTranslationIdItemListGet
        //instance.routeDigitMapTranslationIdItemListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDigitMapTranslationIdItemPost', function() {
      it('should call routeDigitMapTranslationIdItemPost successfully', function(done) {
        //uncomment below and update the code to test routeDigitMapTranslationIdItemPost
        //instance.routeDigitMapTranslationIdItemPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDigitMapTranslationIdPatch', function() {
      it('should call routeDigitMapTranslationIdPatch successfully', function(done) {
        //uncomment below and update the code to test routeDigitMapTranslationIdPatch
        //instance.routeDigitMapTranslationIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdAddTrunkPost', function() {
      it('should call routeDynamicDynamicRouteIdAddTrunkPost successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdAddTrunkPost
        //instance.routeDynamicDynamicRouteIdAddTrunkPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdAddTrunksPost', function() {
      it('should call routeDynamicDynamicRouteIdAddTrunksPost successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdAddTrunksPost
        //instance.routeDynamicDynamicRouteIdAddTrunksPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdDelete', function() {
      it('should call routeDynamicDynamicRouteIdDelete successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdDelete
        //instance.routeDynamicDynamicRouteIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdGet', function() {
      it('should call routeDynamicDynamicRouteIdGet successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdGet
        //instance.routeDynamicDynamicRouteIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdOverrideCreatePost', function() {
      it('should call routeDynamicDynamicRouteIdOverrideCreatePost successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdOverrideCreatePost
        //instance.routeDynamicDynamicRouteIdOverrideCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdOverrideListGet', function() {
      it('should call routeDynamicDynamicRouteIdOverrideListGet successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdOverrideListGet
        //instance.routeDynamicDynamicRouteIdOverrideListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdPatch', function() {
      it('should call routeDynamicDynamicRouteIdPatch successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdPatch
        //instance.routeDynamicDynamicRouteIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdPriCreatePost', function() {
      it('should call routeDynamicDynamicRouteIdPriCreatePost successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdPriCreatePost
        //instance.routeDynamicDynamicRouteIdPriCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdPriListGet', function() {
      it('should call routeDynamicDynamicRouteIdPriListGet successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdPriListGet
        //instance.routeDynamicDynamicRouteIdPriListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdQosCreatePost', function() {
      it('should call routeDynamicDynamicRouteIdQosCreatePost successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdQosCreatePost
        //instance.routeDynamicDynamicRouteIdQosCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicDynamicRouteIdQosListGet', function() {
      it('should call routeDynamicDynamicRouteIdQosListGet successfully', function(done) {
        //uncomment below and update the code to test routeDynamicDynamicRouteIdQosListGet
        //instance.routeDynamicDynamicRouteIdQosListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicListGet', function() {
      it('should call routeDynamicListGet successfully', function(done) {
        //uncomment below and update the code to test routeDynamicListGet
        //instance.routeDynamicListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicOverrideIdDelete', function() {
      it('should call routeDynamicOverrideIdDelete successfully', function(done) {
        //uncomment below and update the code to test routeDynamicOverrideIdDelete
        //instance.routeDynamicOverrideIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicOverrideIdGet', function() {
      it('should call routeDynamicOverrideIdGet successfully', function(done) {
        //uncomment below and update the code to test routeDynamicOverrideIdGet
        //instance.routeDynamicOverrideIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicOverrideIdPatch', function() {
      it('should call routeDynamicOverrideIdPatch successfully', function(done) {
        //uncomment below and update the code to test routeDynamicOverrideIdPatch
        //instance.routeDynamicOverrideIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicPost', function() {
      it('should call routeDynamicPost successfully', function(done) {
        //uncomment below and update the code to test routeDynamicPost
        //instance.routeDynamicPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicPriIdDelete', function() {
      it('should call routeDynamicPriIdDelete successfully', function(done) {
        //uncomment below and update the code to test routeDynamicPriIdDelete
        //instance.routeDynamicPriIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicPriIdGet', function() {
      it('should call routeDynamicPriIdGet successfully', function(done) {
        //uncomment below and update the code to test routeDynamicPriIdGet
        //instance.routeDynamicPriIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicPriIdPatch', function() {
      it('should call routeDynamicPriIdPatch successfully', function(done) {
        //uncomment below and update the code to test routeDynamicPriIdPatch
        //instance.routeDynamicPriIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicQosIdDelete', function() {
      it('should call routeDynamicQosIdDelete successfully', function(done) {
        //uncomment below and update the code to test routeDynamicQosIdDelete
        //instance.routeDynamicQosIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicQosIdGet', function() {
      it('should call routeDynamicQosIdGet successfully', function(done) {
        //uncomment below and update the code to test routeDynamicQosIdGet
        //instance.routeDynamicQosIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeDynamicQosIdPatch', function() {
      it('should call routeDynamicQosIdPatch successfully', function(done) {
        //uncomment below and update the code to test routeDynamicQosIdPatch
        //instance.routeDynamicQosIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeListGet', function() {
      it('should call routeListGet successfully', function(done) {
        //uncomment below and update the code to test routeListGet
        //instance.routeListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routePlanListGet', function() {
      it('should call routePlanListGet successfully', function(done) {
        //uncomment below and update the code to test routePlanListGet
        //instance.routePlanListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routePlanPost', function() {
      it('should call routePlanPost successfully', function(done) {
        //uncomment below and update the code to test routePlanPost
        //instance.routePlanPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routePlanRoutePlanIdAddRoutePost', function() {
      it('should call routePlanRoutePlanIdAddRoutePost successfully', function(done) {
        //uncomment below and update the code to test routePlanRoutePlanIdAddRoutePost
        //instance.routePlanRoutePlanIdAddRoutePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routePlanRoutePlanIdDelete', function() {
      it('should call routePlanRoutePlanIdDelete successfully', function(done) {
        //uncomment below and update the code to test routePlanRoutePlanIdDelete
        //instance.routePlanRoutePlanIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routePlanRoutePlanIdGet', function() {
      it('should call routePlanRoutePlanIdGet successfully', function(done) {
        //uncomment below and update the code to test routePlanRoutePlanIdGet
        //instance.routePlanRoutePlanIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routePlanRoutePlanIdListRoutesGet', function() {
      it('should call routePlanRoutePlanIdListRoutesGet successfully', function(done) {
        //uncomment below and update the code to test routePlanRoutePlanIdListRoutesGet
        //instance.routePlanRoutePlanIdListRoutesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routePlanRoutePlanIdPatch', function() {
      it('should call routePlanRoutePlanIdPatch successfully', function(done) {
        //uncomment below and update the code to test routePlanRoutePlanIdPatch
        //instance.routePlanRoutePlanIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeRouteIdDelete', function() {
      it('should call routeRouteIdDelete successfully', function(done) {
        //uncomment below and update the code to test routeRouteIdDelete
        //instance.routeRouteIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeRouteIdGet', function() {
      it('should call routeRouteIdGet successfully', function(done) {
        //uncomment below and update the code to test routeRouteIdGet
        //instance.routeRouteIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeRouteIdPatch', function() {
      it('should call routeRouteIdPatch successfully', function(done) {
        //uncomment below and update the code to test routeRouteIdPatch
        //instance.routeRouteIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeStaticCreatePost', function() {
      it('should call routeStaticCreatePost successfully', function(done) {
        //uncomment below and update the code to test routeStaticCreatePost
        //instance.routeStaticCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeStaticItemItemIdDelete', function() {
      it('should call routeStaticItemItemIdDelete successfully', function(done) {
        //uncomment below and update the code to test routeStaticItemItemIdDelete
        //instance.routeStaticItemItemIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeStaticItemItemIdGet', function() {
      it('should call routeStaticItemItemIdGet successfully', function(done) {
        //uncomment below and update the code to test routeStaticItemItemIdGet
        //instance.routeStaticItemItemIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeStaticItemItemIdPatch', function() {
      it('should call routeStaticItemItemIdPatch successfully', function(done) {
        //uncomment below and update the code to test routeStaticItemItemIdPatch
        //instance.routeStaticItemItemIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeStaticListGet', function() {
      it('should call routeStaticListGet successfully', function(done) {
        //uncomment below and update the code to test routeStaticListGet
        //instance.routeStaticListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeStaticStaticRouteIdDelete', function() {
      it('should call routeStaticStaticRouteIdDelete successfully', function(done) {
        //uncomment below and update the code to test routeStaticStaticRouteIdDelete
        //instance.routeStaticStaticRouteIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeStaticStaticRouteIdGet', function() {
      it('should call routeStaticStaticRouteIdGet successfully', function(done) {
        //uncomment below and update the code to test routeStaticStaticRouteIdGet
        //instance.routeStaticStaticRouteIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeStaticStaticRouteIdItemCreatePost', function() {
      it('should call routeStaticStaticRouteIdItemCreatePost successfully', function(done) {
        //uncomment below and update the code to test routeStaticStaticRouteIdItemCreatePost
        //instance.routeStaticStaticRouteIdItemCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeStaticStaticRouteIdItemListGet', function() {
      it('should call routeStaticStaticRouteIdItemListGet successfully', function(done) {
        //uncomment below and update the code to test routeStaticStaticRouteIdItemListGet
        //instance.routeStaticStaticRouteIdItemListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('routeStaticStaticRouteIdPatch', function() {
      it('should call routeStaticStaticRouteIdPatch successfully', function(done) {
        //uncomment below and update the code to test routeStaticStaticRouteIdPatch
        //instance.routeStaticStaticRouteIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
