export interface InitializeSessionResponse {
    refresh_token: string;
    session_id: string;
}

export interface AddItemToCartPayload {
    bundle_id: number;
    package_id: number;
}

export interface AddItemToCartResponse {
    detail: string;
    cart_id: number;
}
export interface CartItem {
    id: number;
    bundle_id: number;
    package_id: number;
    cart_id: number;
    addons: any[];
    bundle: {
        bundle_name: string;
        bundle_id: number;
        description: string;
        bundle_image_link: string;
    };
    package: {
        package_name: string;
        package_id: number;
        price: number;
        description: string;
    };
}
export interface RecommAddOns {
    add_ons_id: number;
    add_ons_name: string;
    description: string;
    price: number;
    bundle: {
        bundle_name: string;
        bundle_id: number;
    };
}

export interface GetCartItemsResponse {
    items: CartItem[];
    recommended_addons: RecommAddOns[];
}

export interface ClearCartResponse {
    message: string;
}

