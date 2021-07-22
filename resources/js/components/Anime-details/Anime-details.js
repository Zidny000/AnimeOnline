import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useFetch from '../useFetch'
import AnimeDetailsMain from './Anime-details_main'
//import { render } from "sass";


const AnimeDetails= () => {
  var { id } = useParams();
   const [sid ,setSid ] = useState(id);
  
  function change(isd){
    setSid(isd);
    
  }

  console.log(id);
 

  
   const [detail,setDetail] = useState(false);
   const [isPending , setIsPending] = useState(false);
 
   console.log(detail)
   useEffect(()=>{
    const abortCont = new AbortController();
    fetch("http://localhost:8000/api/details/"+sid,{signal:abortCont.signal})
    .then(res => {
     return res.json();
    })
    .then(data => {
     setDetail(data)
     setIsPending(false);
     
     
    })
  
    return () => abortCont.abort();
   },[sid]);
  const gener = detail ? detail[0].gener:"Romance";
 
  const {data:similar,isPending:s} = useFetch("http://localhost:8000/api/details/similar/"+gener );
  
  
  
 return ( 
  <div className="Anime-details">
 
  { isPending   && s && <div id="preloder">
  <div class="loader"></div>
  </div>}
  
  { detail && similar &&  < AnimeDetailsMain detail={[detail,similar,change]}  /> }

  </div>

  );
}
 
export default AnimeDetails;
