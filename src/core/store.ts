// src/core/store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '@/common/store/counter-slice/counterSlice'
import authReducer from '@/common/store/auth-slice/authSlice'

/**
 * The Redux store is the heart of the Redux application.
 * It holds the whole state tree of the application.
 * The only way to change the state inside it is to dispatch an action on it.
 * A store is not a class. It's just an object with a few methods on it.
 * To create it, pass your root reducing function to createStore.
 * The key names in the object will define the keys in our final state value.
 * auth=state, authReducer=reducer
 * https://redux.js.org/tutorials/essentials/part-2-app-structure
 */
export const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
