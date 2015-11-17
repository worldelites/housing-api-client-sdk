(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name housingApiServices
 * @module
 * @description
 *
 * The `housingApiServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("housingApiServices", ['ngResource']);

/**
 * @ngdoc object
 * @name housingApiServices.User
 * @header housingApiServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name housingApiServices.User#prototype$__findById__accessTokens
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#prototype$__destroyById__accessTokens
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#prototype$__updateById__accessTokens
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.likeApartments.findById() instead.
        "prototype$__findById__likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.likeApartments.destroyById() instead.
        "prototype$__destroyById__likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.likeApartments.updateById() instead.
        "prototype$__updateById__likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.likeApartments.link() instead.
        "prototype$__link__likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.likeApartments.unlink() instead.
        "prototype$__unlink__likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.likeApartments.exists() instead.
        "prototype$__exists__likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.couponApartments.findById() instead.
        "prototype$__findById__couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.couponApartments.destroyById() instead.
        "prototype$__destroyById__couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.couponApartments.updateById() instead.
        "prototype$__updateById__couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.couponApartments.link() instead.
        "prototype$__link__couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.couponApartments.unlink() instead.
        "prototype$__unlink__couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.couponApartments.exists() instead.
        "prototype$__exists__couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#prototype$__get__accessTokens
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Queries accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#prototype$__create__accessTokens
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#prototype$__delete__accessTokens
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#prototype$__count__accessTokens
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Counts accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use User.likeApartments() instead.
        "prototype$__get__likeApartments": {
          isArray: true,
          url: urlBase + "/users/:id/likeApartments",
          method: "GET"
        },

        // INTERNAL. Use User.likeApartments.create() instead.
        "prototype$__create__likeApartments": {
          url: urlBase + "/users/:id/likeApartments",
          method: "POST"
        },

        // INTERNAL. Use User.likeApartments.destroyAll() instead.
        "prototype$__delete__likeApartments": {
          url: urlBase + "/users/:id/likeApartments",
          method: "DELETE"
        },

        // INTERNAL. Use User.likeApartments.count() instead.
        "prototype$__count__likeApartments": {
          url: urlBase + "/users/:id/likeApartments/count",
          method: "GET"
        },

        // INTERNAL. Use User.couponApartments() instead.
        "prototype$__get__couponApartments": {
          isArray: true,
          url: urlBase + "/users/:id/couponApartments",
          method: "GET"
        },

        // INTERNAL. Use User.couponApartments.create() instead.
        "prototype$__create__couponApartments": {
          url: urlBase + "/users/:id/couponApartments",
          method: "POST"
        },

        // INTERNAL. Use User.couponApartments.destroyAll() instead.
        "prototype$__delete__couponApartments": {
          url: urlBase + "/users/:id/couponApartments",
          method: "DELETE"
        },

        // INTERNAL. Use User.couponApartments.count() instead.
        "prototype$__count__couponApartments": {
          url: urlBase + "/users/:id/couponApartments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#create
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#createMany
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#upsert
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#exists
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#findById
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#find
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#findOne
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#updateAll
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#deleteById
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#count
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#prototype$updateAttributes
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#createChangeStream
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#login
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#logout
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#confirm
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#resetPassword
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#export
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `type` – `{string}` - the exported file type.
         *
         *  - `include` – `{*=}` - the list of ids that will be exported
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "export": {
          url: urlBase + "/users/export/:type",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#changePassword
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `id` – `{string}` - the user id
         *
         *  - `current` – `{string}` - the current password
         *
         *  - `new` – `{string}` - the new password
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "changePassword": {
          url: urlBase + "/users/:id/change-password",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#sendEmail
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `to` – `{*}` - the emails to send to
         *
         *  - `subject` – `{string=}` - the subject of email
         *
         *  - `body` – `{string=}` - the body of email
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "sendEmail": {
          url: urlBase + "/users/sendEmail",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#passwordReset
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "passwordReset": {
          url: urlBase + "/users/reset-password",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#activateUser
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `id` – `{string}` - the user id
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "activateUser": {
          url: urlBase + "/users/activate",
          method: "POST"
        },

        // INTERNAL. Use Apartment.likeUsers.findById() instead.
        "::findById::apartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Apartment.likeUsers.destroyById() instead.
        "::destroyById::apartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.likeUsers.updateById() instead.
        "::updateById::apartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.likeUsers.link() instead.
        "::link::apartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.likeUsers.unlink() instead.
        "::unlink::apartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.likeUsers.exists() instead.
        "::exists::apartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Apartment.couponUsers.findById() instead.
        "::findById::apartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Apartment.couponUsers.destroyById() instead.
        "::destroyById::apartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.couponUsers.updateById() instead.
        "::updateById::apartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.couponUsers.link() instead.
        "::link::apartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.couponUsers.unlink() instead.
        "::unlink::apartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.couponUsers.exists() instead.
        "::exists::apartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Apartment.likeUsers() instead.
        "::get::apartment::likeUsers": {
          isArray: true,
          url: urlBase + "/apartments/:id/likeUsers",
          method: "GET"
        },

        // INTERNAL. Use Apartment.likeUsers.create() instead.
        "::create::apartment::likeUsers": {
          url: urlBase + "/apartments/:id/likeUsers",
          method: "POST"
        },

        // INTERNAL. Use Apartment.likeUsers.createMany() instead.
        "::createMany::apartment::likeUsers": {
          isArray: true,
          url: urlBase + "/apartments/:id/likeUsers",
          method: "POST"
        },

        // INTERNAL. Use Apartment.likeUsers.destroyAll() instead.
        "::delete::apartment::likeUsers": {
          url: urlBase + "/apartments/:id/likeUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.likeUsers.count() instead.
        "::count::apartment::likeUsers": {
          url: urlBase + "/apartments/:id/likeUsers/count",
          method: "GET"
        },

        // INTERNAL. Use Apartment.couponUsers() instead.
        "::get::apartment::couponUsers": {
          isArray: true,
          url: urlBase + "/apartments/:id/couponUsers",
          method: "GET"
        },

        // INTERNAL. Use Apartment.couponUsers.create() instead.
        "::create::apartment::couponUsers": {
          url: urlBase + "/apartments/:id/couponUsers",
          method: "POST"
        },

        // INTERNAL. Use Apartment.couponUsers.createMany() instead.
        "::createMany::apartment::couponUsers": {
          isArray: true,
          url: urlBase + "/apartments/:id/couponUsers",
          method: "POST"
        },

        // INTERNAL. Use Apartment.couponUsers.destroyAll() instead.
        "::delete::apartment::couponUsers": {
          url: urlBase + "/apartments/:id/couponUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.couponUsers.count() instead.
        "::count::apartment::couponUsers": {
          url: urlBase + "/apartments/:id/couponUsers/count",
          method: "GET"
        },

        // INTERNAL. Use LikeApartment.user() instead.
        "::get::likeApartment::user": {
          url: urlBase + "/likeApartments/:id/user",
          method: "GET"
        },

        // INTERNAL. Use CouponApartment.user() instead.
        "::get::couponApartment::user": {
          url: urlBase + "/couponApartments/:id/user",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.findById() instead.
        "::findById::crawledApartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.destroyById() instead.
        "::destroyById::crawledApartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.updateById() instead.
        "::updateById::crawledApartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.link() instead.
        "::link::crawledApartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.unlink() instead.
        "::unlink::crawledApartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.exists() instead.
        "::exists::crawledApartment::likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.findById() instead.
        "::findById::crawledApartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.destroyById() instead.
        "::destroyById::crawledApartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.updateById() instead.
        "::updateById::crawledApartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.link() instead.
        "::link::crawledApartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.unlink() instead.
        "::unlink::crawledApartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.exists() instead.
        "::exists::crawledApartment::couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use CrawledApartment.likeUsers() instead.
        "::get::crawledApartment::likeUsers": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/likeUsers",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.create() instead.
        "::create::crawledApartment::likeUsers": {
          url: urlBase + "/crawledApartments/:id/likeUsers",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.createMany() instead.
        "::createMany::crawledApartment::likeUsers": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/likeUsers",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.destroyAll() instead.
        "::delete::crawledApartment::likeUsers": {
          url: urlBase + "/crawledApartments/:id/likeUsers",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.count() instead.
        "::count::crawledApartment::likeUsers": {
          url: urlBase + "/crawledApartments/:id/likeUsers/count",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.couponUsers() instead.
        "::get::crawledApartment::couponUsers": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/couponUsers",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.create() instead.
        "::create::crawledApartment::couponUsers": {
          url: urlBase + "/crawledApartments/:id/couponUsers",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.createMany() instead.
        "::createMany::crawledApartment::couponUsers": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/couponUsers",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.destroyAll() instead.
        "::delete::crawledApartment::couponUsers": {
          url: urlBase + "/crawledApartments/:id/couponUsers",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.count() instead.
        "::count::crawledApartment::couponUsers": {
          url: urlBase + "/crawledApartments/:id/couponUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.User#getCurrent
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.User#updateOrCreate
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.User#update
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.User#destroyById
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.User#removeById
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.User#getCachedCurrent
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link housingApiServices.User#login} or
         * {@link housingApiServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User#isAuthenticated
         * @methodOf housingApiServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User#getCurrentId
         * @methodOf housingApiServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name housingApiServices.User#modelName
    * @propertyOf housingApiServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";

    /**
     * @ngdoc object
     * @name housingApiServices.User.likeApartments
     * @header housingApiServices.User.likeApartments
     * @object
     * @description
     *
     * The object `User.likeApartments` groups methods
     * manipulating `Apartment` instances related to `User`.
     *
     * Call {@link housingApiServices.User#likeApartments User.likeApartments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.User#likeApartments
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Queries likeApartments of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.likeApartments = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::get::user::likeApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.likeApartments#count
         * @methodOf housingApiServices.User.likeApartments
         *
         * @description
         *
         * Counts likeApartments of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.likeApartments.count = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::count::user::likeApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.likeApartments#create
         * @methodOf housingApiServices.User.likeApartments
         *
         * @description
         *
         * Creates a new instance in likeApartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.likeApartments.create = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::create::user::likeApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.likeApartments#createMany
         * @methodOf housingApiServices.User.likeApartments
         *
         * @description
         *
         * Creates a new instance in likeApartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.likeApartments.createMany = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::createMany::user::likeApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.likeApartments#destroyAll
         * @methodOf housingApiServices.User.likeApartments
         *
         * @description
         *
         * Deletes all likeApartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likeApartments.destroyAll = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::delete::user::likeApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.likeApartments#destroyById
         * @methodOf housingApiServices.User.likeApartments
         *
         * @description
         *
         * Delete a related item by id for likeApartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likeApartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likeApartments.destroyById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::destroyById::user::likeApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.likeApartments#exists
         * @methodOf housingApiServices.User.likeApartments
         *
         * @description
         *
         * Check the existence of likeApartments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likeApartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.likeApartments.exists = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::exists::user::likeApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.likeApartments#findById
         * @methodOf housingApiServices.User.likeApartments
         *
         * @description
         *
         * Find a related item by id for likeApartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likeApartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.likeApartments.findById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::findById::user::likeApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.likeApartments#link
         * @methodOf housingApiServices.User.likeApartments
         *
         * @description
         *
         * Add a related item by id for likeApartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likeApartments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.likeApartments.link = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::link::user::likeApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.likeApartments#unlink
         * @methodOf housingApiServices.User.likeApartments
         *
         * @description
         *
         * Remove the likeApartments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likeApartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likeApartments.unlink = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::unlink::user::likeApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.likeApartments#updateById
         * @methodOf housingApiServices.User.likeApartments
         *
         * @description
         *
         * Update a related item by id for likeApartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likeApartments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.likeApartments.updateById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::updateById::user::likeApartments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name housingApiServices.User.couponApartments
     * @header housingApiServices.User.couponApartments
     * @object
     * @description
     *
     * The object `User.couponApartments` groups methods
     * manipulating `Apartment` instances related to `User`.
     *
     * Call {@link housingApiServices.User#couponApartments User.couponApartments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.User#couponApartments
         * @methodOf housingApiServices.User
         *
         * @description
         *
         * Queries couponApartments of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.couponApartments = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::get::user::couponApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.couponApartments#count
         * @methodOf housingApiServices.User.couponApartments
         *
         * @description
         *
         * Counts couponApartments of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.couponApartments.count = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::count::user::couponApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.couponApartments#create
         * @methodOf housingApiServices.User.couponApartments
         *
         * @description
         *
         * Creates a new instance in couponApartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.couponApartments.create = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::create::user::couponApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.couponApartments#createMany
         * @methodOf housingApiServices.User.couponApartments
         *
         * @description
         *
         * Creates a new instance in couponApartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.couponApartments.createMany = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::createMany::user::couponApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.couponApartments#destroyAll
         * @methodOf housingApiServices.User.couponApartments
         *
         * @description
         *
         * Deletes all couponApartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.couponApartments.destroyAll = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::delete::user::couponApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.couponApartments#destroyById
         * @methodOf housingApiServices.User.couponApartments
         *
         * @description
         *
         * Delete a related item by id for couponApartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for couponApartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.couponApartments.destroyById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::destroyById::user::couponApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.couponApartments#exists
         * @methodOf housingApiServices.User.couponApartments
         *
         * @description
         *
         * Check the existence of couponApartments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for couponApartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.couponApartments.exists = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::exists::user::couponApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.couponApartments#findById
         * @methodOf housingApiServices.User.couponApartments
         *
         * @description
         *
         * Find a related item by id for couponApartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for couponApartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.couponApartments.findById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::findById::user::couponApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.couponApartments#link
         * @methodOf housingApiServices.User.couponApartments
         *
         * @description
         *
         * Add a related item by id for couponApartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for couponApartments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.couponApartments.link = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::link::user::couponApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.couponApartments#unlink
         * @methodOf housingApiServices.User.couponApartments
         *
         * @description
         *
         * Remove the couponApartments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for couponApartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.couponApartments.unlink = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::unlink::user::couponApartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.User.couponApartments#updateById
         * @methodOf housingApiServices.User.couponApartments
         *
         * @description
         *
         * Update a related item by id for couponApartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for couponApartments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.couponApartments.updateById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::updateById::user::couponApartments"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.Apartment
 * @header housingApiServices.Apartment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Apartment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Apartment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/apartments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Apartment.floorPlans.findById() instead.
        "prototype$__findById__floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/floorPlans/:fk",
          method: "GET"
        },

        // INTERNAL. Use Apartment.floorPlans.destroyById() instead.
        "prototype$__destroyById__floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/floorPlans/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.floorPlans.updateById() instead.
        "prototype$__updateById__floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/floorPlans/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.tags.findById() instead.
        "prototype$__findById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Apartment.tags.destroyById() instead.
        "prototype$__destroyById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.tags.updateById() instead.
        "prototype$__updateById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.tags.link() instead.
        "prototype$__link__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.tags.unlink() instead.
        "prototype$__unlink__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.tags.exists() instead.
        "prototype$__exists__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Apartment.likeUsers.findById() instead.
        "prototype$__findById__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Apartment.likeUsers.destroyById() instead.
        "prototype$__destroyById__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.likeUsers.updateById() instead.
        "prototype$__updateById__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.likeUsers.link() instead.
        "prototype$__link__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.likeUsers.unlink() instead.
        "prototype$__unlink__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.likeUsers.exists() instead.
        "prototype$__exists__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/likeUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Apartment.couponUsers.findById() instead.
        "prototype$__findById__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Apartment.couponUsers.destroyById() instead.
        "prototype$__destroyById__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.couponUsers.updateById() instead.
        "prototype$__updateById__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.couponUsers.link() instead.
        "prototype$__link__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.couponUsers.unlink() instead.
        "prototype$__unlink__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.couponUsers.exists() instead.
        "prototype$__exists__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/couponUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Apartment.universities.findById() instead.
        "prototype$__findById__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Apartment.universities.destroyById() instead.
        "prototype$__destroyById__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.universities.updateById() instead.
        "prototype$__updateById__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.universities.link() instead.
        "prototype$__link__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.universities.unlink() instead.
        "prototype$__unlink__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.universities.exists() instead.
        "prototype$__exists__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Apartment.floorPlans() instead.
        "prototype$__get__floorPlans": {
          isArray: true,
          url: urlBase + "/apartments/:id/floorPlans",
          method: "GET"
        },

        // INTERNAL. Use Apartment.floorPlans.create() instead.
        "prototype$__create__floorPlans": {
          url: urlBase + "/apartments/:id/floorPlans",
          method: "POST"
        },

        // INTERNAL. Use Apartment.floorPlans.destroyAll() instead.
        "prototype$__delete__floorPlans": {
          url: urlBase + "/apartments/:id/floorPlans",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.floorPlans.count() instead.
        "prototype$__count__floorPlans": {
          url: urlBase + "/apartments/:id/floorPlans/count",
          method: "GET"
        },

        // INTERNAL. Use Apartment.tags() instead.
        "prototype$__get__tags": {
          isArray: true,
          url: urlBase + "/apartments/:id/tags",
          method: "GET"
        },

        // INTERNAL. Use Apartment.tags.create() instead.
        "prototype$__create__tags": {
          url: urlBase + "/apartments/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Apartment.tags.destroyAll() instead.
        "prototype$__delete__tags": {
          url: urlBase + "/apartments/:id/tags",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.tags.count() instead.
        "prototype$__count__tags": {
          url: urlBase + "/apartments/:id/tags/count",
          method: "GET"
        },

        // INTERNAL. Use Apartment.likeUsers() instead.
        "prototype$__get__likeUsers": {
          isArray: true,
          url: urlBase + "/apartments/:id/likeUsers",
          method: "GET"
        },

        // INTERNAL. Use Apartment.likeUsers.create() instead.
        "prototype$__create__likeUsers": {
          url: urlBase + "/apartments/:id/likeUsers",
          method: "POST"
        },

        // INTERNAL. Use Apartment.likeUsers.destroyAll() instead.
        "prototype$__delete__likeUsers": {
          url: urlBase + "/apartments/:id/likeUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.likeUsers.count() instead.
        "prototype$__count__likeUsers": {
          url: urlBase + "/apartments/:id/likeUsers/count",
          method: "GET"
        },

        // INTERNAL. Use Apartment.couponUsers() instead.
        "prototype$__get__couponUsers": {
          isArray: true,
          url: urlBase + "/apartments/:id/couponUsers",
          method: "GET"
        },

        // INTERNAL. Use Apartment.couponUsers.create() instead.
        "prototype$__create__couponUsers": {
          url: urlBase + "/apartments/:id/couponUsers",
          method: "POST"
        },

        // INTERNAL. Use Apartment.couponUsers.destroyAll() instead.
        "prototype$__delete__couponUsers": {
          url: urlBase + "/apartments/:id/couponUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.couponUsers.count() instead.
        "prototype$__count__couponUsers": {
          url: urlBase + "/apartments/:id/couponUsers/count",
          method: "GET"
        },

        // INTERNAL. Use Apartment.universities() instead.
        "prototype$__get__universities": {
          isArray: true,
          url: urlBase + "/apartments/:id/universities",
          method: "GET"
        },

        // INTERNAL. Use Apartment.universities.create() instead.
        "prototype$__create__universities": {
          url: urlBase + "/apartments/:id/universities",
          method: "POST"
        },

        // INTERNAL. Use Apartment.universities.destroyAll() instead.
        "prototype$__delete__universities": {
          url: urlBase + "/apartments/:id/universities",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.universities.count() instead.
        "prototype$__count__universities": {
          url: urlBase + "/apartments/:id/universities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#create
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/apartments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#createMany
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/apartments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#upsert
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/apartments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#exists
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/apartments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#findById
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/apartments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#find
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/apartments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#findOne
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/apartments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#updateAll
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/apartments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#deleteById
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/apartments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#count
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/apartments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#prototype$updateAttributes
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/apartments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#createChangeStream
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/apartments/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#export
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `type` – `{string}` - the exported file type.
         *
         *  - `include` – `{*=}` - the list of ids that will be exported
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "export": {
          url: urlBase + "/apartments/export/:type",
          method: "GET"
        },

        // INTERNAL. Use User.likeApartments.findById() instead.
        "::findById::user::likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.likeApartments.destroyById() instead.
        "::destroyById::user::likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.likeApartments.updateById() instead.
        "::updateById::user::likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.likeApartments.link() instead.
        "::link::user::likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.likeApartments.unlink() instead.
        "::unlink::user::likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.likeApartments.exists() instead.
        "::exists::user::likeApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/likeApartments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.couponApartments.findById() instead.
        "::findById::user::couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.couponApartments.destroyById() instead.
        "::destroyById::user::couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.couponApartments.updateById() instead.
        "::updateById::user::couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.couponApartments.link() instead.
        "::link::user::couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.couponApartments.unlink() instead.
        "::unlink::user::couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.couponApartments.exists() instead.
        "::exists::user::couponApartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/couponApartments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.likeApartments() instead.
        "::get::user::likeApartments": {
          isArray: true,
          url: urlBase + "/users/:id/likeApartments",
          method: "GET"
        },

        // INTERNAL. Use User.likeApartments.create() instead.
        "::create::user::likeApartments": {
          url: urlBase + "/users/:id/likeApartments",
          method: "POST"
        },

        // INTERNAL. Use User.likeApartments.createMany() instead.
        "::createMany::user::likeApartments": {
          isArray: true,
          url: urlBase + "/users/:id/likeApartments",
          method: "POST"
        },

        // INTERNAL. Use User.likeApartments.destroyAll() instead.
        "::delete::user::likeApartments": {
          url: urlBase + "/users/:id/likeApartments",
          method: "DELETE"
        },

        // INTERNAL. Use User.likeApartments.count() instead.
        "::count::user::likeApartments": {
          url: urlBase + "/users/:id/likeApartments/count",
          method: "GET"
        },

        // INTERNAL. Use User.couponApartments() instead.
        "::get::user::couponApartments": {
          isArray: true,
          url: urlBase + "/users/:id/couponApartments",
          method: "GET"
        },

        // INTERNAL. Use User.couponApartments.create() instead.
        "::create::user::couponApartments": {
          url: urlBase + "/users/:id/couponApartments",
          method: "POST"
        },

        // INTERNAL. Use User.couponApartments.createMany() instead.
        "::createMany::user::couponApartments": {
          isArray: true,
          url: urlBase + "/users/:id/couponApartments",
          method: "POST"
        },

        // INTERNAL. Use User.couponApartments.destroyAll() instead.
        "::delete::user::couponApartments": {
          url: urlBase + "/users/:id/couponApartments",
          method: "DELETE"
        },

        // INTERNAL. Use User.couponApartments.count() instead.
        "::count::user::couponApartments": {
          url: urlBase + "/users/:id/couponApartments/count",
          method: "GET"
        },

        // INTERNAL. Use Tag.apartments.findById() instead.
        "::findById::tag::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.apartments.destroyById() instead.
        "::destroyById::tag::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.apartments.updateById() instead.
        "::updateById::tag::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.apartments.link() instead.
        "::link::tag::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.apartments.unlink() instead.
        "::unlink::tag::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.apartments.exists() instead.
        "::exists::tag::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Tag.apartments() instead.
        "::get::tag::apartments": {
          isArray: true,
          url: urlBase + "/tags/:id/apartments",
          method: "GET"
        },

        // INTERNAL. Use Tag.apartments.create() instead.
        "::create::tag::apartments": {
          url: urlBase + "/tags/:id/apartments",
          method: "POST"
        },

        // INTERNAL. Use Tag.apartments.createMany() instead.
        "::createMany::tag::apartments": {
          isArray: true,
          url: urlBase + "/tags/:id/apartments",
          method: "POST"
        },

        // INTERNAL. Use Tag.apartments.destroyAll() instead.
        "::delete::tag::apartments": {
          url: urlBase + "/tags/:id/apartments",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.apartments.count() instead.
        "::count::tag::apartments": {
          url: urlBase + "/tags/:id/apartments/count",
          method: "GET"
        },

        // INTERNAL. Use FloorPlan.apartment() instead.
        "::get::floorPlan::apartment": {
          url: urlBase + "/floorPlans/:id/apartment",
          method: "GET"
        },

        // INTERNAL. Use ApartmentTag.apartment() instead.
        "::get::apartmentTag::apartment": {
          url: urlBase + "/apartmentTags/:id/apartment",
          method: "GET"
        },

        // INTERNAL. Use ApartmentUniv.apartment() instead.
        "::get::apartmentUniv::apartment": {
          url: urlBase + "/apartmentUnivs/:id/apartment",
          method: "GET"
        },

        // INTERNAL. Use LikeApartment.apartment() instead.
        "::get::likeApartment::apartment": {
          url: urlBase + "/likeApartments/:id/apartment",
          method: "GET"
        },

        // INTERNAL. Use CouponApartment.apartment() instead.
        "::get::couponApartment::apartment": {
          url: urlBase + "/couponApartments/:id/apartment",
          method: "GET"
        },

        // INTERNAL. Use University.apartments.findById() instead.
        "::findById::university::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/:fk",
          method: "GET"
        },

        // INTERNAL. Use University.apartments.destroyById() instead.
        "::destroyById::university::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.apartments.updateById() instead.
        "::updateById::university::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.apartments.link() instead.
        "::link::university::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.apartments.unlink() instead.
        "::unlink::university::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.apartments.exists() instead.
        "::exists::university::apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use University.apartments() instead.
        "::get::university::apartments": {
          isArray: true,
          url: urlBase + "/universities/:id/apartments",
          method: "GET"
        },

        // INTERNAL. Use University.apartments.create() instead.
        "::create::university::apartments": {
          url: urlBase + "/universities/:id/apartments",
          method: "POST"
        },

        // INTERNAL. Use University.apartments.createMany() instead.
        "::createMany::university::apartments": {
          isArray: true,
          url: urlBase + "/universities/:id/apartments",
          method: "POST"
        },

        // INTERNAL. Use University.apartments.destroyAll() instead.
        "::delete::university::apartments": {
          url: urlBase + "/universities/:id/apartments",
          method: "DELETE"
        },

        // INTERNAL. Use University.apartments.count() instead.
        "::count::university::apartments": {
          url: urlBase + "/universities/:id/apartments/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#updateOrCreate
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#update
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#destroyById
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#removeById
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name housingApiServices.Apartment#modelName
    * @propertyOf housingApiServices.Apartment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Apartment`.
    */
    R.modelName = "Apartment";

    /**
     * @ngdoc object
     * @name housingApiServices.Apartment.floorPlans
     * @header housingApiServices.Apartment.floorPlans
     * @object
     * @description
     *
     * The object `Apartment.floorPlans` groups methods
     * manipulating `FloorPlan` instances related to `Apartment`.
     *
     * Call {@link housingApiServices.Apartment#floorPlans Apartment.floorPlans()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#floorPlans
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Queries floorPlans of apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R.floorPlans = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::get::apartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.floorPlans#count
         * @methodOf housingApiServices.Apartment.floorPlans
         *
         * @description
         *
         * Counts floorPlans of apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.floorPlans.count = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::count::apartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.floorPlans#create
         * @methodOf housingApiServices.Apartment.floorPlans
         *
         * @description
         *
         * Creates a new instance in floorPlans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R.floorPlans.create = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::create::apartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.floorPlans#createMany
         * @methodOf housingApiServices.Apartment.floorPlans
         *
         * @description
         *
         * Creates a new instance in floorPlans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R.floorPlans.createMany = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::createMany::apartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.floorPlans#destroyAll
         * @methodOf housingApiServices.Apartment.floorPlans
         *
         * @description
         *
         * Deletes all floorPlans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.floorPlans.destroyAll = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::delete::apartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.floorPlans#destroyById
         * @methodOf housingApiServices.Apartment.floorPlans
         *
         * @description
         *
         * Delete a related item by id for floorPlans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for floorPlans
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.floorPlans.destroyById = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::destroyById::apartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.floorPlans#findById
         * @methodOf housingApiServices.Apartment.floorPlans
         *
         * @description
         *
         * Find a related item by id for floorPlans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for floorPlans
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R.floorPlans.findById = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::findById::apartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.floorPlans#updateById
         * @methodOf housingApiServices.Apartment.floorPlans
         *
         * @description
         *
         * Update a related item by id for floorPlans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for floorPlans
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R.floorPlans.updateById = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::updateById::apartment::floorPlans"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name housingApiServices.Apartment.tags
     * @header housingApiServices.Apartment.tags
     * @object
     * @description
     *
     * The object `Apartment.tags` groups methods
     * manipulating `Tag` instances related to `Apartment`.
     *
     * Call {@link housingApiServices.Apartment#tags Apartment.tags()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#tags
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Queries tags of apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::get::apartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.tags#count
         * @methodOf housingApiServices.Apartment.tags
         *
         * @description
         *
         * Counts tags of apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tags.count = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::count::apartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.tags#create
         * @methodOf housingApiServices.Apartment.tags
         *
         * @description
         *
         * Creates a new instance in tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.create = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::create::apartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.tags#createMany
         * @methodOf housingApiServices.Apartment.tags
         *
         * @description
         *
         * Creates a new instance in tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.createMany = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::createMany::apartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.tags#destroyAll
         * @methodOf housingApiServices.Apartment.tags
         *
         * @description
         *
         * Deletes all tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.destroyAll = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::delete::apartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.tags#destroyById
         * @methodOf housingApiServices.Apartment.tags
         *
         * @description
         *
         * Delete a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.destroyById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::destroyById::apartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.tags#exists
         * @methodOf housingApiServices.Apartment.tags
         *
         * @description
         *
         * Check the existence of tags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.exists = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::exists::apartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.tags#findById
         * @methodOf housingApiServices.Apartment.tags
         *
         * @description
         *
         * Find a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.findById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::findById::apartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.tags#link
         * @methodOf housingApiServices.Apartment.tags
         *
         * @description
         *
         * Add a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.link = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::link::apartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.tags#unlink
         * @methodOf housingApiServices.Apartment.tags
         *
         * @description
         *
         * Remove the tags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.unlink = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::unlink::apartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.tags#updateById
         * @methodOf housingApiServices.Apartment.tags
         *
         * @description
         *
         * Update a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.updateById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::updateById::apartment::tags"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name housingApiServices.Apartment.likeUsers
     * @header housingApiServices.Apartment.likeUsers
     * @object
     * @description
     *
     * The object `Apartment.likeUsers` groups methods
     * manipulating `User` instances related to `Apartment`.
     *
     * Call {@link housingApiServices.Apartment#likeUsers Apartment.likeUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#likeUsers
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Queries likeUsers of apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::apartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.likeUsers#count
         * @methodOf housingApiServices.Apartment.likeUsers
         *
         * @description
         *
         * Counts likeUsers of apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.likeUsers.count = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::count::apartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.likeUsers#create
         * @methodOf housingApiServices.Apartment.likeUsers
         *
         * @description
         *
         * Creates a new instance in likeUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::apartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.likeUsers#createMany
         * @methodOf housingApiServices.Apartment.likeUsers
         *
         * @description
         *
         * Creates a new instance in likeUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.createMany = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::createMany::apartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.likeUsers#destroyAll
         * @methodOf housingApiServices.Apartment.likeUsers
         *
         * @description
         *
         * Deletes all likeUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likeUsers.destroyAll = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::delete::apartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.likeUsers#destroyById
         * @methodOf housingApiServices.Apartment.likeUsers
         *
         * @description
         *
         * Delete a related item by id for likeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likeUsers.destroyById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroyById::apartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.likeUsers#exists
         * @methodOf housingApiServices.Apartment.likeUsers
         *
         * @description
         *
         * Check the existence of likeUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.exists = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::exists::apartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.likeUsers#findById
         * @methodOf housingApiServices.Apartment.likeUsers
         *
         * @description
         *
         * Find a related item by id for likeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.findById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::findById::apartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.likeUsers#link
         * @methodOf housingApiServices.Apartment.likeUsers
         *
         * @description
         *
         * Add a related item by id for likeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.link = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::link::apartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.likeUsers#unlink
         * @methodOf housingApiServices.Apartment.likeUsers
         *
         * @description
         *
         * Remove the likeUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likeUsers.unlink = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::unlink::apartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.likeUsers#updateById
         * @methodOf housingApiServices.Apartment.likeUsers
         *
         * @description
         *
         * Update a related item by id for likeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.updateById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::updateById::apartment::likeUsers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name housingApiServices.Apartment.couponUsers
     * @header housingApiServices.Apartment.couponUsers
     * @object
     * @description
     *
     * The object `Apartment.couponUsers` groups methods
     * manipulating `User` instances related to `Apartment`.
     *
     * Call {@link housingApiServices.Apartment#couponUsers Apartment.couponUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#couponUsers
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Queries couponUsers of apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::apartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.couponUsers#count
         * @methodOf housingApiServices.Apartment.couponUsers
         *
         * @description
         *
         * Counts couponUsers of apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.couponUsers.count = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::count::apartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.couponUsers#create
         * @methodOf housingApiServices.Apartment.couponUsers
         *
         * @description
         *
         * Creates a new instance in couponUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::apartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.couponUsers#createMany
         * @methodOf housingApiServices.Apartment.couponUsers
         *
         * @description
         *
         * Creates a new instance in couponUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.createMany = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::createMany::apartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.couponUsers#destroyAll
         * @methodOf housingApiServices.Apartment.couponUsers
         *
         * @description
         *
         * Deletes all couponUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.couponUsers.destroyAll = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::delete::apartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.couponUsers#destroyById
         * @methodOf housingApiServices.Apartment.couponUsers
         *
         * @description
         *
         * Delete a related item by id for couponUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.couponUsers.destroyById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroyById::apartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.couponUsers#exists
         * @methodOf housingApiServices.Apartment.couponUsers
         *
         * @description
         *
         * Check the existence of couponUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.exists = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::exists::apartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.couponUsers#findById
         * @methodOf housingApiServices.Apartment.couponUsers
         *
         * @description
         *
         * Find a related item by id for couponUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.findById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::findById::apartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.couponUsers#link
         * @methodOf housingApiServices.Apartment.couponUsers
         *
         * @description
         *
         * Add a related item by id for couponUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.link = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::link::apartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.couponUsers#unlink
         * @methodOf housingApiServices.Apartment.couponUsers
         *
         * @description
         *
         * Remove the couponUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.couponUsers.unlink = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::unlink::apartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.couponUsers#updateById
         * @methodOf housingApiServices.Apartment.couponUsers
         *
         * @description
         *
         * Update a related item by id for couponUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.updateById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::updateById::apartment::couponUsers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name housingApiServices.Apartment.universities
     * @header housingApiServices.Apartment.universities
     * @object
     * @description
     *
     * The object `Apartment.universities` groups methods
     * manipulating `University` instances related to `Apartment`.
     *
     * Call {@link housingApiServices.Apartment#universities Apartment.universities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.Apartment#universities
         * @methodOf housingApiServices.Apartment
         *
         * @description
         *
         * Queries universities of apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::get::apartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.universities#count
         * @methodOf housingApiServices.Apartment.universities
         *
         * @description
         *
         * Counts universities of apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.universities.count = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::count::apartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.universities#create
         * @methodOf housingApiServices.Apartment.universities
         *
         * @description
         *
         * Creates a new instance in universities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.create = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::create::apartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.universities#createMany
         * @methodOf housingApiServices.Apartment.universities
         *
         * @description
         *
         * Creates a new instance in universities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.createMany = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::createMany::apartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.universities#destroyAll
         * @methodOf housingApiServices.Apartment.universities
         *
         * @description
         *
         * Deletes all universities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.universities.destroyAll = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::delete::apartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.universities#destroyById
         * @methodOf housingApiServices.Apartment.universities
         *
         * @description
         *
         * Delete a related item by id for universities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.universities.destroyById = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::destroyById::apartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.universities#exists
         * @methodOf housingApiServices.Apartment.universities
         *
         * @description
         *
         * Check the existence of universities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.exists = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::exists::apartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.universities#findById
         * @methodOf housingApiServices.Apartment.universities
         *
         * @description
         *
         * Find a related item by id for universities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.findById = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::findById::apartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.universities#link
         * @methodOf housingApiServices.Apartment.universities
         *
         * @description
         *
         * Add a related item by id for universities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.link = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::link::apartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.universities#unlink
         * @methodOf housingApiServices.Apartment.universities
         *
         * @description
         *
         * Remove the universities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.universities.unlink = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::unlink::apartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Apartment.universities#updateById
         * @methodOf housingApiServices.Apartment.universities
         *
         * @description
         *
         * Update a related item by id for universities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.updateById = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::updateById::apartment::universities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.Tag
 * @header housingApiServices.Tag
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tag` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Tag",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/tags/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Tag.apartments.findById() instead.
        "prototype$__findById__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.apartments.destroyById() instead.
        "prototype$__destroyById__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.apartments.updateById() instead.
        "prototype$__updateById__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.apartments.link() instead.
        "prototype$__link__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.apartments.unlink() instead.
        "prototype$__unlink__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.apartments.exists() instead.
        "prototype$__exists__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/apartments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Tag.apartments() instead.
        "prototype$__get__apartments": {
          isArray: true,
          url: urlBase + "/tags/:id/apartments",
          method: "GET"
        },

        // INTERNAL. Use Tag.apartments.create() instead.
        "prototype$__create__apartments": {
          url: urlBase + "/tags/:id/apartments",
          method: "POST"
        },

        // INTERNAL. Use Tag.apartments.destroyAll() instead.
        "prototype$__delete__apartments": {
          url: urlBase + "/tags/:id/apartments",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.apartments.count() instead.
        "prototype$__count__apartments": {
          url: urlBase + "/tags/:id/apartments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#create
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/tags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#createMany
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/tags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#upsert
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/tags",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#exists
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/tags/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#findById
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/tags/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#find
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/tags",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#findOne
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/tags/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#updateAll
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/tags/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#deleteById
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/tags/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#count
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/tags/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#prototype$updateAttributes
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/tags/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#createChangeStream
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/tags/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Apartment.tags.findById() instead.
        "::findById::apartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Apartment.tags.destroyById() instead.
        "::destroyById::apartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.tags.updateById() instead.
        "::updateById::apartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.tags.link() instead.
        "::link::apartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.tags.unlink() instead.
        "::unlink::apartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.tags.exists() instead.
        "::exists::apartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/tags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Apartment.tags() instead.
        "::get::apartment::tags": {
          isArray: true,
          url: urlBase + "/apartments/:id/tags",
          method: "GET"
        },

        // INTERNAL. Use Apartment.tags.create() instead.
        "::create::apartment::tags": {
          url: urlBase + "/apartments/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Apartment.tags.createMany() instead.
        "::createMany::apartment::tags": {
          isArray: true,
          url: urlBase + "/apartments/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Apartment.tags.destroyAll() instead.
        "::delete::apartment::tags": {
          url: urlBase + "/apartments/:id/tags",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.tags.count() instead.
        "::count::apartment::tags": {
          url: urlBase + "/apartments/:id/tags/count",
          method: "GET"
        },

        // INTERNAL. Use ApartmentTag.tag() instead.
        "::get::apartmentTag::tag": {
          url: urlBase + "/apartmentTags/:id/tag",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.tags.findById() instead.
        "::findById::crawledApartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/:fk",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.tags.destroyById() instead.
        "::destroyById::crawledApartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.tags.updateById() instead.
        "::updateById::crawledApartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.tags.link() instead.
        "::link::crawledApartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.tags.unlink() instead.
        "::unlink::crawledApartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.tags.exists() instead.
        "::exists::crawledApartment::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use CrawledApartment.tags() instead.
        "::get::crawledApartment::tags": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/tags",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.tags.create() instead.
        "::create::crawledApartment::tags": {
          url: urlBase + "/crawledApartments/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.tags.createMany() instead.
        "::createMany::crawledApartment::tags": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.tags.destroyAll() instead.
        "::delete::crawledApartment::tags": {
          url: urlBase + "/crawledApartments/:id/tags",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.tags.count() instead.
        "::count::crawledApartment::tags": {
          url: urlBase + "/crawledApartments/:id/tags/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.Tag#updateOrCreate
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#update
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#destroyById
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.Tag#removeById
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name housingApiServices.Tag#modelName
    * @propertyOf housingApiServices.Tag
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Tag`.
    */
    R.modelName = "Tag";

    /**
     * @ngdoc object
     * @name housingApiServices.Tag.apartments
     * @header housingApiServices.Tag.apartments
     * @object
     * @description
     *
     * The object `Tag.apartments` groups methods
     * manipulating `Apartment` instances related to `Tag`.
     *
     * Call {@link housingApiServices.Tag#apartments Tag.apartments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.Tag#apartments
         * @methodOf housingApiServices.Tag
         *
         * @description
         *
         * Queries apartments of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::get::tag::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Tag.apartments#count
         * @methodOf housingApiServices.Tag.apartments
         *
         * @description
         *
         * Counts apartments of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.apartments.count = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::count::tag::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Tag.apartments#create
         * @methodOf housingApiServices.Tag.apartments
         *
         * @description
         *
         * Creates a new instance in apartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.create = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::create::tag::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Tag.apartments#createMany
         * @methodOf housingApiServices.Tag.apartments
         *
         * @description
         *
         * Creates a new instance in apartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.createMany = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::createMany::tag::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Tag.apartments#destroyAll
         * @methodOf housingApiServices.Tag.apartments
         *
         * @description
         *
         * Deletes all apartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.apartments.destroyAll = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::delete::tag::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Tag.apartments#destroyById
         * @methodOf housingApiServices.Tag.apartments
         *
         * @description
         *
         * Delete a related item by id for apartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.apartments.destroyById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::destroyById::tag::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Tag.apartments#exists
         * @methodOf housingApiServices.Tag.apartments
         *
         * @description
         *
         * Check the existence of apartments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.exists = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::exists::tag::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Tag.apartments#findById
         * @methodOf housingApiServices.Tag.apartments
         *
         * @description
         *
         * Find a related item by id for apartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.findById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::findById::tag::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Tag.apartments#link
         * @methodOf housingApiServices.Tag.apartments
         *
         * @description
         *
         * Add a related item by id for apartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.link = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::link::tag::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Tag.apartments#unlink
         * @methodOf housingApiServices.Tag.apartments
         *
         * @description
         *
         * Remove the apartments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.apartments.unlink = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::unlink::tag::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.Tag.apartments#updateById
         * @methodOf housingApiServices.Tag.apartments
         *
         * @description
         *
         * Update a related item by id for apartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.updateById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::updateById::tag::apartments"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.FloorPlan
 * @header housingApiServices.FloorPlan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FloorPlan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "FloorPlan",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/floorPlans/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use FloorPlan.apartment() instead.
        "prototype$__get__apartment": {
          url: urlBase + "/floorPlans/:id/apartment",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#create
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/floorPlans",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#createMany
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/floorPlans",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#upsert
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/floorPlans",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#exists
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/floorPlans/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#findById
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/floorPlans/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#find
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/floorPlans",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#findOne
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/floorPlans/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#updateAll
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/floorPlans/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#deleteById
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/floorPlans/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#count
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/floorPlans/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#prototype$updateAttributes
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/floorPlans/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#createChangeStream
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/floorPlans/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Apartment.floorPlans.findById() instead.
        "::findById::apartment::floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/floorPlans/:fk",
          method: "GET"
        },

        // INTERNAL. Use Apartment.floorPlans.destroyById() instead.
        "::destroyById::apartment::floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/floorPlans/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.floorPlans.updateById() instead.
        "::updateById::apartment::floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/floorPlans/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.floorPlans() instead.
        "::get::apartment::floorPlans": {
          isArray: true,
          url: urlBase + "/apartments/:id/floorPlans",
          method: "GET"
        },

        // INTERNAL. Use Apartment.floorPlans.create() instead.
        "::create::apartment::floorPlans": {
          url: urlBase + "/apartments/:id/floorPlans",
          method: "POST"
        },

        // INTERNAL. Use Apartment.floorPlans.createMany() instead.
        "::createMany::apartment::floorPlans": {
          isArray: true,
          url: urlBase + "/apartments/:id/floorPlans",
          method: "POST"
        },

        // INTERNAL. Use Apartment.floorPlans.destroyAll() instead.
        "::delete::apartment::floorPlans": {
          url: urlBase + "/apartments/:id/floorPlans",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.floorPlans.count() instead.
        "::count::apartment::floorPlans": {
          url: urlBase + "/apartments/:id/floorPlans/count",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.findById() instead.
        "::findById::crawledApartment::floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/floorPlans/:fk",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.destroyById() instead.
        "::destroyById::crawledApartment::floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/floorPlans/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.updateById() instead.
        "::updateById::crawledApartment::floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/floorPlans/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.floorPlans() instead.
        "::get::crawledApartment::floorPlans": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/floorPlans",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.create() instead.
        "::create::crawledApartment::floorPlans": {
          url: urlBase + "/crawledApartments/:id/floorPlans",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.createMany() instead.
        "::createMany::crawledApartment::floorPlans": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/floorPlans",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.destroyAll() instead.
        "::delete::crawledApartment::floorPlans": {
          url: urlBase + "/crawledApartments/:id/floorPlans",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.count() instead.
        "::count::crawledApartment::floorPlans": {
          url: urlBase + "/crawledApartments/:id/floorPlans/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#updateOrCreate
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#update
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#destroyById
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#removeById
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name housingApiServices.FloorPlan#modelName
    * @propertyOf housingApiServices.FloorPlan
    * @description
    * The name of the model represented by this $resource,
    * i.e. `FloorPlan`.
    */
    R.modelName = "FloorPlan";


        /**
         * @ngdoc method
         * @name housingApiServices.FloorPlan#apartment
         * @methodOf housingApiServices.FloorPlan
         *
         * @description
         *
         * Fetches belongsTo relation apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartment = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::get::floorPlan::apartment"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.ApartmentTag
 * @header housingApiServices.ApartmentTag
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ApartmentTag` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ApartmentTag",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/apartmentTags/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ApartmentTag.apartment() instead.
        "prototype$__get__apartment": {
          url: urlBase + "/apartmentTags/:id/apartment",
          method: "GET"
        },

        // INTERNAL. Use ApartmentTag.tag() instead.
        "prototype$__get__tag": {
          url: urlBase + "/apartmentTags/:id/tag",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#create
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentTag` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/apartmentTags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#createMany
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentTag` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/apartmentTags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#upsert
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentTag` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/apartmentTags",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#exists
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/apartmentTags/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#findById
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentTag` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/apartmentTags/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#find
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentTag` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/apartmentTags",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#findOne
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentTag` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/apartmentTags/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#updateAll
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/apartmentTags/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#deleteById
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/apartmentTags/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#count
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/apartmentTags/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#prototype$updateAttributes
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentTag` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/apartmentTags/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#createChangeStream
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/apartmentTags/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#updateOrCreate
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentTag` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#update
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#destroyById
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#removeById
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name housingApiServices.ApartmentTag#modelName
    * @propertyOf housingApiServices.ApartmentTag
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ApartmentTag`.
    */
    R.modelName = "ApartmentTag";


        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#apartment
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Fetches belongsTo relation apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartment = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::get::apartmentTag::apartment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentTag#tag
         * @methodOf housingApiServices.ApartmentTag
         *
         * @description
         *
         * Fetches belongsTo relation tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tag = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::get::apartmentTag::tag"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.ApartmentUniv
 * @header housingApiServices.ApartmentUniv
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ApartmentUniv` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ApartmentUniv",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/apartmentUnivs/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ApartmentUniv.apartment() instead.
        "prototype$__get__apartment": {
          url: urlBase + "/apartmentUnivs/:id/apartment",
          method: "GET"
        },

        // INTERNAL. Use ApartmentUniv.university() instead.
        "prototype$__get__university": {
          url: urlBase + "/apartmentUnivs/:id/university",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#create
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentUniv` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/apartmentUnivs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#createMany
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentUniv` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/apartmentUnivs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#upsert
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentUniv` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/apartmentUnivs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#exists
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/apartmentUnivs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#findById
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentUniv` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/apartmentUnivs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#find
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentUniv` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/apartmentUnivs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#findOne
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentUniv` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/apartmentUnivs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#updateAll
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/apartmentUnivs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#deleteById
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/apartmentUnivs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#count
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/apartmentUnivs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#prototype$updateAttributes
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentUniv` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/apartmentUnivs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#createChangeStream
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/apartmentUnivs/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#updateOrCreate
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ApartmentUniv` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#update
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#destroyById
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#removeById
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name housingApiServices.ApartmentUniv#modelName
    * @propertyOf housingApiServices.ApartmentUniv
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ApartmentUniv`.
    */
    R.modelName = "ApartmentUniv";


        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#apartment
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Fetches belongsTo relation apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartment = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::get::apartmentUniv::apartment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.ApartmentUniv#university
         * @methodOf housingApiServices.ApartmentUniv
         *
         * @description
         *
         * Fetches belongsTo relation university.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.university = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::get::apartmentUniv::university"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.LikeApartment
 * @header housingApiServices.LikeApartment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `LikeApartment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "LikeApartment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/likeApartments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use LikeApartment.apartment() instead.
        "prototype$__get__apartment": {
          url: urlBase + "/likeApartments/:id/apartment",
          method: "GET"
        },

        // INTERNAL. Use LikeApartment.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/likeApartments/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#create
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LikeApartment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/likeApartments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#createMany
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LikeApartment` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/likeApartments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#upsert
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LikeApartment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/likeApartments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#exists
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/likeApartments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#findById
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LikeApartment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/likeApartments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#find
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LikeApartment` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/likeApartments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#findOne
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LikeApartment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/likeApartments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#updateAll
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/likeApartments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#deleteById
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/likeApartments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#count
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/likeApartments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#prototype$updateAttributes
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LikeApartment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/likeApartments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#createChangeStream
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/likeApartments/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#updateOrCreate
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LikeApartment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#update
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#destroyById
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#removeById
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name housingApiServices.LikeApartment#modelName
    * @propertyOf housingApiServices.LikeApartment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `LikeApartment`.
    */
    R.modelName = "LikeApartment";


        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#apartment
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Fetches belongsTo relation apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartment = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::get::likeApartment::apartment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.LikeApartment#user
         * @methodOf housingApiServices.LikeApartment
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::likeApartment::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.CouponApartment
 * @header housingApiServices.CouponApartment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CouponApartment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CouponApartment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/couponApartments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CouponApartment.apartment() instead.
        "prototype$__get__apartment": {
          url: urlBase + "/couponApartments/:id/apartment",
          method: "GET"
        },

        // INTERNAL. Use CouponApartment.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/couponApartments/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#create
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CouponApartment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/couponApartments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#createMany
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CouponApartment` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/couponApartments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#upsert
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CouponApartment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/couponApartments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#exists
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/couponApartments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#findById
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CouponApartment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/couponApartments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#find
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CouponApartment` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/couponApartments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#findOne
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CouponApartment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/couponApartments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#updateAll
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/couponApartments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#deleteById
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/couponApartments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#count
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/couponApartments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#prototype$updateAttributes
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CouponApartment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/couponApartments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#createChangeStream
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/couponApartments/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#updateOrCreate
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CouponApartment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#update
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#destroyById
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#removeById
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name housingApiServices.CouponApartment#modelName
    * @propertyOf housingApiServices.CouponApartment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CouponApartment`.
    */
    R.modelName = "CouponApartment";


        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#apartment
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Fetches belongsTo relation apartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartment = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::get::couponApartment::apartment"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CouponApartment#user
         * @methodOf housingApiServices.CouponApartment
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::couponApartment::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.EmailTemplate
 * @header housingApiServices.EmailTemplate
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `EmailTemplate` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "EmailTemplate",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/emailTemplates/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#create
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailTemplate` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/emailTemplates",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#createMany
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailTemplate` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/emailTemplates",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#upsert
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailTemplate` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/emailTemplates",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#exists
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/emailTemplates/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#findById
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailTemplate` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/emailTemplates/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#find
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailTemplate` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/emailTemplates",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#findOne
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailTemplate` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/emailTemplates/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#updateAll
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/emailTemplates/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#deleteById
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/emailTemplates/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#count
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/emailTemplates/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#prototype$updateAttributes
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailTemplate` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/emailTemplates/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#createChangeStream
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/emailTemplates/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#updateOrCreate
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EmailTemplate` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#update
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#destroyById
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.EmailTemplate#removeById
         * @methodOf housingApiServices.EmailTemplate
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name housingApiServices.EmailTemplate#modelName
    * @propertyOf housingApiServices.EmailTemplate
    * @description
    * The name of the model represented by this $resource,
    * i.e. `EmailTemplate`.
    */
    R.modelName = "EmailTemplate";


    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.University
 * @header housingApiServices.University
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `University` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "University",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/universities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use University.apartments.findById() instead.
        "prototype$__findById__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/:fk",
          method: "GET"
        },

        // INTERNAL. Use University.apartments.destroyById() instead.
        "prototype$__destroyById__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.apartments.updateById() instead.
        "prototype$__updateById__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.apartments.link() instead.
        "prototype$__link__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.apartments.unlink() instead.
        "prototype$__unlink__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.apartments.exists() instead.
        "prototype$__exists__apartments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/apartments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use University.apartments() instead.
        "prototype$__get__apartments": {
          isArray: true,
          url: urlBase + "/universities/:id/apartments",
          method: "GET"
        },

        // INTERNAL. Use University.apartments.create() instead.
        "prototype$__create__apartments": {
          url: urlBase + "/universities/:id/apartments",
          method: "POST"
        },

        // INTERNAL. Use University.apartments.destroyAll() instead.
        "prototype$__delete__apartments": {
          url: urlBase + "/universities/:id/apartments",
          method: "DELETE"
        },

        // INTERNAL. Use University.apartments.count() instead.
        "prototype$__count__apartments": {
          url: urlBase + "/universities/:id/apartments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#create
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/universities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#createMany
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/universities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#upsert
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/universities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#exists
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/universities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#findById
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/universities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#find
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/universities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#findOne
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/universities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#updateAll
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/universities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#deleteById
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/universities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#count
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/universities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#prototype$updateAttributes
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/universities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.University#createChangeStream
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/universities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Apartment.universities.findById() instead.
        "::findById::apartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Apartment.universities.destroyById() instead.
        "::destroyById::apartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.universities.updateById() instead.
        "::updateById::apartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.universities.link() instead.
        "::link::apartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Apartment.universities.unlink() instead.
        "::unlink::apartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.universities.exists() instead.
        "::exists::apartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/apartments/:id/universities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Apartment.universities() instead.
        "::get::apartment::universities": {
          isArray: true,
          url: urlBase + "/apartments/:id/universities",
          method: "GET"
        },

        // INTERNAL. Use Apartment.universities.create() instead.
        "::create::apartment::universities": {
          url: urlBase + "/apartments/:id/universities",
          method: "POST"
        },

        // INTERNAL. Use Apartment.universities.createMany() instead.
        "::createMany::apartment::universities": {
          isArray: true,
          url: urlBase + "/apartments/:id/universities",
          method: "POST"
        },

        // INTERNAL. Use Apartment.universities.destroyAll() instead.
        "::delete::apartment::universities": {
          url: urlBase + "/apartments/:id/universities",
          method: "DELETE"
        },

        // INTERNAL. Use Apartment.universities.count() instead.
        "::count::apartment::universities": {
          url: urlBase + "/apartments/:id/universities/count",
          method: "GET"
        },

        // INTERNAL. Use ApartmentUniv.university() instead.
        "::get::apartmentUniv::university": {
          url: urlBase + "/apartmentUnivs/:id/university",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.universities.findById() instead.
        "::findById::crawledApartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/:fk",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.universities.destroyById() instead.
        "::destroyById::crawledApartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.universities.updateById() instead.
        "::updateById::crawledApartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.universities.link() instead.
        "::link::crawledApartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.universities.unlink() instead.
        "::unlink::crawledApartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.universities.exists() instead.
        "::exists::crawledApartment::universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use CrawledApartment.universities() instead.
        "::get::crawledApartment::universities": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/universities",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.universities.create() instead.
        "::create::crawledApartment::universities": {
          url: urlBase + "/crawledApartments/:id/universities",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.universities.createMany() instead.
        "::createMany::crawledApartment::universities": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/universities",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.universities.destroyAll() instead.
        "::delete::crawledApartment::universities": {
          url: urlBase + "/crawledApartments/:id/universities",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.universities.count() instead.
        "::count::crawledApartment::universities": {
          url: urlBase + "/crawledApartments/:id/universities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.University#updateOrCreate
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.University#update
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.University#destroyById
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.University#removeById
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name housingApiServices.University#modelName
    * @propertyOf housingApiServices.University
    * @description
    * The name of the model represented by this $resource,
    * i.e. `University`.
    */
    R.modelName = "University";

    /**
     * @ngdoc object
     * @name housingApiServices.University.apartments
     * @header housingApiServices.University.apartments
     * @object
     * @description
     *
     * The object `University.apartments` groups methods
     * manipulating `Apartment` instances related to `University`.
     *
     * Call {@link housingApiServices.University#apartments University.apartments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.University#apartments
         * @methodOf housingApiServices.University
         *
         * @description
         *
         * Queries apartments of university.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::get::university::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.University.apartments#count
         * @methodOf housingApiServices.University.apartments
         *
         * @description
         *
         * Counts apartments of university.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.apartments.count = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::count::university::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.University.apartments#create
         * @methodOf housingApiServices.University.apartments
         *
         * @description
         *
         * Creates a new instance in apartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.create = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::create::university::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.University.apartments#createMany
         * @methodOf housingApiServices.University.apartments
         *
         * @description
         *
         * Creates a new instance in apartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.createMany = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::createMany::university::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.University.apartments#destroyAll
         * @methodOf housingApiServices.University.apartments
         *
         * @description
         *
         * Deletes all apartments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.apartments.destroyAll = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::delete::university::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.University.apartments#destroyById
         * @methodOf housingApiServices.University.apartments
         *
         * @description
         *
         * Delete a related item by id for apartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.apartments.destroyById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::destroyById::university::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.University.apartments#exists
         * @methodOf housingApiServices.University.apartments
         *
         * @description
         *
         * Check the existence of apartments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.exists = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::exists::university::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.University.apartments#findById
         * @methodOf housingApiServices.University.apartments
         *
         * @description
         *
         * Find a related item by id for apartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.findById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::findById::university::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.University.apartments#link
         * @methodOf housingApiServices.University.apartments
         *
         * @description
         *
         * Add a related item by id for apartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.link = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::link::university::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.University.apartments#unlink
         * @methodOf housingApiServices.University.apartments
         *
         * @description
         *
         * Remove the apartments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.apartments.unlink = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::unlink::university::apartments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.University.apartments#updateById
         * @methodOf housingApiServices.University.apartments
         *
         * @description
         *
         * Update a related item by id for apartments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for apartments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Apartment` object.)
         * </em>
         */
        R.apartments.updateById = function() {
          var TargetResource = $injector.get("Apartment");
          var action = TargetResource["::updateById::university::apartments"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.CrawledApartment
 * @header housingApiServices.CrawledApartment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CrawledApartment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CrawledApartment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/crawledApartments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CrawledApartment.tags.findById() instead.
        "prototype$__findById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/:fk",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.tags.destroyById() instead.
        "prototype$__destroyById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.tags.updateById() instead.
        "prototype$__updateById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.tags.link() instead.
        "prototype$__link__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.tags.unlink() instead.
        "prototype$__unlink__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.tags.exists() instead.
        "prototype$__exists__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/tags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use CrawledApartment.universities.findById() instead.
        "prototype$__findById__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/:fk",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.universities.destroyById() instead.
        "prototype$__destroyById__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.universities.updateById() instead.
        "prototype$__updateById__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.universities.link() instead.
        "prototype$__link__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.universities.unlink() instead.
        "prototype$__unlink__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.universities.exists() instead.
        "prototype$__exists__universities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/universities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.findById() instead.
        "prototype$__findById__floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/floorPlans/:fk",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.destroyById() instead.
        "prototype$__destroyById__floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/floorPlans/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.updateById() instead.
        "prototype$__updateById__floorPlans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/floorPlans/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.findById() instead.
        "prototype$__findById__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.destroyById() instead.
        "prototype$__destroyById__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.updateById() instead.
        "prototype$__updateById__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.link() instead.
        "prototype$__link__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.unlink() instead.
        "prototype$__unlink__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.exists() instead.
        "prototype$__exists__likeUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/likeUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.findById() instead.
        "prototype$__findById__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.destroyById() instead.
        "prototype$__destroyById__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.updateById() instead.
        "prototype$__updateById__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.link() instead.
        "prototype$__link__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.unlink() instead.
        "prototype$__unlink__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.exists() instead.
        "prototype$__exists__couponUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/crawledApartments/:id/couponUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use CrawledApartment.tags() instead.
        "prototype$__get__tags": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/tags",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.tags.create() instead.
        "prototype$__create__tags": {
          url: urlBase + "/crawledApartments/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.tags.destroyAll() instead.
        "prototype$__delete__tags": {
          url: urlBase + "/crawledApartments/:id/tags",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.tags.count() instead.
        "prototype$__count__tags": {
          url: urlBase + "/crawledApartments/:id/tags/count",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.universities() instead.
        "prototype$__get__universities": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/universities",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.universities.create() instead.
        "prototype$__create__universities": {
          url: urlBase + "/crawledApartments/:id/universities",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.universities.destroyAll() instead.
        "prototype$__delete__universities": {
          url: urlBase + "/crawledApartments/:id/universities",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.universities.count() instead.
        "prototype$__count__universities": {
          url: urlBase + "/crawledApartments/:id/universities/count",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.floorPlans() instead.
        "prototype$__get__floorPlans": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/floorPlans",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.create() instead.
        "prototype$__create__floorPlans": {
          url: urlBase + "/crawledApartments/:id/floorPlans",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.destroyAll() instead.
        "prototype$__delete__floorPlans": {
          url: urlBase + "/crawledApartments/:id/floorPlans",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.floorPlans.count() instead.
        "prototype$__count__floorPlans": {
          url: urlBase + "/crawledApartments/:id/floorPlans/count",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.likeUsers() instead.
        "prototype$__get__likeUsers": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/likeUsers",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.create() instead.
        "prototype$__create__likeUsers": {
          url: urlBase + "/crawledApartments/:id/likeUsers",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.destroyAll() instead.
        "prototype$__delete__likeUsers": {
          url: urlBase + "/crawledApartments/:id/likeUsers",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.likeUsers.count() instead.
        "prototype$__count__likeUsers": {
          url: urlBase + "/crawledApartments/:id/likeUsers/count",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.couponUsers() instead.
        "prototype$__get__couponUsers": {
          isArray: true,
          url: urlBase + "/crawledApartments/:id/couponUsers",
          method: "GET"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.create() instead.
        "prototype$__create__couponUsers": {
          url: urlBase + "/crawledApartments/:id/couponUsers",
          method: "POST"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.destroyAll() instead.
        "prototype$__delete__couponUsers": {
          url: urlBase + "/crawledApartments/:id/couponUsers",
          method: "DELETE"
        },

        // INTERNAL. Use CrawledApartment.couponUsers.count() instead.
        "prototype$__count__couponUsers": {
          url: urlBase + "/crawledApartments/:id/couponUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#create
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CrawledApartment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/crawledApartments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#createMany
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CrawledApartment` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/crawledApartments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#upsert
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CrawledApartment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/crawledApartments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#exists
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/crawledApartments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#findById
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CrawledApartment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/crawledApartments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#find
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CrawledApartment` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/crawledApartments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#findOne
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CrawledApartment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/crawledApartments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#updateAll
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/crawledApartments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#deleteById
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/crawledApartments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#count
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/crawledApartments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#prototype$updateAttributes
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CrawledApartment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/crawledApartments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#createChangeStream
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/crawledApartments/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#updateOrCreate
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CrawledApartment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#update
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#destroyById
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#removeById
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name housingApiServices.CrawledApartment#modelName
    * @propertyOf housingApiServices.CrawledApartment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CrawledApartment`.
    */
    R.modelName = "CrawledApartment";

    /**
     * @ngdoc object
     * @name housingApiServices.CrawledApartment.tags
     * @header housingApiServices.CrawledApartment.tags
     * @object
     * @description
     *
     * The object `CrawledApartment.tags` groups methods
     * manipulating `Tag` instances related to `CrawledApartment`.
     *
     * Call {@link housingApiServices.CrawledApartment#tags CrawledApartment.tags()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#tags
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Queries tags of crawledApartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::get::crawledApartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.tags#count
         * @methodOf housingApiServices.CrawledApartment.tags
         *
         * @description
         *
         * Counts tags of crawledApartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tags.count = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::count::crawledApartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.tags#create
         * @methodOf housingApiServices.CrawledApartment.tags
         *
         * @description
         *
         * Creates a new instance in tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.create = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::create::crawledApartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.tags#createMany
         * @methodOf housingApiServices.CrawledApartment.tags
         *
         * @description
         *
         * Creates a new instance in tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.createMany = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::createMany::crawledApartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.tags#destroyAll
         * @methodOf housingApiServices.CrawledApartment.tags
         *
         * @description
         *
         * Deletes all tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.destroyAll = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::delete::crawledApartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.tags#destroyById
         * @methodOf housingApiServices.CrawledApartment.tags
         *
         * @description
         *
         * Delete a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.destroyById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::destroyById::crawledApartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.tags#exists
         * @methodOf housingApiServices.CrawledApartment.tags
         *
         * @description
         *
         * Check the existence of tags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.exists = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::exists::crawledApartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.tags#findById
         * @methodOf housingApiServices.CrawledApartment.tags
         *
         * @description
         *
         * Find a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.findById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::findById::crawledApartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.tags#link
         * @methodOf housingApiServices.CrawledApartment.tags
         *
         * @description
         *
         * Add a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.link = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::link::crawledApartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.tags#unlink
         * @methodOf housingApiServices.CrawledApartment.tags
         *
         * @description
         *
         * Remove the tags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.unlink = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::unlink::crawledApartment::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.tags#updateById
         * @methodOf housingApiServices.CrawledApartment.tags
         *
         * @description
         *
         * Update a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.updateById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::updateById::crawledApartment::tags"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name housingApiServices.CrawledApartment.universities
     * @header housingApiServices.CrawledApartment.universities
     * @object
     * @description
     *
     * The object `CrawledApartment.universities` groups methods
     * manipulating `University` instances related to `CrawledApartment`.
     *
     * Call {@link housingApiServices.CrawledApartment#universities CrawledApartment.universities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#universities
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Queries universities of crawledApartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::get::crawledApartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.universities#count
         * @methodOf housingApiServices.CrawledApartment.universities
         *
         * @description
         *
         * Counts universities of crawledApartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.universities.count = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::count::crawledApartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.universities#create
         * @methodOf housingApiServices.CrawledApartment.universities
         *
         * @description
         *
         * Creates a new instance in universities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.create = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::create::crawledApartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.universities#createMany
         * @methodOf housingApiServices.CrawledApartment.universities
         *
         * @description
         *
         * Creates a new instance in universities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.createMany = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::createMany::crawledApartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.universities#destroyAll
         * @methodOf housingApiServices.CrawledApartment.universities
         *
         * @description
         *
         * Deletes all universities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.universities.destroyAll = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::delete::crawledApartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.universities#destroyById
         * @methodOf housingApiServices.CrawledApartment.universities
         *
         * @description
         *
         * Delete a related item by id for universities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.universities.destroyById = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::destroyById::crawledApartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.universities#exists
         * @methodOf housingApiServices.CrawledApartment.universities
         *
         * @description
         *
         * Check the existence of universities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.exists = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::exists::crawledApartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.universities#findById
         * @methodOf housingApiServices.CrawledApartment.universities
         *
         * @description
         *
         * Find a related item by id for universities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.findById = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::findById::crawledApartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.universities#link
         * @methodOf housingApiServices.CrawledApartment.universities
         *
         * @description
         *
         * Add a related item by id for universities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.link = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::link::crawledApartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.universities#unlink
         * @methodOf housingApiServices.CrawledApartment.universities
         *
         * @description
         *
         * Remove the universities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.universities.unlink = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::unlink::crawledApartment::universities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.universities#updateById
         * @methodOf housingApiServices.CrawledApartment.universities
         *
         * @description
         *
         * Update a related item by id for universities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for universities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.universities.updateById = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::updateById::crawledApartment::universities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name housingApiServices.CrawledApartment.floorPlans
     * @header housingApiServices.CrawledApartment.floorPlans
     * @object
     * @description
     *
     * The object `CrawledApartment.floorPlans` groups methods
     * manipulating `FloorPlan` instances related to `CrawledApartment`.
     *
     * Call {@link housingApiServices.CrawledApartment#floorPlans CrawledApartment.floorPlans()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#floorPlans
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Queries floorPlans of crawledApartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R.floorPlans = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::get::crawledApartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.floorPlans#count
         * @methodOf housingApiServices.CrawledApartment.floorPlans
         *
         * @description
         *
         * Counts floorPlans of crawledApartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.floorPlans.count = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::count::crawledApartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.floorPlans#create
         * @methodOf housingApiServices.CrawledApartment.floorPlans
         *
         * @description
         *
         * Creates a new instance in floorPlans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R.floorPlans.create = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::create::crawledApartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.floorPlans#createMany
         * @methodOf housingApiServices.CrawledApartment.floorPlans
         *
         * @description
         *
         * Creates a new instance in floorPlans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R.floorPlans.createMany = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::createMany::crawledApartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.floorPlans#destroyAll
         * @methodOf housingApiServices.CrawledApartment.floorPlans
         *
         * @description
         *
         * Deletes all floorPlans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.floorPlans.destroyAll = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::delete::crawledApartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.floorPlans#destroyById
         * @methodOf housingApiServices.CrawledApartment.floorPlans
         *
         * @description
         *
         * Delete a related item by id for floorPlans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for floorPlans
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.floorPlans.destroyById = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::destroyById::crawledApartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.floorPlans#findById
         * @methodOf housingApiServices.CrawledApartment.floorPlans
         *
         * @description
         *
         * Find a related item by id for floorPlans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for floorPlans
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R.floorPlans.findById = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::findById::crawledApartment::floorPlans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.floorPlans#updateById
         * @methodOf housingApiServices.CrawledApartment.floorPlans
         *
         * @description
         *
         * Update a related item by id for floorPlans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for floorPlans
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FloorPlan` object.)
         * </em>
         */
        R.floorPlans.updateById = function() {
          var TargetResource = $injector.get("FloorPlan");
          var action = TargetResource["::updateById::crawledApartment::floorPlans"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name housingApiServices.CrawledApartment.likeUsers
     * @header housingApiServices.CrawledApartment.likeUsers
     * @object
     * @description
     *
     * The object `CrawledApartment.likeUsers` groups methods
     * manipulating `User` instances related to `CrawledApartment`.
     *
     * Call {@link housingApiServices.CrawledApartment#likeUsers CrawledApartment.likeUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#likeUsers
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Queries likeUsers of crawledApartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.likeUsers#count
         * @methodOf housingApiServices.CrawledApartment.likeUsers
         *
         * @description
         *
         * Counts likeUsers of crawledApartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.likeUsers.count = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::count::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.likeUsers#create
         * @methodOf housingApiServices.CrawledApartment.likeUsers
         *
         * @description
         *
         * Creates a new instance in likeUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.likeUsers#createMany
         * @methodOf housingApiServices.CrawledApartment.likeUsers
         *
         * @description
         *
         * Creates a new instance in likeUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.createMany = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::createMany::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.likeUsers#destroyAll
         * @methodOf housingApiServices.CrawledApartment.likeUsers
         *
         * @description
         *
         * Deletes all likeUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likeUsers.destroyAll = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::delete::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.likeUsers#destroyById
         * @methodOf housingApiServices.CrawledApartment.likeUsers
         *
         * @description
         *
         * Delete a related item by id for likeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likeUsers.destroyById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroyById::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.likeUsers#exists
         * @methodOf housingApiServices.CrawledApartment.likeUsers
         *
         * @description
         *
         * Check the existence of likeUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.exists = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::exists::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.likeUsers#findById
         * @methodOf housingApiServices.CrawledApartment.likeUsers
         *
         * @description
         *
         * Find a related item by id for likeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.findById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::findById::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.likeUsers#link
         * @methodOf housingApiServices.CrawledApartment.likeUsers
         *
         * @description
         *
         * Add a related item by id for likeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.link = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::link::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.likeUsers#unlink
         * @methodOf housingApiServices.CrawledApartment.likeUsers
         *
         * @description
         *
         * Remove the likeUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likeUsers.unlink = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::unlink::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.likeUsers#updateById
         * @methodOf housingApiServices.CrawledApartment.likeUsers
         *
         * @description
         *
         * Update a related item by id for likeUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for likeUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.likeUsers.updateById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::updateById::crawledApartment::likeUsers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name housingApiServices.CrawledApartment.couponUsers
     * @header housingApiServices.CrawledApartment.couponUsers
     * @object
     * @description
     *
     * The object `CrawledApartment.couponUsers` groups methods
     * manipulating `User` instances related to `CrawledApartment`.
     *
     * Call {@link housingApiServices.CrawledApartment#couponUsers CrawledApartment.couponUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment#couponUsers
         * @methodOf housingApiServices.CrawledApartment
         *
         * @description
         *
         * Queries couponUsers of crawledApartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.couponUsers#count
         * @methodOf housingApiServices.CrawledApartment.couponUsers
         *
         * @description
         *
         * Counts couponUsers of crawledApartment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.couponUsers.count = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::count::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.couponUsers#create
         * @methodOf housingApiServices.CrawledApartment.couponUsers
         *
         * @description
         *
         * Creates a new instance in couponUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.couponUsers#createMany
         * @methodOf housingApiServices.CrawledApartment.couponUsers
         *
         * @description
         *
         * Creates a new instance in couponUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.createMany = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::createMany::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.couponUsers#destroyAll
         * @methodOf housingApiServices.CrawledApartment.couponUsers
         *
         * @description
         *
         * Deletes all couponUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.couponUsers.destroyAll = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::delete::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.couponUsers#destroyById
         * @methodOf housingApiServices.CrawledApartment.couponUsers
         *
         * @description
         *
         * Delete a related item by id for couponUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.couponUsers.destroyById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroyById::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.couponUsers#exists
         * @methodOf housingApiServices.CrawledApartment.couponUsers
         *
         * @description
         *
         * Check the existence of couponUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.exists = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::exists::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.couponUsers#findById
         * @methodOf housingApiServices.CrawledApartment.couponUsers
         *
         * @description
         *
         * Find a related item by id for couponUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.findById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::findById::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.couponUsers#link
         * @methodOf housingApiServices.CrawledApartment.couponUsers
         *
         * @description
         *
         * Add a related item by id for couponUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.link = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::link::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.couponUsers#unlink
         * @methodOf housingApiServices.CrawledApartment.couponUsers
         *
         * @description
         *
         * Remove the couponUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.couponUsers.unlink = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::unlink::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name housingApiServices.CrawledApartment.couponUsers#updateById
         * @methodOf housingApiServices.CrawledApartment.couponUsers
         *
         * @description
         *
         * Update a related item by id for couponUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - apartment id
         *
         *  - `fk` – `{*}` - Foreign key for couponUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.couponUsers.updateById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::updateById::crawledApartment::couponUsers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.Container
 * @header housingApiServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Container",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/containers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name housingApiServices.Container#getContainers
         * @methodOf housingApiServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/containers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Container#createContainer
         * @methodOf housingApiServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/containers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Container#destroyContainer
         * @methodOf housingApiServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/containers/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Container#getContainer
         * @methodOf housingApiServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/containers/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Container#getFiles
         * @methodOf housingApiServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/containers/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Container#getFile
         * @methodOf housingApiServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Container#removeFile
         * @methodOf housingApiServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Container#upload
         * @methodOf housingApiServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/containers/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name housingApiServices.Container#download
         * @methodOf housingApiServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/containers/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name housingApiServices.Container#modelName
    * @propertyOf housingApiServices.Container
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Container`.
    */
    R.modelName = "Container";


    return R;
  }]);

/**
 * @ngdoc object
 * @name housingApiServices.Email
 * @header housingApiServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name housingApiServices.Email#modelName
    * @propertyOf housingApiServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name housingApiServices.LoopBackResourceProvider
   * @header housingApiServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name housingApiServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf housingApiServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name housingApiServices.LoopBackResourceProvider#setUrlBase
     * @methodOf housingApiServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name housingApiServices.LoopBackResourceProvider#getUrlBase
     * @methodOf housingApiServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
