export const URLs = {
    //authorization
    
    SIGN_IN: "login",
    SEND_OTP: "auth/signin/send_otp",
    VERIFY_OTP: "auth/signin/verify_otp",
  
    //Signup Api
    SIGN_UP: "register",
    SIGN_UP_SEND_OTP: "auth/signup/send_otp",
    SIGN_UP_VERIFY_OTP: "auth/signup/verify_otp",
    USER_INFO:"user/user",
    //Contact-us
    Contact_Us : "auth/contact_us",
    Get_Currency:"location/currencies",
    //Forgot Password
    FORGOT_PASSWORD: "auth/forgot_password",
    RESET_PASSWORD: "auth/reset_password",
    //Provider Profile
    MANAGE_PROVIDER_PROFILE: "auth/update_profile",
    UPDATE_SPONSOR_PROFILE: "auth/update_sponsor_profile",
    GET_PROVIDER_PROFILE: "auth/get_profile",

    GET_COUNTRY:"location/country",
    //Filters
    GET_PROVIDER_NAMES: "provider",
    GET_RFI_TYPES: "rfi",
    GET_THERAPUTIC_AREAS: "therapeutic_areas",
    GET_DIVERSITY_CERTIFICATE: "certification",
    GET_DIVERSITY_CLASSIFICATION: "classification",
    GET_COMPANY: "company",
    GET_AUDIT_REPORT: "audit_report",
  
    //Documenets
    GET_POST: "post",
    GET_CATEGORY:"categories",
    GET_DOCUMENT_BY_ID: "document",
    RECOMMENDED_DOCUMENTS: "/document/recommended_documents",
  
    //Cart
    ADD_TO_CART: "cart",
    REMOVE_FROM_CART: "cart",
    GET_CART: "cart",
    //Order
    GET_PAYMENT_INTENT: "order/payment_intent",
    CREATE_ORDER: "/order",
    GET_ORDER_BY_ID: "order/order_item_detail",
    //Join new provider
    JOIN_PROVIDER: "provider/join_provider",
    //RequestForNewPRovider
    REQUEST_FOR_NEW_PROVIDER: "/provider/request_provider",
  
    //Existing Provider
    EXISTING_PROVIDER: "/provider/existing_provider",
  
    //Approve Request
    APPROVE_REQUEST: "order/order_items",
    // Update Approval order Status
    UPDAE_ORDER_STATUS: "/order/update_status",
  
    //Transaction History
    ORDER_HISTORY: "order/history_order",
    EXISTING_PROVIDER: "/provider/existing_provider",
  
    //Get users for dashboard
    GET_DASHBOARD_DATA: "/dashboard",
  
    //sas token
    GET_SAS_TOKEN: "/document/sas_token"
  };
export const all_roles = {
    User: "user",
    Host: "host",
    Admin: "admin"
  };