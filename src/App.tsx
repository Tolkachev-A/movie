import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes,} from "react-router-dom";
import {MovieGallery} from "./page/MovieGallery";
import {MoviePage} from "./page/MoviePage";
import {Container} from "@mui/material";
import {Header} from "./components/Header";
import {useAppDispatch, useAppSelector} from "./hooks/appHooks";
import {fetchMoviesThank} from "./stor/movieGalleryReducer";

function App() {
    const dispatch = useAppDispatch()
    const itemsMovie = useAppSelector(state => state.movieGallery.itemsMovie)

    useEffect(() => {
        if (itemsMovie.length === 0) {
            dispatch(fetchMoviesThank())
        }
    }, [])


    return (
        <div className="App">
            <Container>
                <Header/>
                <Routes>
                    <Route path='/' element={<MovieGallery/>}/>
                    <Route path='/movie' element={<MoviePage/>}/>
                </Routes>
            </Container>
        </div>
    );
}

export default App;


// const [move, setMove]=useState<Array<any>>()
// const [moveVideo, setMoveVideo]=useState<string>()
// useEffect(()=>{
//   const response = axios.get('https://imdb-api.com/en/API/SearchSeries/k_x297nk26/lost' ).then((res)=>{
//     setMove(res.data.results)
//
//   })
// },[])
// function onclickHandler(id:string) {
//
//   axios.get(`https://imdb-api.com/en/API/YouTubeTrailer/k_x297nk26/${id}`).then(res=>{
//     setMoveVideo(res.data.videoId)
//
//   })
// }
//
// return (
//     <div className="App">
//       <iframe width="560" height="315" src={`https://www.youtube.com/embed/${moveVideo}`}title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen>
//
//       </iframe>
//       {moveVideo && moveVideo}
//
//       {move && move.map(item=>{
//         return <div>
//           title:{item.title}
//           <div onClick={()=>onclickHandler(item.id)}>
//             <img src= {item.image} alt="" style={{width:'200px'}}/>
//
//           </div>
//         </div>
//       })}
//
//     </div>
// );
// }