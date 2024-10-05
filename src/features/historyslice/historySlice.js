import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
    name: 'history',
    initialState: [],
    reducers: {
        addHistory: (state, action) => {
            let flag = false;
            state.map(coin => {
                if (coin.id === action.payload.id)
                    flag = true;
            })
            if (!flag) {
                state.push(action.payload);
            }
        },
        removeHistory: (state) => {
            return [];
        }
    }
})
export const { addHistory, removeHistory } = historySlice.actions;