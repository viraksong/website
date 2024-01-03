import { Link } from "react-router-dom";


const Home = () => {
    return ( 
<div className="container mx-auto position-relative">
    <h1 className="display-6 text-center">All prices are guaranteed.</h1>
    <p className="h6 text-center mb-5">do not wait. Get your holiday gift on time 
        <Link  className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="/about">
        FAQ {'>'} 
        </Link>
    </p>
    <div className="d-flex  row justify-content-center align-items-center g-2 ">
    <div className="col-md ">
        <div id="ipad" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
          
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="img/ipad-card-40-pro-202210.jpg" className="d-block w-100 img-thumbnail mx-auto" alt="..."/>
              <span className="position-absolute top-0 start-0 badge rounded-pill bg-danger">
                New!
              </span>
           
              <div className="carousel-caption d-none d-md-block">
                <h5 className="position-absolute top-100 start-50 translate-middle text-dark">iPad Pro</h5>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="img/ipad-card-40-air-202203.jpg" className="d-block w-100 img-thumbnail mx-auto" alt="..."/>
              <span className="position-absolute top-0 start-0 badge rounded-pill bg-danger">
                New!
              </span>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="position-absolute top-100 start-50 translate-middle text-dark">iPad Air</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src="img/ipad-card-40-ipad-202210.jpg" className="d-block w-100 img-thumbnail mx-auto" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="position-absolute top-100 start-50 translate-middle text-dark">iPad</h5>
              </div>
            </div>
          </div >
          <button className="carousel-control-prev" type="button" data-bs-target="#ipad" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#ipad" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
    
    <div className="col-md">
      <div id="macbook" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
        
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="img/mac-card-40-macbookpro-14-16-202310_GEO_US.jpg" className="d-block w-100 img-thumbnail mx-auto" alt="..."/>
            <span className="position-absolute top-0 start-0 badge rounded-pill bg-danger">
              New!
            </span>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="position-absolute top-100 start-50 translate-middle text-dark">MacBook Pro 16</h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="img/mac-card-40-macbook-air-13-15-202306.jpg" className="d-block w-100 img-thumbnail mx-auto" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="position-absolute top-100 start-50 translate-middle text-dark">MacBook Air 15 </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/mac-card-40-macbook-air-202110.jpg" className="d-block w-100 img-thumbnail mx-auto" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="position-absolute top-100 start-50 translate-middle text-dark">MacBook Air 13</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#macbook" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#macbook" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    
    <div className="col-md">
      <div id="imac" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="img/mac-card-40-imac-24-202310.jpg" className="d-block w-100 img-thumbnail mx-auto" alt="..."/>
            <span className="position-absolute top-0 start-0 badge rounded-pill bg-danger">
              New!
            </span>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="position-absolute top-100 start-50 translate-middle text-dark">iMac</h5>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img src="img/mac-card-40-macbook-air-13-15-202306.jpg" className="d-block w-100 img-thumbnail mx-auto" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="position-absolute top-100 start-50 translate-middle text-dark">MacBook</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/mac-card-40-macbook-air-202110.jpg" className="d-block w-100 img-thumbnail mx-auto" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="position-absolute top-100 start-50 translate-middle text-dark">MacBook Air</h5>      
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#imac" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#imac" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  </div>
</div>
     );
}
 
export default Home;