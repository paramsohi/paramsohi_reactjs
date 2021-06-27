import React from "react";

function Home() {
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "266px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">Sanajit Jana</b>
                          <b className="is-hidden">Designer</b>
                          <b className="is-visible">Developer</b>
                        </span>
                      </h1>
                      <div className="about-social-icon text-center">
                        <ul className="about-social">
                          <li className="wow fadeIn" data-wow-delay=".8s">
                            <a
                              href="https://www.linkedin.com/in/sanajit-jana-60880b190/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".2s">
                            <a
                              href="https://www.facebook.com/sanajitjanafb"
                              target="newtab"
                            >
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".4s">
                            <a
                              href="https://twitter.com/SanajitJana9"
                              target="newtab"
                            >
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay="1.2s">
                            <a
                              href="https://www.instagram.com/sanajitjana01/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".6s">
                            <a
                              href="https://in.pinterest.com/sanajitjana1/_saved/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-pinterest-p"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay="1s">
                            <a
                              href="https://www.behance.net/sanajitjana1"
                              target="newtab"
                            >
                              <i
                                className="fa fa-behance"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>What I do</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        In present time i'm working on multi-role, as Web
                        Developer i design and create various website. And as
                        UI/UX Designer i create many design for Web Application
                        and Mobile Application. I create the beauty of the site.
                        I'm responsible for the site's technical aspects, such
                        as its performance and capacity, which are measures of a
                        website's speed and how much traffic the site can
                        handle. In addition, I'm create content for the site.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <i
                        className="fa fa-pencil-square-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Working Hard</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Always belief in hard-work in my profession</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <i
                        className="fa fa-globe love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Web Design</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Passionate about Web Design from start</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <i
                        className="fa fa-file-image-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>UI/UX Design</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".4s">
                      <i
                        className="fa fa-book love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Reading Books</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Love to read books
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-back"></div>
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                    <div className="about-image">
                      <img
                        src="assets/img/about-image.jpg"
                        alt=""
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>Hello! This is Sanajit</h3>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit,Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <a className="about-link-1" href="#home">
                        Download Resume
                      </a>
                      <a className="about-link-2" href="#home">
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-counter text-center">
              <div className="counter">
                <div className="container">
                  <div className="row wow fadeIn">
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-pencil-square-o stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">0021</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Web Design Completed</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-crop stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">0040</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>UI/UX Design Done</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-bolt stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">0015</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Website Created</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-coffee stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">0085</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Cups Coffee Taken</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ Skill =============================== --> */}

        <div id="skill">
          <div className="skill-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>My Skill</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elitsed
                      eiusmod tempor enim minim veniam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn">
                <div className="col-md-6">
                  <div className="skill-details text-left">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-details">
                    <div className="content">
                      <div className="col">
                        <ul id="skill-main">
                          <li>
                            <h3>Web Design-95%</h3>
                          </li>
                          <li>
                            <h3>UI/UX Design-90%</h3>
                          </li>
                          <li>
                            <h3>Web Developing-82%</h3>
                          </li>
                          <li>
                            <h3>Photoshop-75%</h3>
                          </li>
                          <li>
                            <h3>Photography-65%</h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ RESUME =============================== --> */}

        <div id="resume">
          <div className="resume-content">
            <div className="resume-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>My Resume / Educational</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elitsed eiusmod tempor enim minim veniam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-6">
                    <div className="resume-details" data-wow-delay=".2s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>School</h3>
                        <h2>2010-2017</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Completed my School Life from Haludbari High School
                          (H.S.), Khejuri-II, Purba Medinipur, WB-721430
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="resume-details" data-wow-delay=".3s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Graduation</h3>
                        <h2>2017-2020</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Achived my Graduation Degree from CCLMS (Contai
                          College of Learning and Management Science), Contai,
                          WB-721401
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".4s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Master Degree</h3>
                        <h2>2021-2023</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="row main-row wow fadeIn">
                  <div className="col-md-12">
                    <div className="main-title text-center">
                      <h3>My Resume / Working Experience</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elitsed eiusmod tempor enim minim veniam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row">
                  <div className="col-md-6 col-sm-12">
                    <div className="exp-details" data-wow-delay=".2s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Patel iinfo</h3>
                        <h4>Repub Member</h4>
                        <h2>2019-2020</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I did an intership at Patel Info as a Repub Team
                          Member
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="exp-details" data-wow-delay=".3s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Uaguria Software</h3>
                        <h4>Web Developer</h4>
                        <h2>2020-Present</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Currently I am working here as a Web Developer.</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4 col-sm-4">
                    <div className="exp-details" data-wow-delay=".4s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-cogs exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Supreme Company</h3>
                        <h4>Designer &amp; Developer</h4>
                        <h2>2013-2016</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ WORK =============================== --> */}

        <div id="work">
          <div className="work-content">
            <div className="work-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>My Portfolio</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elitsed eiusmod tempor enim minim veniam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-details">
                <div className="container">
                  <ul id="filters" className="clearfix">
                    <li>
                      <span
                        className="filter active"
                        data-filter=".web, .graphics, .development, .photography"
                      >
                        All
                      </span>
                    </li>
                    <li>
                      <span className="filter" data-filter=".web">
                        Web-design
                      </span>
                    </li>
                    <li>
                      <span className="filter" data-filter=".graphics">
                        Graphics-design
                      </span>
                    </li>
                    <li>
                      <span className="filter" data-filter=".development">
                        Development
                      </span>
                    </li>
                    <li>
                      <span className="filter" data-filter=".photography">
                        Photography
                      </span>
                    </li>
                  </ul>
                  <div id="portfoliolist">
                    <div className="portfolio graphics" data-cat="graphics">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".2s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="assets/img/portfolios/graphics/1.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/img/portfolios/graphics/1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="portfolio web" data-cat="web">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".4s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="assets/img/portfolios/web/1.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/img/portfolios/web/1.jpg" alt="" />
                      </div>
                    </div>
                    <div
                      className="portfolio development"
                      data-cat="development"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".6s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/development/1.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/img/portfolios/development/1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="portfolio graphics" data-cat="graphics">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".8s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/graphics/2.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/img/portfolios/graphics/2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="portfolio development"
                      data-cat="development"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".2s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/development/2.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/img/portfolios/development/2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="portfolio web" data-cat="web">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".4s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/web/2.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/img/portfolios/web/2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="portfolio graphics" data-cat="graphics">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".6s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/graphics/3.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/img/portfolios/graphics/3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="portfolio development"
                      data-cat="development"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".8s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/development/3.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/img/portfolios/development/3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="portfolio photography"
                      data-cat="photography"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".2s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/photography/1.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/img/portfolios/photography/1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="portfolio web" data-cat="web">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".4s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/web/3.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/img/portfolios/web/3.jpg" alt="" />
                      </div>
                    </div>
                    <div
                      className="portfolio photography"
                      data-cat="photography"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".6s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/photography/2.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/img/portfolios/photography/2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="portfolio photography"
                      data-cat="photography"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".8s"
                      >
                        <div className="overlay text-center">
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/photography/3.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/img/portfolios/photography/3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>My Service</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elitsed eiusmod tempor enim minim veniam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img src="assets/img/s1.jpg" alt="" />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-briefcase service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Work On Time</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img src="assets/img/s2.jpg" alt="" />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Full Time Support</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img src="assets/img/s3.jpg" alt="" />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-balance-scale service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Amazing Design</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img src="assets/img/s4.jpg" alt="" />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>All Time Active</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img src="assets/img/s5.jpg" alt="" />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Made With Bootsrap</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img src="assets/img/s6.jpg" alt="" />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Fully Responsive</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Testimonials</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elitsed eiusmod tempor enim minim veniam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <section id="carousel">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <div className="quote">
                              <i className="fa fa-quote-left fa-4x"></i>
                            </div>
                            <div
                              className="carousel slide"
                              id="fade-quote-carousel"
                              data-ride="carousel"
                              data-interval="3000"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="active item">
                                  <blockquote>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Quidem, veritatis nulla
                                      eum laudantium totam tempore optio
                                      doloremque laboriosam quas, quos eaque
                                      molestias odio aut eius animi. Impedit
                                      temporibus nisi accusamus.
                                      <br />
                                      <span>Ishrak Ahmed</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Quidem, veritatis nulla
                                      eum laudantium totam tempore optio
                                      doloremque laboriosam quas, quos eaque
                                      molestias odio aut eius animi. Impedit
                                      temporibus nisi accusamus.
                                      <br />
                                      <span>Kamrul Hasan</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Quidem, veritatis nulla
                                      eum laudantium totam tempore optio
                                      doloremque laboriosam quas, quos eaque
                                      molestias odio aut eius animi. Impedit
                                      temporibus nisi accusamus.
                                      <br />
                                      <span>Shahadat Murshed</span>
                                    </p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ BLOG ========================== --> */}

        <div id="blog">
          <div className="blog-content">
            <div className="blog-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>My Blog</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elitsed eiusmod tempor enim minim veniam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details wow fadeIn text-left">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <img
                          src="assets/img/blog/blog1.jfif"
                          alt="blog-img"
                          className="blog-img"
                        />
                        <div className="blog-head">
                          <h3>
                            <strong>Who is the best?</strong>
                          </h3>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore.
                          </p>
                          <a
                            href="https://medium.com/@sanajitjana1402"
                            target="_blank"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <img
                          src="assets/img/blog/blog2.png"
                          alt="blog-img"
                          className="blog-img"
                        />
                        <div className="blog-head">
                          <h3>
                            <strong>Who is the best?</strong>
                          </h3>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore.
                          </p>
                          <a
                            href="https://medium.com/@sanajitjana1402"
                            target="_blank"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <img
                          src="assets/img/blog/blog3.jfif"
                          alt="blog-img"
                          className="blog-img"
                        />
                        <div className="blog-head">
                          <h3>
                            <strong>Who is the best?</strong>
                          </h3>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore ...
                          </p>
                          <a
                            href="https://medium.com/@sanajitjana1402"
                            target="_blank"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ textAlign: "center" }}>
                      <a
                        href="https://medium.com/@sanajitjana1402"
                        target="_blank"
                        className="btn btn-default"
                        style={{
                          width: "50%",
                          fontSize: "16px",
                          backgroundColor: "#efd236",
                        }}
                      >
                        More Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Home;
