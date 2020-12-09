import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {db} from "../../app/myfirebase"
export const fetchMarkers = createAsyncThunk('markers/fetchMarkers', async () => {
    const response = await  db.collection("markers").get().then((array) => {
        const list = []
        array.forEach((doc) => {
            list.unshift(doc.data())
        })
        return list
    })

    return response
})

// export const addMarker = createAsyncThunk('posts/fetchMarkers', async (marker) => {
//
//     const response = await await markers.forEach((marker) => {
//
//         db.collection("markers").doc(marker.id).set(marker)
//     })
//     console.log(response)
//     console.log(response.posts)
//     return response.posts
// })


const markersSlice = createSlice({
    name: 'markers',
    initialState :{
        markers: [],
        status: 'idle',
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        // [fetchMarkers.pending]: (state, action) => {
        //     state.status = 'loading'
        // },
        // [fetchMarkers.fulfilled]: (state, action) => {
        //     state.status = 'succeeded'
        //     state.markers = state.markers.concat(action.payload)
        // },
        // [fetchMarkers.rejected]: (state, action) => {
        //     state.status = 'failed'
        //     state.error = action.payload
        // },
        [fetchMarkers.fulfilled]: (state, action) => {
            state.markers = state.markers.concat(action.payload)
        },
    },
})

export default markersSlice.reducer
export const selectAllMarkers = state=>state.markers.markers