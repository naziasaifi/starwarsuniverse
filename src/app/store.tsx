import { configureStore } from '@reduxjs/toolkit'
import characterSlice from '../store/CharacterStore'
import planetSlice from '../store/PlanetStore'
import { enableMapSet } from 'immer';

enableMapSet();
 const store = configureStore({
    reducer: {
        planet: planetSlice.reducer,
        character: characterSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store
