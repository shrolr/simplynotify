interface addUserNetworkRequest {
    token: string;
    apiKey: string;
    externalUserId?: string;
}
declare const serverUrl: {
    addUser: string;
};
interface IsimplyNotify {
}
declare class SimplyNotify implements IsimplyNotify {
    private apiKey;
    private externalUserId;
    private token;
    setAppId(apiKey: string): void;
    setToken(token: string): void;
    setExternalUserId(externalUserId: string): void;
    registerUserForPushNotification(): void;
    removeUserForPushNotification(): void;
    private sendRequestToApi;
}
//# sourceMappingURL=index.d.ts.map