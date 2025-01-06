"use client";

import { createSlice } from "@reduxjs/toolkit";
import { PropertyDocument } from "@/server/schema/property.schema";
import { propertiesAPI } from "./properties.api";

export interface PaginationData {
  current_page: number;
  total_pages: number;
  total_items: number;
  items_per_page: number;
  has_next_page: boolean;
  has_prev_page: boolean;
}

interface UsePropertiesReturn {
  properties: PropertyDocument[];
  loading: boolean;
  error: string | null;
  pagination: PaginationData;
}

const initialState: UsePropertiesReturn = {
    properties: [],
    loading: false,
    error: null,
    pagination: {
        current_page: 1,
        total_pages: 1,
        total_items: 0,
        items_per_page: 8,
        has_next_page: false,
        has_prev_page: false,
    }
}  

const PropertiesSlice = createSlice({
  name: 'propertiesSlice',
  initialState,
  reducers:  {},
  extraReducers: (builder) => {
    builder
    .addMatcher(
      propertiesAPI.endpoints.getProperties.matchFulfilled,
      (state, action) => {
        state.properties= action.payload.data.properties;
        state.pagination = action.payload.data.pagination
      },
    )
   
  },
});
export const {
  
} = PropertiesSlice.actions
export default PropertiesSlice.reducer;