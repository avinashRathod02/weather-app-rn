import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'

interface AppState {
  items: []
  dashboardLoading: boolean
}

const initialState: AppState = {
  items: [],
  dashboardLoading: false
}

/** Get dashboard data */
export const fetchWeatherData = createAsyncThunk(
  '/dashboard/fetchWeatherData',
  async (
    data = {latitude: 21.2213163, longitude: 72.8391928},
    {rejectWithValue}
  ) => {
    try {
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${data?.latitude}&lon=${data?.longitude}&exclude=hourly%2Cminutely&appid=00d49afb60af52a47022d369756ca31a&units=metric`
      const res = await axios.get(url)
      return res
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const commonSlice = createSlice({
  name: 'common',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWeatherData.pending.toString()]: state => {
      state.dashboardLoading = true
    },
    [fetchWeatherData.fulfilled.toString()]: (
      state,
      {payload}: PayloadAction<any>
    ) => {
      state.dashboardLoading = false
      state.items = payload?.data?.daily
    },
    [fetchWeatherData.rejected.toString()]: state => {
      state.dashboardLoading = false
    }
  }
})

export default commonSlice.reducer
