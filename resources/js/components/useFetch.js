import {useEffect,useState} from 'react';


const useFetch = (url) => {
 
 const [data,setData] = useState(null);
 const [isPending, setisPending] = useState(true);
 

 useEffect(()=>{
  const abortCont = new AbortController();
  fetch(url,{signal:abortCont.signal})
  .then(res => {
   return res.json();
  })
  .then(data => {
   setData(data)
   setisPending(false);
   
   
  })

  return () => abortCont.abort();
 },[]);
 return { data, isPending}
}

export default useFetch ;