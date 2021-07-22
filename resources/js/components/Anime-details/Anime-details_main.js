import {Link} from 'react-router-dom'

const AnimeDetailsMain = (props) => {

    const detail = props.detail[0]; 
    const similar = props.detail[1];
    const change = props.detail[2];



 return ( 
    <div className="AnimeDetails">
     <div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__links">
                        <a href="index-2.html"><i class="fa fa-home"></i> Home</a>
                        <a href="categories.html">Categories</a>
                        <span>{detail && detail.map(data => data.gener) }</span>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section class="anime-details spad">
        <div class="container">
        {detail && detail.map(data => (
                            <div class="anime__details__content " key={data.id}>
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="anime__details__pic set-bg" style={{backgroundImage : `url(http://127.0.0.1:8000/${data.image})`}} data-setbg="img/anime/review-3.jpg">
                                        <div class="comment"><i class="fa fa-comments"></i> {data.comment_int}</div>
                                        <div class="view"><i class="fa fa-eye"></i> {data.watched_int}</div>
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                    <div class="anime__details__text">
                                        <div class="anime__details__title">
                                            <h3>{data.name}</h3>
                                            <span>フェイト／ステイナイト, {data.japaName}</span>
                                        </div>
                                        {/* <div class="anime__details__rating">
                                            <div class="rating">
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star-half-o"></i></a>
                                            </div>
                                            <span>1.029 Votes</span>
                                        </div> */}
                                        <p>{data.description} mother’s last words send Hina on a quest to find a
                                            legendary hero from the Waste War - the fabled Ace!</p>
                                        <div class="anime__details__widget">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6">
                                                    <ul>
                                                        <li><span>Type:</span> {data.type}</li>
                                                        <li><span>Studios:</span> {data.studios} </li>
                                                        <li><span>Date aired:</span> {data.dateAired} </li>
                                                        <li><span>Status:</span> {data.status}</li>
                                                        <li><span>Genre:</span> {data.gener} </li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <ul>
                                                        
                                                        <li><span>Rating:</span> {data.rating} / 10 times</li>
                                                        <li><span>Duration:</span> {data.duration}</li>
                                                        <li><span>Quality:</span> {data.quality}</li>
                                                        <li><span>Views:</span> {data.watched_int}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="anime__details__btn">
                                            
                                            <Link to={`/anime-watching/${data.id}`} class="watch-btn"><span>Watch Now</span> <i
                                                    class="fa fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            ))}

            <div class="row">
                <div class="col-lg-8 col-md-8">
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
                                <img src="../img/anime/review-6.jpg" alt=""/>
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
                <div class="col-lg-4 col-md-4">
                    <div class="anime__details__sidebar">
                        <div class="section-title">
                            <h5>you might like...</h5>
                        </div>
                    {similar && similar.map(item => (
                        
                       
                        <div class="product__sidebar__view__item set-bg" onClick={()=>{change(item.id)}} style={{backgroundImage : `url(../${item.image})`}} data-setbg="" key={item.id}>
                            <div class="ep">{item.rating} /10</div>
                            <div class="view"><i class="fa fa-eye"></i> {item.watched_int}</div>
                            <h5><a href="">{item.name}</a></h5>
                            
                        </div>
                        
                    ))}

                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}
 
export default AnimeDetailsMain;