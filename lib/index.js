"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serverUrl = {
    addUser: "https://expo-panel.herokuapp.com/api/AppUsers/Add"
};
var SimplyNotify = /** @class */ (function () {
    function SimplyNotify() {
        this.apiKey = "";
        this.externalUserId = "";
        this.token = "";
    }
    SimplyNotify.prototype.setAppId = function (apiKey) {
        this.apiKey = apiKey;
    };
    SimplyNotify.prototype.setToken = function (token) {
        this.token = token;
    };
    SimplyNotify.prototype.setExternalUserId = function (externalUserId) {
        this.apiKey = externalUserId;
    };
    SimplyNotify.prototype.registerUserForPushNotification = function () {
        if (this.apiKey && this.token) {
            var requestBody = { apiKey: this.apiKey, token: this.token };
            if (this.externalUserId) {
                requestBody.externalUserId = this.externalUserId;
            }
            this.sendRequestToApi(serverUrl.addUser, requestBody);
        }
    };
    SimplyNotify.prototype.removeUserForPushNotification = function () {
    };
    SimplyNotify.prototype.sendRequestToApi = function (url, body) {
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/jsonF',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
    return SimplyNotify;
}());
exports.default = new SimplyNotify();
//# sourceMappingURL=index.js.map