import {ADD_MOVIE,REMO_MOVIE,EDIT_MOVIE,FiltNAME_movie,FiltRATE_movie,FETCH_movie} from './ActionType'
import axios from 'axios'
export const addFilm = (movie)=>({
    type:ADD_MOVIE,
    payload:movie
})
export const remoFilm=(_id)=>({
    type:REMO_MOVIE,
    payload:_id
})
export const editFilm=(_id,newmovie)=>({
    type:EDIT_MOVIE,
    payload:{_id,newmovie}
})
export const filtrenameFilm=(searchname)=>({
    type:FiltNAME_movie,
    payload:searchname
})
export const filtrerateFilm=(rate)=>({
    type:FiltRATE_movie,
    payload:rate
})
export const fetchFilm=()=>dispatch=>{
// axios.GET('https://tv-v2.api-fetch.website/movies/1')
axios({ method:'get', url:'https://tv-v2.api-fetch.website/movies/1'})
.then(res=>res.data)

.then(data=>{
    dispatch({
        type:FETCH_movie,
        payload:data
    })
    }
    )
}
