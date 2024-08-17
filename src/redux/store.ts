import { configureStore } from '@reduxjs/toolkit'
import StudentSlice from './features/StudentSlice'
// ...

export const store = configureStore({
  reducer: {
    students: StudentSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch