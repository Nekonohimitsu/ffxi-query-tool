export declare const store: import("@reduxjs/toolkit").EnhancedStore<any, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
