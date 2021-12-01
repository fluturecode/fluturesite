import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';

export const createAppStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
    },
  });

export const store = createAppStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
