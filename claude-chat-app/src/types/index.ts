export interface ChatRequest {
    prompt: string;
    userId: string;
}

export interface ChatResponse {
    response: string;
    timestamp: Date;
}

export interface ErrorResponse {
    error: string;
    statusCode: number;
}