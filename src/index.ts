interface addUserNetworkRequest {
    token: string,
    apiKey: string,
    externalUserId?: string,
}
const serverUrl = {
    addUser: "https://expo-panel.herokuapp.com/api/AppUsers/Add"
}
interface IsimplyNotify {

}

class SimplyNotify implements IsimplyNotify {
    private apiKey = "";
    private externalUserId = "";
    private token = "";
    setAppId(apiKey: string) {
        this.apiKey = apiKey
    }
    setToken(token: string) {
        this.token = token
    }
    setExternalUserId(externalUserId: string) {
        this.apiKey = externalUserId
    }
    registerUserForPushNotification() {
        if (this.apiKey && this.token) {
            let requestBody: addUserNetworkRequest = { apiKey: this.apiKey, token: this.token }
            if (this.externalUserId) {
                requestBody.externalUserId = this.externalUserId;
            }
            this.sendRequestToApi(serverUrl.addUser, requestBody)
        }
    }
    removeUserForPushNotification() {

    }

    private sendRequestToApi(url: string, body: addUserNetworkRequest) {
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/jsonF',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
}
export default new SimplyNotify()