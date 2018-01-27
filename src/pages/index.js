import React from 'react'
import Link from 'gatsby-link'

import topImage from "../img/top_image.jpg"
import firstFeature from "../img/first_feature.jpg"
import secondFeature from "../img/second_feature.jpg"
import thirdFeature from "../img/third_feature.jpg"

const IndexPage = () => (
  <div>

    {/* Jumbotron */}
    <div style={{
      minHeight: "60vh",
      marginTop: "-6%"
    }}>
      <div className="container" style={{textAlign: "center"}}>
        <div className="jumbotron" style={{backgroundColor: "inherit", width: "100%"}}>
          <div className="row">
            <div className="col-md-3 col-0"></div>
            <div className="col-md-6 col-12">
              <img className="img-fluid" src={topImage} />
            </div>
            <div className="col-md-3 col-0"></div>
          </div>
          {/*Remove this link if you change the image*/}
          <a className="text-muted" href='https://www.freepik.com/free-vector/young-man-in-cap-working-at-his-clean-office-desk_1311408.htm'>[Label vector created by Iconicbestiary - Freepik.com]</a>
          
          <h1>Product helps you be awesome</h1>
          <hr style={{width: "80%"}} />
          <h2 style={{fontSize: "24px", fontWeight: 300}}>
            It's the best tool on the market to satisfy your needs.
          </h2>
          <br />
          <p><Link to="/product"><button type="button" className="btn btn-warning btn-lg">Try it now!</button></Link></p>
        </div>
      </div>
    </div>

    {/* Features */}
    <div className="container" style={{textAlign: "center"}}>
      <div className="row">
        <div className="col-md-6 col-12">
          <img className="img-fluid" src={firstFeature} />
          <br />
          {/*Remove this link if you change the image*/}
          <a className="text-muted" href='https://www.freepik.com/free-vector/young-man-in-cap-working-at-his-clean-office-desk_1311408.htm'>[Label vector created by Iconicbestiary - Freepik.com]</a>
        </div>
        <div className="col-md-6 col-12 align-self-center">
          <div className="card" style={{border: "none"}}>
            <div className="card-body">
              <h3 className="card-title">Achieve everything</h3>
              <p style={{fontSize: "1.1rem"}} className="card-text">Product helps you do the stuff you need to achieve more. Our product helps you achieve everything, all the time.</p>
              <Link to="/product" className="card-link">Read more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{marginTop: "5%"}}>
        <div className="col-md-6 col-12 align-self-center">
          <div className="card" style={{border: "none"}}>
            <div className="card-body">
              <h3 className="card-title">Collaborate</h3>
              <p style={{fontSize: "1.1rem"}} className="card-text">Product also works great for teams. It increases the creativity and productivity of the teams or something, helping them reach their full potential.</p>
              <Link to="/product" className="card-link">Read more</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <img className="img-fluid" src={secondFeature} style={{padding: "5%"}} />
          <br />
          {/*Remove this link if you change the image*/}
          <a className="text-muted" href='https://www.freepik.com/free-vector/team-working-on-a-project-in-conference-room_1311071.htm'>[Label vector created by Iconicbestiary - Freepik.com]</a>
        </div>
      </div>
      <div className="row" style={{marginTop: "5%"}}>
        <div className="col-md-6 col-12">
          <img className="img-fluid" src={thirdFeature} />
          <br />
          {/*Remove this link if you change the image*/}
          <a className="text-muted" href='https://www.freepik.com/free-vector/business-leader-leading-the-way-to-his-colleagues_1311605.htm'>[Label vector created by Iconicbestiary - Freepik.com]</a>
        </div>
        <div className="col-md-6 col-12 align-self-center">
          <div className="card" style={{border: "none"}}>
            <div className="card-body">
              <h3 className="card-title">Lead the way</h3>
              <p style={{fontSize: "1.1rem"}} className="card-text">Innovation helps us become better over time. By using product you become a leader for your industry, leading the way towards a beautiful sunset.</p>
              <Link to="/product" className="card-link">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to action */}
    <div className="row" style={{marginTop: "5%", backgroundColor: "#f9f9f9", textAlign: "center", height: "30em"}}>
      <div className="col-md-4 col-1"></div>
      <div className="col-md-4 col-10 align-self-center">
        <h3>
          Thousands of users already love our product. <br /><br /> Try it, and find out why!
        </h3>
        <br />
        <p><Link to="/product"><button type="button" className="btn btn-warning btn-lg">Get started</button></Link></p>
      </div>
      <div className="col-md-4 col-1"></div>
    </div>
  </div>
)

export default IndexPage
