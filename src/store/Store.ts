// import { dealFlowApi } from '@/app/components/screens/DealFlow/store/DealFlow.api';
import { propertiesAPI } from '@/pages/property-listing/services/properties.api';
import PropertiesSlice  from '@/pages/property-listing/services/properties.slice';
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      propertiesState: PropertiesSlice,
      [propertiesAPI.reducerPath]: propertiesAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(propertiesAPI.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']