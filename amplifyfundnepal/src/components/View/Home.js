import React from 'react'
import { Carousel } from 'react-bootstrap'

class Home extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        {/* Masthead*/}
        <header className="eslider">
          <div className="container-fluid">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://misf.org/wp-content/uploads/2017/12/example-slide-350-3.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://wowslider.com/sliders/demo-46/data1/images/blue_ocean.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </div>
        </header>
        {/* Services*/}
        <section className="page-section p-3" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Fund Nepal</h2>
              <h3 className="section-subheading text-muted">Helping hand for the needy.</h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-star" aria-hidden="true"></i>
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



        {/* Contact*/}
        <section className="page-section m-1 p-3 card" id="contact">
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