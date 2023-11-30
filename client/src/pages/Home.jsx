import React from "react";

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
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered compaines</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well known Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>

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
