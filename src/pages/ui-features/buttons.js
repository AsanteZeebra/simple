import React from "react";

const Buttons = () =>{
  return(
    <>
     
         
            <div className="row">
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-body">
                        <h4 className="card-title">Single color buttons</h4>
                        <p className="card-description">Add className <code>.btn-{}</code> for buttons in theme colors</p>
                        <div className="template-demo">
                          <button type="button" className="btn btn-primary">Primary</button>
                          <button type="button" className="btn btn-secondary">Secondary</button>
                          <button type="button" className="btn btn-success">Success</button>
                          <button type="button" className="btn btn-danger">Danger</button>
                          <button type="button" className="btn btn-warning">Warning</button>
                          <button type="button" className="btn btn-info">Info</button>
                          <button type="button" className="btn btn-light">Light</button>
                          <button type="button" className="btn btn-dark">Dark</button>
                          <button type="button" className="btn btn-link">Link</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h4 className="card-title">Rounded buttons</h4>
                        <p className="card-description">Add className <code>.btn-rounded</code></p>
                        <div className="template-demo">
                          <button type="button" className="btn btn-primary btn-rounded btn-fw">Primary</button>
                          <button type="button" className="btn btn-secondary btn-rounded btn-fw">Secondary</button>
                          <button type="button" className="btn btn-success btn-rounded btn-fw">Success</button>
                          <button type="button" className="btn btn-danger btn-rounded btn-fw">Danger</button>
                          <button type="button" className="btn btn-warning btn-rounded btn-fw">Warning</button>
                          <button type="button" className="btn btn-info btn-rounded btn-fw">Info</button>
                          <button type="button" className="btn btn-light btn-rounded btn-fw">Light</button>
                          <button type="button" className="btn btn-dark btn-rounded btn-fw">Dark</button>
                          <button type="button" className="btn btn-link btn-rounded btn-fw">Link</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-body">
                        <h4 className="card-title">Outlined buttons</h4>
                        <p className="card-description">Add className <code>.btn-outline-{}</code> for outline buttons</p>
                        <div className="template-demo">
                          <button type="button" className="btn btn-outline-primary btn-fw">Primary</button>
                          <button type="button" className="btn btn-outline-secondary btn-fw">Secondary</button>
                          <button type="button" className="btn btn-outline-success btn-fw">Success</button>
                          <button type="button" className="btn btn-outline-danger btn-fw">Danger</button>
                          <button type="button" className="btn btn-outline-warning btn-fw">Warning</button>
                          <button type="button" className="btn btn-outline-info btn-fw">Info</button>
                          <button type="button" className="btn btn-outline-light btn-fw">Light</button>
                          <button type="button" className="btn btn-outline-dark btn-fw">Dark</button>
                          <button type="button" className="btn btn-link btn-fw">Link</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h4 className="card-title">Inverse buttons</h4>
                        <p className="card-description">Add className <code>.btn-inverse-{} for inverse buttons</code></p>
                        <div className="template-demo">
                          <button type="button" className="btn btn-inverse-primary btn-fw">Primary</button>
                          <button type="button" className="btn btn-inverse-secondary btn-fw">Secondary</button>
                          <button type="button" className="btn btn-inverse-success btn-fw">Success</button>
                          <button type="button" className="btn btn-inverse-danger btn-fw">Danger</button>
                          <button type="button" className="btn btn-inverse-warning btn-fw">Warning</button>
                          <button type="button" className="btn btn-inverse-info btn-fw">Info</button>
                          <button type="button" className="btn btn-inverse-light btn-fw">Light</button>
                          <button type="button" className="btn btn-inverse-dark btn-fw">Dark</button>
                          <button type="button" className="btn btn-link btn-fw">Link</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 grid-margin stretch-card">
                <div className="card">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="card-body">
                        <h4 className="card-title">Icon Buttons</h4>
                        <p className="card-description">Add className <code>.btn-icon</code> for buttons with only icons</p>
                        <div className="template-demo d-flex justify-content-between flex-nowrap">
                          <button type="button" className="btn btn-primary btn-rounded btn-icon">
                            <i className="ti-home"></i>
                          </button>
                          <button type="button" className="btn btn-dark btn-rounded btn-icon">
                            <i className="ti-world"></i>
                          </button>
                          <button type="button" className="btn btn-danger btn-rounded btn-icon">
                            <i className="ti-email"></i>
                          </button>
                          <button type="button" className="btn btn-info btn-rounded btn-icon">
                            <i className="ti-star"></i>
                          </button>
                          <button type="button" className="btn btn-success btn-rounded btn-icon">
                            <i className="ti-location-pin"></i>
                          </button>
                        </div>
                        <div className="template-demo d-flex justify-content-between flex-nowrap">
                          <button type="button" className="btn btn-inverse-primary btn-rounded btn-icon">
                            <i className="ti-home"></i>
                          </button>
                          <button type="button" className="btn btn-inverse-dark btn-icon">
                            <i className="ti-world"></i>
                          </button>
                          <button type="button" className="btn btn-inverse-danger btn-icon">
                            <i className="ti-email"></i>
                          </button>
                          <button type="button" className="btn btn-inverse-info btn-icon">
                            <i className="ti-star"></i>
                          </button>
                          <button type="button" className="btn btn-inverse-success btn-icon">
                            <i className="ti-location-pin"></i>
                          </button>
                        </div>
                        <div className="template-demo d-flex justify-content-between flex-nowrap mt-4">
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="ti-heart text-danger"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="ti-music-alt text-dark"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="ti-star text-primary"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="ti-bar-chart-alt text-info"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="ti-stats-up text-success"></i>
                          </button>
                        </div>
                        <div className="template-demo d-flex justify-content-between flex-nowrap">
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="ti-heart"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="ti-music-alt"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="ti-star"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="ti-bar-chart-alt"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="ti-stats-up"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="card-body">
                        <h4 className="card-title">Button Size</h4>
                        <p className="card-description">Use className <code>.btn-{}</code></p>
                        <div className="template-demo">
                          <button type="button" className="btn btn-outline-secondary btn-lg">btn-lg</button>
                          <button type="button" className="btn btn-outline-secondary btn-md">btn-md</button>
                          <button type="button" className="btn btn-outline-secondary btn-sm">btn-sm</button>
                        </div>
                        <div className="template-demo mt-4">
                          <button type="button" className="btn btn-danger btn-lg">btn-lg</button>
                          <button type="button" className="btn btn-success btn-md">btn-md</button>
                          <button type="button" className="btn btn-primary btn-sm">btn-sm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Block buttons</h4>
                    <p className="card-description">Add className <code>d-grid gap-2</code> to parent div of button element</p>
                    <div className="template-demo d-grid gap-2">
                      <button type="button" className="btn btn-info btn-lg btn-block">Block buttons <i className="ti-menu float-right"></i>
                      </button>
                      <button type="button" className="btn btn-dark btn-lg btn-block">Block buttons</button>
                      <button type="button" className="btn btn-primary btn-lg btn-block">
                        <i className="ti-user"></i> Block buttons </button>
                      <button type="button" className="btn btn-outline-secondary btn-lg btn-block">Block buttons</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin">
                <div className="card">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-body">
                        <h4 className="card-title">Button groups</h4>
                        <p className="card-description">Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code></p>
                        <div className="template-demo">
                          <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">1</button>
                            <button type="button" className="btn btn-outline-secondary">2</button>
                            <button type="button" className="btn btn-outline-secondary">3</button>
                          </div>
                          <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="ti-heart"></i>
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="ti-calendar"></i>
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="ti-time"></i>
                            </button>
                          </div>
                        </div>
                        <div className="template-demo">
                          <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary">1</button>
                            <button type="button" className="btn btn-primary">2</button>
                            <button type="button" className="btn btn-primary">3</button>
                          </div>
                          <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary">
                              <i className="ti-heart"></i>
                            </button>
                            <button type="button" className="btn btn-primary">
                              <i className="ti-calendar"></i>
                            </button>
                            <button type="button" className="btn btn-primary">
                              <i className="ti-time"></i>
                            </button>
                          </div>
                        </div>
                        <div className="template-demo mt-4">
                          <div className="btn-group-vertical" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="ti-upload"></i>
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="ti-split-v"></i>
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="ti-download"></i>
                            </button>
                          </div>
                          <div className="btn-group-vertical" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">Default</button>
                            <div className="btn-group">
                              <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">Dropdown</button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item">Go back</a>
                                <a className="dropdown-item">Delete</a>
                                <a className="dropdown-item">Swap</a>
                              </div>
                            </div>
                            <button type="button" className="btn btn-outline-secondary">Default</button>
                          </div>
                          <div className="btn-group-vertical" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">Top</button>
                            <button type="button" className="btn btn-outline-secondary">Middle</button>
                            <button type="button" className="btn btn-outline-secondary">Bottom</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h4 className="card-title">Button with text and icon</h4>
                        <p className="card-description">Wrap icon and text inside <code>.btn-icon-text</code> and use <code>.btn-icon-prepend</code> or <code>.btn-icon-append</code> for icon tags </p>
                        <div className="template-demo">
                          <button type="button" className="btn btn-primary btn-icon-text">
                            <i className="ti-file btn-icon-prepend"></i> Submit </button>
                          <button type="button" className="btn btn-dark btn-icon-text"> Edit <i className="ti-file btn-icon-append"></i>
                          </button>
                          <button type="button" className="btn btn-success btn-icon-text">
                            <i className="ti-alert btn-icon-prepend"></i> Warning </button>
                        </div>
                        <div className="template-demo">
                          <button type="button" className="btn btn-danger btn-icon-text">
                            <i className="ti-upload btn-icon-prepend"></i> Upload </button>
                          <button type="button" className="btn btn-info btn-icon-text"> Print <i className="ti-printer btn-icon-append"></i>
                          </button>
                          <button type="button" className="btn btn-warning btn-icon-text">
                            <i className="ti-reload btn-icon-prepend"></i> Reset </button>
                        </div>
                        <div className="template-demo mt-2">
                          <button type="button" className="btn btn-outline-primary btn-icon-text">
                            <i className="ti-file btn-icon-prepend"></i> Submit </button>
                          <button type="button" className="btn btn-outline-secondary btn-icon-text"> Edit <i className="ti-file btn-icon-append"></i>
                          </button>
                          <button type="button" className="btn btn-outline-success btn-icon-text">
                            <i className="ti-alert btn-icon-prepend"></i> Warning </button>
                        </div>
                        <div className="template-demo">
                          <button type="button" className="btn btn-outline-danger btn-icon-text">
                            <i className="ti-upload btn-icon-prepend"></i> Upload </button>
                          <button type="button" className="btn btn-outline-info btn-icon-text"> Print <i className="ti-printer btn-icon-append"></i>
                          </button>
                          <button type="button" className="btn btn-outline-warning btn-icon-text">
                            <i className="ti-reload btn-icon-prepend"></i> Reset </button>
                        </div>
                        <div className="template-demo mt-2">
                          <button className="btn btn-outline-dark btn-icon-text">
                            <i className="ti-apple btn-icon-prepend"></i>
                            <span className="d-inline-block text-left">
                              <small className="font-weight-light d-block">Available on the</small> App Store </span>
                          </button>
                          <button className="btn btn-outline-dark btn-icon-text">
                            <i className="ti-android btn-icon-prepend"></i>
                            <span className="d-inline-block text-left">
                              <small className="font-weight-light d-block">Get it on the</small> Google Play </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Social Icon Buttons</h4>
                    <p className="card-description">Add className <code>.btn-social-icon</code></p>
                    <div className="template-demo">
                      <button type="button" className="btn btn-social-icon btn-outline-facebook"><i className="ti-facebook"></i></button>
                      <button type="button" className="btn btn-social-icon btn-outline-youtube"><i className="ti-youtube"></i></button>
                      <button type="button" className="btn btn-social-icon btn-outline-twitter"><i className="ti-twitter-alt"></i></button>
                      <button type="button" className="btn btn-social-icon btn-outline-dribbble"><i className="ti-dribbble"></i></button>
                      <button type="button" className="btn btn-social-icon btn-outline-linkedin"><i className="ti-linkedin"></i></button>
                      <button type="button" className="btn btn-social-icon btn-outline-google"><i className="ti-google"></i></button>
                    </div>
                    <div className="template-demo">
                      <button type="button" className="btn btn-social-icon btn-facebook"><i className="ti-facebook"></i></button>
                      <button type="button" className="btn btn-social-icon btn-youtube"><i className="ti-youtube"></i></button>
                      <button type="button" className="btn btn-social-icon btn-twitter"><i className="ti-twitter-alt"></i></button>
                      <button type="button" className="btn btn-social-icon btn-dribbble"><i className="ti-dribbble"></i></button>
                      <button type="button" className="btn btn-social-icon btn-linkedin"><i className="ti-linkedin"></i></button>
                      <button type="button" className="btn btn-social-icon btn-google"><i className="ti-google"></i></button>
                    </div>
                    <div className="template-demo">
                      <button type="button" className="btn btn-social-icon btn-facebook btn-rounded"><i className="ti-facebook"></i></button>
                      <button type="button" className="btn btn-social-icon btn-youtube btn-rounded"><i className="ti-youtube"></i></button>
                      <button type="button" className="btn btn-social-icon btn-twitter btn-rounded"><i className="ti-twitter-alt"></i></button>
                      <button type="button" className="btn btn-social-icon btn-dribbble btn-rounded"><i className="ti-dribbble"></i></button>
                      <button type="button" className="btn btn-social-icon btn-linkedin btn-rounded"><i className="ti-linkedin"></i></button>
                      <button type="button" className="btn btn-social-icon btn-google btn-rounded"><i className="ti-google"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Social button with text</h4>
                    <p className="card-description">Add className <code>.btn-social-icon-text</code></p>
                    <div className="template-demo">
                      <button type="button" className="btn btn-social-icon-text btn-facebook"><i className="ti-facebook"></i>Facebook</button>
                      <button type="button" className="btn btn-social-icon-text btn-youtube"><i className="ti-youtube"></i>Youtube</button>
                      <button type="button" className="btn btn-social-icon-text btn-twitter"><i className="ti-twitter-alt"></i>Twitter</button>
                      <button type="button" className="btn btn-social-icon-text btn-dribbble"><i className="ti-dribbble"></i>Dribbble</button>
                      <button type="button" className="btn btn-social-icon-text btn-linkedin"><i className="ti-linkedin"></i>Linkedin</button>
                      <button type="button" className="btn btn-social-icon-text btn-google"><i className="ti-google"></i>Google</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
    </>
  )
}

export default Buttons;