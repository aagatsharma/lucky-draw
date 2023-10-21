const host = "http://backend.nozzaa.com";

export const registerRoute = `${host}/api/auth/signup`;

export const loginRoute = `${host}/api/auth/login`;

export const getAllBookingRoute = `${host}/api/allbookingno?_limit=100`;

export const resetPasswordRequestRoute = `${host}/reset-password-request`;

export const resetPasswordRoute = `${host}/reset-password`;

export const addBookingNumber = `${host}/api/bookingno`;

export const updateBookingRoute = `${host}/api/updateBookingno`;

export const userBookingRoute = `${host}/api/booking`;

export const allBookingRoute = `${host}/api/allbooking`;
