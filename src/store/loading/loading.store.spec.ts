import { LoadingState } from './LoadingState';
import { show } from './loading.actions';
import { loadingReducer } from './loading.reducers';

describe('Loading store tests', () => {
  it('show', () => {
    const initialState: LoadingState = { show: false };
    const newState = loadingReducer(initialState, show());

    expect(newState).toEqual({ show: true });
  });
});
