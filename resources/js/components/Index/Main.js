import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';



const Main = (props) => {

  

  const trend = props.trend[0];
  const popular = props.trend[1];
  const recent = props.trend[2];
  const live = props.trend[3];

  


 return ( 
   <div className="Main">
    <section className="product spad">
      <div className="container">
       <div className="row">
       <div class="col-lg-8">
          <div class="trending__product">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-8">
                <div class="section-title">
                <h4 >Trending Now</h4>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="btn__all">
                  <a href="#" class="primary-btn">View All <span class="arrow_right"></span></a>
                </div>
              </div>
            </div>

            <div class="row">
              {trend && trend.map(data => (
                  <div class="col-lg-4 col-md-6 col-sm-6" key={data.id}>
                  <div class="product__item">
                  <Link to={`/anime-details/${data.id}`}>
                    <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${data.image})` }}>
                      <div class="ep">18 / {data.rating}</div>
                      <div class="comment"><i class="fa fa-comments"></i>{data.comment_int}</div>
                      <div class="view"><i class="fa fa-eye"></i> {data.watched_int}</div>
                    </div>
                    <div class="product__item__text">
                      <ul>
                        <li>{data.status}</li>
                        <li>{data.type}</li>
                      </ul>
                      <h5><a href="#">{data.name}</a></h5>
                    </div>
                    </Link>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          <div class="popular__product">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-8">
                <div class="section-title">
                  <h4>Popular Shows</h4>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="btn__all">
                  <a href="#" class="primary-btn">View All <span class="arrow_right"></span></a>
                </div>
              </div>
            </div>
            <div className="row">
            {popular && popular.map(data => (
                  
                  <div class="col-lg-4 col-md-6 col-sm-6" key={data.id}>
                  <div class="product__item">
                    <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${data.image})` }}>
                      <div class="ep">18 / {data.rating}</div>
                      <div class="comment"><i class="fa fa-comments"></i>{data.comment_int}</div>
                      <div class="view"><i class="fa fa-eye"></i> {data.watched_int}</div>
                    </div>
                    <div class="product__item__text">
                      <ul>
                        <li>{data.status}</li>
                        <li>{data.type}</li>
                      </ul>
                      <h5><a href="#">{data.name}</a></h5>
                    </div>
                  </div>
                </div>
              ))}
             
                
                
              
             </div>
            </div>
          <div class="recent__product">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-8">
                <div class="section-title">
                  <h4>Recently Added Shows</h4>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="btn__all">
                  <a href="#" class="primary-btn">View All <span class="arrow_right"></span></a>
                </div>
              </div>
            </div>
            <div class="row">
              
               
            {recent && recent.map(data => (
                  <div class="col-lg-4 col-md-6 col-sm-6" key={data.id}>
                  <div class="product__item">
                    <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${data.image})` }}>
                      <div class="ep">18 / {data.rating}</div>
                      <div class="comment"><i class="fa fa-comments"></i>{data.comment_int}</div>
                      <div class="view"><i class="fa fa-eye"></i> {data.watched_int}</div>
                    </div>
                    <div class="product__item__text">
                      <ul>
                        <li>{data.status}</li>
                        <li>{data.type}</li>
                      </ul>
                      <h5><a href="#">{data.name}</a></h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="live__product">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-8">
                <div class="section-title">
                  <h4>Live Action</h4>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="btn__all">
                  <a href="#" class="primary-btn">View All <span class="arrow_right"></span></a>
                </div>
              </div>
            </div>
            <div class="row">
             
              
            {live && live.map(data => (
                  <div class="col-lg-4 col-md-6 col-sm-6" key={data.id} >
                  <div class="product__item">
                    <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${data.image})` }}>
                      <div class="ep">18 / {data.rating}</div>
                      <div class="comment"><i class="fa fa-comments"></i>{data.comment_int}</div>
                      <div class="view"><i class="fa fa-eye"></i> {data.watched_int}</div>
                    </div>
                    <div class="product__item__text">
                      <ul>
                        <li>{data.status}</li>
                        <li>{data.type}</li>
                      </ul>
                      <h5><a href="#">{data.name}</a></h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div class="product__sidebar">
            <div class="product__sidebar__view">
              <div class="section-title">
                <h5>Top Views</h5>
              </div>
              <ul class="filter__controls">
                <li class="active" data-filter="*">Day</li>
                <li data-filter=".week">Week</li>
                <li data-filter=".month">Month</li>
                <li data-filter=".years">Years</li>
              </ul>
              <div class="filter__gallery">
                <div class="product__sidebar__view__item set-bg mix day years" style={{backgroundImage : `url("img/sidebar/tv-1.jpg")`}} data-setbg="">
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">Boruto: Naruto next generations</a></h5>
                </div>
                <div class="product__sidebar__view__item set-bg mix month week" style={{backgroundImage : `url("img/sidebar/tv-2.jpg")`}} data-setbg="">
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                </div>
                <div class="product__sidebar__view__item set-bg mix week years" style={{backgroundImage : `url("img/sidebar/tv-3.jpg")`}} data-setbg="">
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                </div>
                <div class="product__sidebar__view__item set-bg mix years month" style={{backgroundImage : `url("img/sidebar/tv-4.jpg")`}} data-setbg="">
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                </div>
                <div class="product__sidebar__view__item set-bg mix day" style={{backgroundImage : `url("img/sidebar/tv-5.jpg")`}}  data-setbg="">
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">Fate stay night unlimited blade works</a></h5>
                </div>
              </div>
            </div>
            <div class="product__sidebar__comment">
              <div class="section-title">
                <h5>New Comment</h5>
              </div>
              <div class="product__sidebar__comment__item">
                <div class="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-1.jpg" alt="" />
                </div>
                <div class="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                  <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                </div>
              </div>
              <div class="product__sidebar__comment__item">
                <div class="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-2.jpg" alt="" />
                </div>
                <div class="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5><a href="#">Shirogane Tamashii hen Kouhan sen</a></h5>
                  <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                </div>
              </div>
              <div class="product__sidebar__comment__item">
                <div class="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-3.jpg" alt="" />
                </div>
                <div class="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5><a href="#">Kizumonogatari III: Reiket su-hen</a></h5>
                  <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                </div>
              </div>
              <div class="product__sidebar__comment__item">
                <div class="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-4.jpg" alt="" />
                </div>
                <div class="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5><a href="#">Monogatari Series: Second Season</a></h5>
                  <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
   </div>
  );
}
 
export default Main;