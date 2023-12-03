import React from "react";
import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        {/* FIRST SECTION */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Thapa Technical</h1>
              <p>
                Are yoy uwb wubw cwebc wecbwec weciwbcwcbcw bcw c iue evev
                evevevev ev evev evbeve.evev evnev e,v ueinve vejvnev ev ev
                ejvev nqlv qiuvbqe vienvqevinv qvqei
              </p>

              <div className="btn btn-group">
                <a herf="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a herf="/service">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

            {/* hero images */}

            <div className="hero-image">
              <img
                src="/images/home.jpg"
                alt="home image"
                width="400"
                height="800"
              ></img>
            </div>
          </div>
        </section>
      </main>

      {/* SECOND SECTION */}
      <Analytics/>

      {/* THIRD SECTION */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images */}

          <div className="hero-image">
            <img
              src="/images/home-second.jpg"
              alt="home-second image"
              width="400"
              height="500"
            ></img>
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get started Today</h1>
            <p>
              Are yoy uwb wubw cwebc wecbwec weciwbcwcbcw bcw c iue evev
              evevevev ev evev evbeve.evev evnev e,v ueinve vejvnev ev ev ejvev
              nqlv qiuvbqe vienvqevinv qvqei
            </p>

            <div className="btn btn-group">
              <a herf="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a herf="/service">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
