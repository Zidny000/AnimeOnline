import {useParams} from 'react-router'
import AnimeWatchingMain from './Anime-watching_main'
import useFetch from '../useFetch'




const AnimeWatching = () => {

 const { id } = useParams();
  
 const {data:videos,isPending,setData} = useFetch("http://localhost:8000/api/videos/"+id);
 


 return ( 
   <div className="Anime-watching">

   
    
   { isPending && <div id="preloder">
   <div class="loader"></div>
   </div>}
   { videos && < AnimeWatchingMain videos={videos}  /> }

   </div>
   );
}
 
export default AnimeWatching;