export interface LoginHandler {
    (userId: string, sessionId: string): void;
}
