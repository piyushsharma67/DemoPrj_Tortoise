import {
    combineReducers,
    AnyAction,
    Reducer,
    createStore,
    applyMiddleware,
  } from '@reduxjs/toolkit';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import {persistReducer, persistStore} from 'redux-persist';
  import thunkMiddleware from 'redux-thunk';
  import ReducerStore from '../reducers/Reducer';

  
  const reducers = combineReducers({
    ReducerStore
  })
  
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['AuthReducer', 'SampleImageReducer'],
  };
  
  export type RootState = ReturnType<typeof reducers>;
  
  const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === 'logout') {
      state = {} as RootState;
    }
    return reducers(state, action);
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = createStore(
    persistedReducer,
    applyMiddleware(thunkMiddleware),
  );
  export const persistor = persistStore(store);
  