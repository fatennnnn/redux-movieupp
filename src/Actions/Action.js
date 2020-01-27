import {ADD_MOVIE,REMO_MOVIE,EDIT_MOVIE,FiltNAME_movie,FiltRATE_movie} from './ActionType'
export const addFilm = (movieimage,rating,moviename)=>({
    type:ADD_MOVIE,
    payload:{id:Date.now(),movieimage,rating,moviename,}
})
export const remoFilm=(id)=>({
    type:REMO_MOVIE,
    payload:id
})
export const editFilm=(id,newmovie)=>({
    type:EDIT_MOVIE,
    payload:{id,newmovie}
})
export const filtrenameFilm=(searchname)=>({
    type:FiltNAME_movie,
    payload:searchname
})
export const filtrerateFilm=(rate)=>({
    type:FiltRATE_movie,
    payload:rate
})
