import {useState} from 'react';
import ReactPlayer from 'react-player';


const AnimeWatchingMain = (props) => {
  const [videoNum ,setVideoNum] = useState(props.videos[0].videos);
  const [videos , setVideos] = useState(props.videos);
 
  
  
 
 
 return ( 
  
   
    <div className="AnimeWatching">
  {/* //   <div class="breadcrumb-option">
  //     <div class="container">
  //       <div class="row">
  //         <div class="col-lg-12">
  //           <div class="breadcrumb__links">
  //             <a href="index-2.html"><i class="fa fa-home"></i> Home</a>
  //             <a href="categories.html">Categories</a>
  //             <a href="#">Romance</a>
  //             <span>{props.videos[0].name}</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>   
  //   </div> */}


  <section class="anime-details spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
        <div class="anime__video__player">
            <video key={videoNum} controls   width="840" height="480" >
              <source src={`../${videoNum}`} type="video/mp4" />

              <track kind="captions" label="English captions" src="#" srcLang="en" default />
            </video>
          </div>
           
       
          <div class="anime__details__episodes">
            <div class="section-title">
              <h5>List Name</h5>
            </div>
            {videos && videos.map( (video,idx) => (

              <a onClick={() => setVideoNum(video.videos)}style={{cursor:"pointer"}} >Ep {idx+1}</a>

            ))}
            

       
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="anime__details__review">
            <div class="section-title">
              <h5>Reviews</h5>
            </div>
            <div class="anime__review__item">
              <div class="anime__review__item__pic">
                <img src="../img/anime/review-1.jpg" alt="" />
              </div>
              <div class="anime__review__item__text">
                <h6>Chris Curry - <span>1 Hour ago</span></h6>
                <p>whachikan Just noticed that someone categorized this as belonging to the genre
                  "demons" LOL</p>
              </div>
            </div>
            <div class="anime__review__item">
              <div class="anime__review__item__pic">
                <img src="../img/anime/review-2.jpg" alt="" />
              </div>
              <div class="anime__review__item__text">
                <h6>Lewis Mann - <span>5 Hour ago</span></h6>
                <p>Finally it came out ages ago</p>
              </div>
            </div>
            <div class="anime__review__item">
              <div class="anime__review__item__pic">
                <img src="../img/anime/review-3.jpg" alt="" />
              </div>
              <div class="anime__review__item__text">
                <h6>Louis Tyler - <span>20 Hour ago</span></h6>
                <p>Where is the episode 15 ? Slow update! Tch</p>
              </div>
            </div>
            <div class="anime__review__item">
              <div class="anime__review__item__pic">
                <img src="../img/anime/review-4.jpg" alt="" />
              </div>
              <div class="anime__review__item__text">
                <h6>Chris Curry - <span>1 Hour ago</span></h6>
                <p>whachikan Just noticed that someone categorized this as belonging to the genre
                  "demons" LOL</p>
              </div>
            </div>
            <div class="anime__review__item">
              <div class="anime__review__item__pic">
                <img src="../img/anime/review-5.jpg" alt="" />
              </div>
              <div class="anime__review__item__text">
                <h6>Lewis Mann - <span>5 Hour ago</span></h6>
                <p>Finally it came out ages ago</p>
              </div>
            </div>
            <div class="anime__review__item">
              <div class="anime__review__item__pic">
                <img src="../img/anime/review-6.jpg" alt="" />
              </div>
              <div class="anime__review__item__text">
                <h6>Louis Tyler - <span>20 Hour ago</span></h6>
                <p>Where is the episode 15 ? Slow update! Tch</p>
              </div>
            </div>
          </div>
          <div class="anime__details__form">
            <div class="section-title">
              <h5>Your Comment</h5>
            </div>
            <form action="#">
              <textarea placeholder="Your Comment"></textarea>
              <button type="submit"><i class="fa fa-location-arrow"></i> Review</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

   </div>
  );
}
 
export default AnimeWatchingMain;