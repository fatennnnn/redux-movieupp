
import {movies} from '../data'
import {ADD_MOVIE,REMO_MOVIE,EDIT_MOVIE,FiltNAME_movie,FiltRATE_movie} from '../Actions/ActionType'
let initState={
  movies,
  searchname:"",
  rate:0
}
const movieReducer = (state=initState,action)=>{
    switch (action.type) {
        case ADD_MOVIE:
          return {...state,movies:state.movies.concat(action.payload)};
          case REMO_MOVIE:
            // return state.movies.filter((el,i)=>(el.id!==action.payload));
            return{...state,movies:state.movies.filter((el,i)=>(el.id!==action.payload))}
          case EDIT_MOVIE: 
          return {...state,movies:state.movies.map((el,i)=>el.id===action.payload.id ? {...action.payload.newmovie}:el)}
            // return state.map((el,i)=>el.id===action.payload.id ? {...action.payload.newmovie}:el)
            // {...el,movieimage:action.payload.newmovie,rating:action.payload.newrate,moviename:action.payload.newname}:el);
            case FiltNAME_movie:
              return {...state,searchname:action.payload}
              case FiltRATE_movie:
                return {...state,rate:action.payload}
          default:


return state;
}}
export default movieReducer