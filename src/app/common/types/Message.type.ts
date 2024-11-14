export interface MessageList {
    userId: number;
    messages: Message[]
}

export interface Message {
    message: string;
    time: number;
    sentByMe?: boolean;
}