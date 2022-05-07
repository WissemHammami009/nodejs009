'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProfileInterface = exports.ProfileResponse = exports.Profile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _base = require('../base');

var _common = require('../utils/common.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var action = 'Profile/';
var idField = 'profileUUID';
var actionKey = Symbol('api action');
var klassKey = Symbol('constructor');
var idKey = Symbol('id filed');
var clientKey = Symbol('make api call');

/**
 * Represents a Profile
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */

var Profile = exports.Profile = function (_PlivoResource) {
    _inherits(Profile, _PlivoResource);

    function Profile(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Profile);

        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, action, Profile, idField, client));

        _this[actionKey] = action;
        _this[clientKey] = client;
        if (idField in data) {
            _this.id = data[idField];
        };

        (0, _common.extend)(_this, data);
        return _this;
    }

    return Profile;
}(_base.PlivoResource);

var ProfileResponse = exports.ProfileResponse = function ProfileResponse(params) {
    _classCallCheck(this, ProfileResponse);

    params = params || {};
    this.apiId = params.apiId;
    this.profileUuid = params.profileUuid;
    this.message = params.message;
};

/**
 * Represents a Profile Interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */


var ProfileInterface = exports.ProfileInterface = function (_PlivoResource2) {
    _inherits(ProfileInterface, _PlivoResource2);

    function ProfileInterface(client) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ProfileInterface);

        var _this2 = _possibleConstructorReturn(this, (ProfileInterface.__proto__ || Object.getPrototypeOf(ProfileInterface)).call(this, action, Profile, idField, client));

        (0, _common.extend)(_this2, data);
        _this2[clientKey] = client;
        _this2[actionKey] = action;
        _this2[klassKey] = Profile;
        _this2[idKey] = idField;
        return _this2;
    }

    /**
     * get Profile by given profileuuid
     * @method
     * @param {string} profileUUID - id of profileUUID
     * @promise {object} return {@link profile} object
     * @fail {Error} return Error
     */


    _createClass(ProfileInterface, [{
        key: 'get',
        value: function get(profileUUID) {
            var params = {};
            return _get(ProfileInterface.prototype.__proto__ || Object.getPrototypeOf(ProfileInterface.prototype), 'customexecuteAction', this).call(this, action + profileUUID + '/', 'GET', params);
        }

        /**
         * Get All Profile Detail
         * @method
         * @param {object} params - params limit and offset
         * @promise {object[]} returns list of profile Object
         * @fail {Error} returns Error
         */

    }, {
        key: 'list',
        value: function list(params) {
            return _get(ProfileInterface.prototype.__proto__ || Object.getPrototypeOf(ProfileInterface.prototype), 'customexecuteAction', this).call(this, action, 'GET', params);
        }

        /**
         * delete Profile by given profileuuid
         * @method
         * @param {string} profileUUID - id of profileUUID
         * @fail {Error} return Error
         */

    }, {
        key: 'delete',
        value: function _delete(profileUUID) {
            var params = {};
            return _get(ProfileInterface.prototype.__proto__ || Object.getPrototypeOf(ProfileInterface.prototype), 'customexecuteAction', this).call(this, action + profileUUID + '/', 'DELETE', params);
        }

        /**
         * Create a new Profile
         *
         * @param {string} profile_alias 
         * @param {string} plivo_subaccount 
         * @param {string} customer_type 
         * @param {string} entity_type 
         * @param {string} company_name 
         * @param {string} ein  
         * @param {string} vertical 
         * @param {string} ein_issuing_country 
         * @param {string} stock_symbol 
         * @param {string} stock_exchange 
         * @param {string} alt_business_id_type
         * @param {string} website 
         * @param {object} address
         * @param {object} authorized_contact
         * @return profileResponse response output
         */

    }, {
        key: 'create',
        value: function create(profile_alias, plivo_subaccount, customer_type, entity_type, company_name, ein, vertical, ein_issuing_country, stock_symbol, stock_exchange, alt_business_id_type, website, address, authorized_contact) {
            var params = {};
            params.profile_alias = profile_alias;
            params.plivo_subaccount = plivo_subaccount;
            params.customer_type = customer_type;
            params.entity_type = entity_type;
            params.company_name = company_name;
            params.ein = ein;
            params.vertical = vertical;
            params.ein_issuing_country = ein_issuing_country;
            params.stock_symbol = stock_symbol;
            params.stock_exchange = stock_exchange;
            params.alt_business_id_type = alt_business_id_type;
            params.website = website;
            params.address = address;
            params.authorized_contact = authorized_contact;
            var client = this[clientKey];
            return new Promise(function (resolve, reject) {
                client('POST', action, params).then(function (response) {
                    resolve(new ProfileResponse(response.body, idField));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
        /**
         * update a new Profile
         *
         * @param {string} profile_uuid 
         * @param {object } address
         * @param {object } authorized_contact
         * @param {string} entity_type
         * @param {string} vertical
         * @param {string} company_name
         * @param {string} website
         * @return profileResponse response output
         */

    }, {
        key: 'update',
        value: function update(profile_uuid, params) {
            return _get(ProfileInterface.prototype.__proto__ || Object.getPrototypeOf(ProfileInterface.prototype), 'customexecuteAction', this).call(this, action + profile_uuid + '/', 'POST', params);
        }
    }]);

    return ProfileInterface;
}(_base.PlivoResource);