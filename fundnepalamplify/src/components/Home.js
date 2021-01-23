import React from 'react'
//import './x.css'
class Home extends React.Component
{

  render() {
      return (
        <div>
         
          {/* Masthead*/}
          <header className="masthead">
            <div className="container">
              <div className="masthead-subheading"></div>
              <div className="masthead-heading text-uppercase"></div>
              <a className="btn btn-success btn-xl text-uppercase js-scroll-trigger mbut" href="#services">Tell Me More</a>
            </div>
          </header>
          {/* Services*/}
          <section className="page-section" id="services">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Fund Nepal</h2>
                <h3 className="section-subheading text-muted">Helping hand for the needy.</h3>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
                  </span>
                  <h4 className="my-3">Projects</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-laptop fa-stack-1x fa-inverse" />
                  </span>
                  <h4 className="my-3">Development</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary" />
                    <i className="fas fa-lock fa-stack-1x fa-inverse" />
                  </span>
                  <h4 className="my-3">Environment</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
              </div>
            </div>
          </section>
          {/* Portfolio Grid*/}
          <section className="page-section bg-light" id="portfolio">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6 mb-4">
                  <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                      </div>
                      <img className="img-fluid" src="assets/img/portfolio/01-thumbnail.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Threads</div>
                      <div className="portfolio-caption-subheading text-muted">Illustration</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                  <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                      </div>
                      <img className="img-fluid" src="assets/img/portfolio/02-thumbnail.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Explore</div>
                      <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                  <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                      </div>
                      <img className="img-fluid" src="assets/img/portfolio/03-thumbnail.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Finish</div>
                      <div className="portfolio-caption-subheading text-muted">Identity</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                  <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                      </div>
                      <img className="img-fluid" src="assets/img/portfolio/04-thumbnail.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Lines</div>
                      <div className="portfolio-caption-subheading text-muted">Branding</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                  <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                      </div>
                      <img className="img-fluid" src="assets/img/portfolio/05-thumbnail.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Southwest</div>
                      <div className="portfolio-caption-subheading text-muted">Website Design</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                      </div>
                      <img className="img-fluid" src="assets/img/portfolio/06-thumbnail.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">Window</div>
                      <div className="portfolio-caption-subheading text-muted">Photography</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About*/}
          <section className="page-section" id="about">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
              <ul className="timeline">
                <li>
                  <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2009-2011</h4>
                      <h4 className="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>March 2011</h4>
                      <h4 className="subheading">An Agency is Born</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>December 2012</h4>
                      <h4 className="subheading">Transition to Full Service</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>July 2014</h4>
                      <h4 className="subheading">Phase Two Expansion</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Be Part
                      <br />
                      Of Our
                      <br />
                      Story!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* Team*/}
          <section className="page-section bg-light" id="team">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="" />
                    <h4>Kay Garland</h4>
                    <p className="text-muted">Lead Designer</p>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="" />
                    <h4>Larry Parker</h4>
                    <p className="text-muted">Lead Marketer</p>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="" />
                    <h4>Diana Petersen</h4>
                    <p className="text-muted">Lead Developer</p>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
              </div>
            </div>
          </section>
          {/* Clients*/}
          <div className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
          {/* Contact*/}
          <section className="page-section" id="contact">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
              <form id="contactForm" name="sentMessage" noValidate="novalidate">
                <div className="row align-items-stretch mb-5">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group mb-md-0">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-group-textarea mb-md-0">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div id="success" />
                  <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </section>
          {/* Footer*/}
          
          {/* Portfolio Modals*/}
          {/* Modal 1*/}
          <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="modal-body">
                        {/* Project Details Go Here*/}
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2020</li>
                          <li>Client: Threads</li>
                          <li>Category: Illustration</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times mr-1" />
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 2*/}
          <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="modal-body">
                        {/* Project Details Go Here*/}
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/02-full.jpg" alt="" />
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2020</li>
                          <li>Client: Explore</li>
                          <li>Category: Graphic Design</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times mr-1" />
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 3*/}
          <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="modal-body">
                        {/* Project Details Go Here*/}
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/03-full.jpg" alt="" />
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2020</li>
                          <li>Client: Finish</li>
                          <li>Category: Identity</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times mr-1" />
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 4*/}
          <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="modal-body">
                        {/* Project Details Go Here*/}
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/04-full.jpg" alt="" />
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2020</li>
                          <li>Client: Lines</li>
                          <li>Category: Branding</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times mr-1" />
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 5*/}
          <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="modal-body">
                        {/* Project Details Go Here*/}
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/05-full.jpg" alt="" />
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2020</li>
                          <li>Client: Southwest</li>
                          <li>Category: Website Design</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times mr-1" />
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 6*/}
          <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="modal-body">
                        {/* Project Details Go Here*/}
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/06-full.jpg" alt="" />
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2020</li>
                          <li>Client: Window</li>
                          <li>Category: Photography</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times mr-1" />
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default Home