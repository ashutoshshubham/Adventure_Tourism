import React from 'react'
import './style.css'

const Home = () => {
  return (
    <div>
      {/* <div className='vh-100' style={{ backgroundImage: 'url("https://rare-gallery.com/uploads/posts/114990-far-cry-4-game-open-world-adventure-games-shooter-kyrat-himalayas-mountain-tibet-boat-lake-screenshot.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

      </div> */}
      <div className='home-bg-image'>

        <div className='container home-text-position text-center'>
          <h1 className="" style={{ fontSize: '8vh' }}>
            <b>IT'S TIME TO ADVENTURE</b>
          </h1>
          <p className='fs-5 mt-3' style={{ color: 'black' }}>
            <b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, explicabo? Eum provident minima voluptate accusamus dolorum deserunt tempore delectus sequi facilis, laudantium esse enim. Temporibus pariatur, tempora dolor quod hic rerum quasi similique voluptatem a libero consequatur aliquid laborum ex quos placeat odio numquam cumque. Soluta illum molestias accusantium quaerat.
            </b>
          </p>
        </div>

        <div className="container">

          <div className="row" style={{ marginTop: '200px', marginBottom: '40px' }}>

            <div className="col-md-4">
              <div className="card mt-5">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img
                    src="https://cutewallpaper.org/21/hdr-wallpaper/Arizona-Road-HDR-HD-Wallpaper-WallpaperFX.jpg"
                    className="img-fluid"
                  />
                  {/* <a href="#!"> */}
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                  {/* </a> */}
                </div>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    “Man cannot discover new oceans unless he has the courage to lose sight of the shore.”
                  </p>
                  <br />
                  <span><b>― Andre Gide</b></span>
                  {/* <a href="#!" className="btn btn-primary">
                    Button
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img
                    src="https://www.wallpaperup.com/uploads/wallpapers/2017/05/23/1090402/5082227aa45743157ae557ca49b56d36-700.jpg"
                    className="img-fluid"
                  />
                  {/* <a href="#!"> */}
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                  {/* </a> */}
                </div>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    “Would you tell me, please, which way I ought to go from here?”
                    “That depends a good deal on where you want to get to.”
                    “I don’t much care where –”
                    “Then it doesn’t matter which way you go.”
                  </p>
                  <span><b>― Lewis Carroll</b></span>
                  {/* <a href="#!" className="btn btn-primary">
                    Button
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mt-5">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img
                    src="https://img3.wallspic.com/previews/9/8/4/7/97489/97489-autumn-path-sunlight-landscape-morning-x750.jpg"
                    className="img-fluid"
                  />
                  {/* <a href="#!"> */}
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                  {/* </a> */}
                </div>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                  “It’s a dangerous business, Frodo, going out your door. You step onto the road, and if you don’t keep your feet, there’s no knowing where you might be swept off to.”

                  </p>
                  <span><b>— Bilbo Baggins</b></span>
                  {/* <a href="#!" className="btn btn-primary">
                    Button
                  </a> */}
                </div>
              </div>
            </div>

          </div>


        </div>

      </div>

    </div>
  )
}

export default Home