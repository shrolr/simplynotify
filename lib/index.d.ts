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
declare const _default: SimplyNotify;
export default _default;
//# sourceMappingURL=index.d.ts.map