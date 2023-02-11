import store from '../../app/store';
import { fetchAnime } from './animes.slice';

describe('Anime redux state tests', () => {
  it('Should initially set missions to an empty object', () => {
    const state = store.getState().topAnime;
    expect(state.topAnime).toEqual([]);
  });

  it('Should be able to fetch the topAnime list', async () => {
    const result = await store.dispatch(fetchAnime());
    expect(result.type).toBe('homepage/FETCH_ANIME/fulfilled');
    const state = store.getState().topAnime;
    expect(state.loading).toBe('succeeded');
    expect(state.error).toBe(null);
  });
});
