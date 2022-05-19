import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    name: 'veera'
}

export const imgurSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = imgurSlice.actions

export const getImgurAlbum = (dispatch) => {
    const url = 'https://api.imgur.com/3/gallery/image/jyH4ipj'
    fetch(url, {
        method: "GET", // POST, PUT, DELETE, etc.
        headers: {
            // the content type header value is usually auto-set
            // depending on the request body
            "Authorization": `ada9a949d332f0d 84a0fe533a7794832fa51c05cfaa37d3e25b0ea3`,
            "Content-Type": "text/plain;charset=UTF-8"
        },
        mode: "cors", // same-origin, no-cors
        credentials: "omit", // omit, include
        cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
        redirect: "follow", // manual, error
        keepalive: false, // true
    }).then((response) => response.json()).then((result) => {
        console.log('--== result ', result);
        dispatch(increment(result))
    });
}

export default imgurSlice.reducer