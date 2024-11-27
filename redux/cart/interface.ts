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
    cart_item_id: number;
    bundle: {
        bundle_name: string;
        bundle_id: number;
    };
}

export interface GetCartItemsResponse {
    items: CartItem[];
    recommended_addons: RecommAddOns[];
    total_price: number;
}

export interface ClearCartResponse {
    message: string;
}

export interface CheckoutCartPayload {
    addons: { addon_id: number; cart_item_id: number; quantity: number }[];
    session_id: string;
}

export interface CheckoutCartResponse {
    detail: string;
    added_addons: {
        addon_id: number;
        cart_item_id: number;
        quantity: number;
        session_addon_id: number;
    }[];
}

export interface MakePaymentPayload {
    package_id: number;
    currency: string;
}

export interface MakePaymentResponse {
    status: string;
    message: string;
    data: {
        link: string;
    };
}

