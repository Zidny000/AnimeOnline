import {useEffect,useState} from 'react'
import {useParams} from 'react-router'
import CategoryMain from './Category_main'

const Categories = () => {
  

 

  const { gener } = useParams();
 // const {data:front,isPending,setData} = useFetch("http://localhost:8000/api/categories/" + gener );

 const [front,setDetail] = useState(false);
   const [isPending , setIsPending] = useState(false);
 
   //console.log(detail)
   useEffect(()=>{
    const abortCont = new AbortController();
    fetch("http://localhost:8000/api/categories/" + gener,{signal:abortCont.signal})
    .then(res => {
     return res.json();
    })
    .then(data => {
     setDetail(data)
     setIsPending(false);
     
     
    })
  
    return () => abortCont.abort();
   },[gener]);


  

 return ( 
    <div className="Categories">
   
    { isPending && <div id="preloder">
    <div class="loader"></div>
    </div>}
    { front && < CategoryMain front={[front,gener]} /> }

    </div>
  );
}
 
export default Categories;