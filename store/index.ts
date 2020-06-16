import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

export type AppState = ReturnType<typeof rootReducer>;

function configureStore() {
  const middleWare: Array<Middleware> = [];

  const middleWareEnhancer = applyMiddleware(...middleWare);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );
  return store;
}

export default configureStore;
