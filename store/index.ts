import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
export type AppState = ReturnType<typeof rootReducer>;

function configureStore() {
  const middleWare: Array<Middleware> = [];
  if (process.env.NODE_ENV === 'development') {
    middleWare.push(thunk);
  }
  if (process.env.NODE_ENV === 'test') {
    middleWare.push(thunk);
  }
  if (process.env.NODE_ENV === 'production') {
    middleWare.push(thunk);
  }
  const middleWareEnhancer = applyMiddleware(...middleWare);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );
  return store;
}

export default configureStore;
