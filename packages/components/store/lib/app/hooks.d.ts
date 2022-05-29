import { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store';
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<any, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
