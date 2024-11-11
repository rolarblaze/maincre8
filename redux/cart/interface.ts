export interface InitializeSessionResponse {
    refresh_token: string;
    session_id: string;
}

export interface AddItemToCartPayload {
    bundle_id: number;
    package_id: number;
}

export interface AddItemToCartResponse {
    message: string;
    cart_id: number;
}
