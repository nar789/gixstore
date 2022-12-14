
import Card from 'react-bootstrap/Card';
import {Col, Row, Button} from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div>
      
      
        <div class="content" style={{paddingLeft:30, paddingRight:30}}>


             <div class="row">
                <div class="col-sm-12">
                    <div class="page-title-box">
                        <div class="btn-group float-right">
                            <ol class="breadcrumb hide-phone p-0 m-0">
                                <li class="breadcrumb-item"><a href="#">Gix</a></li>
                                <li class="breadcrumb-item active">Store</li>
                            </ol>
                        </div>
                        <h4 class="page-title">GIX Store</h4>
                    </div>
                </div>
            </div>


            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="icon-contain">
                                                        <div class="row">
                                                            <div class="col-2 align-self-center">
                                                                <i class="fas fa-tasks text-gradient-success"></i>
                                                            </div>
                                                            <div class="col-10 text-right">
                                                                <h5 class="mt-0 mb-1">190</h5>
                                                                <p class="mb-0 font-12 text-muted">Build Tasks</p>   
                                                            </div>
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="card">
                                                <div class="card-body justify-content-center">
                                                    <div class="icon-contain">
                                                        <div class="row">
                                                            <div class="col-2 align-self-center">
                                                                <i class="far fa-gem text-gradient-danger"></i>
                                                            </div>
                                                            <div class="col-10 text-right">
                                                                <h5 class="mt-0 mb-1">62</h5>
                                                                <p class="mb-0 font-12 text-muted">Project</p>
                                                            </div>
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div> 
                                 </div>
              </div>


              <Card>
                <Card.Body>
                <div class="media mb-4">
                  <img className="d-flex mr-3 rounded-circle" src="assets/top.jpg" height="64" alt='asdf' />
                  <div class="media-body">
                      <h3 class="mt-0">??????????????????</h3>
                      <p className='text-success' >????????????????????? ????????? ?????????
                      </p>
                  </div>
              </div>

              <Row className="justify-content-center">
                <Col className='text-center'>
                  <Row className="justify-content-center">
                    <h5>4.9????</h5>
                  </Row>
                  <Row className="justify-content-center">
                    ?????? 325???
                  </Row>
                </Col>
                <Col>
                  <Row className="justify-content-center">
                    <h5>1?????? ??????</h5>
                  </Row>
                  <Row className="justify-content-center">
                    ????????????
                  </Row>
                </Col>
                <Col>
                  <Row className="justify-content-center">
                    <h5 className='text-success'>3???</h5>
                  </Row>
                  <Row className="justify-content-center">
                    ??? 3??? ??????
                  </Row>
                </Col>

              </Row>
              <Row className="justify-content-center mt-5">
                <Button href='/assets/GIX.apk' className="btn btn-gradient-success waves-effect waves-light btn-block"><h3 className='text-white'><i class="fab fa-android"></i></h3> APK ??????</Button>
              </Row>
              <Row className="justify-content-center mt-3">
                <Button href='/assets/windows.zip' className="btn btn-gradient-info waves-effect waves-light btn-block"><h3 className='text-white'><i class="fab fa-windows"></i></h3> Windows ????????????</Button>
              </Row>
              <Row className="justify-content-center mt-3">
                <Button href='https://nar789.github.io/gixar/views/' target='_blank' className="btn btn-gradient-purple waves-effect waves-light btn-block"><h3 className='text-white'><i class="fas fa-glasses"></i></h3> AR ??????</Button>
              </Row>


                </Card.Body>
              </Card>
              
              




        </div>
      
    </div>
  );
}

export default App;
