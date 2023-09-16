const host = "http://localhost:8080";

export const registerRoute = `${host}/api/auth/signup`;

export const loginRoute = `${host}/api/auth/login`;

export const getAllBookingRoute = `${host}/api/allbookingno?_limit=100`;

export const resetPasswordRequestRoute = `${host}/reset-password-request`;

export const resetPasswordRoute = `${host}/reset-password`;
