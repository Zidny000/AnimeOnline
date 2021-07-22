
import Hero from './Hero'
import Main from './Main'
import useFetch from '../useFetch'

import $ from 'jquery';




const Index = () => {

  const {data:trend,isPending:a} = useFetch("http://localhost:8000/api/front/Trending");
 
  const {data:popular,isPending:b} = useFetch("http://localhost:8000/api/front/Popular");
  const {data:recent,isPending:c} = useFetch("http://localhost:8000/api/front/Recent");
  const {data:live,isPending:d} = useFetch("http://localhost:8000/api/front/Live");
  
  
    
  
 
 return ( 
    <div className="index">
      
    {  a  && b && c && d && <div id="preloder">
    <div class="loader"></div>
    </div>}
    <Hero />
    
    {  trend && popular && recent && live &&  < Main trend={[trend,popular,recent,live]} /> }
     
    </div>

   
  );
}
 
export default Index;