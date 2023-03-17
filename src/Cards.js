
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import JobAppFormik from './Form'
import Example from './Modal'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import 'reactjs-popup/dist/index.css';
import './cards.scss'
import img1 from './images/img1.png';
import guvi from './images/guvi.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import card1 from './images/GUVI_25.png';
import card2 from './images/GUVI_50.png';
import card3 from './images/GUVI_100.png';
import card4 from './images/Amazon_100.png';
import card5 from './images/card5.png';
import card6 from './images/card6.png';
import card7 from './images/card7.png';
import card8 from './images/card8.png';
import card9 from './images/card9.png';
import card10 from './images/card10.png';
import card11 from './images/card11.png';
import card12 from './images/card12.png';

function GroupExample() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submit = (event) => {
    console.log(event.target.value)
  }
  
 
  return (
    <>
      <>
        <Navbar expand="lg" variant="light" bg="light" >
          <>
            <Navbar.Brand href="#">

              <img className='' src={guvi} alt="logo" max-width="10%" style={{ height: "40px" }} />
            </Navbar.Brand>
            <Button className="login" variant="light"><b>Login</b></Button>
            <Button className='signup' variant="success">Sign Up</Button>
          </>
        </Navbar>
      </>
      <Container fluid>

        <Row>
          <Col className='c1_left'>

            <h1 className='c1_heading'>Refer & Earn Great Rewards.</h1>
            <h2>Apple products, Amazon Voucher & much more to win!</h2>
            <p>It’s a win-win season. Refer GUVI Free industry accredited courses to your friends & family to win exciting rewards. Earn referral points upon each verified sign-up & redeem points later to claim your prize.</p>
            <b><p>More Signups = Bigger Rewards!</p></b>

            <u><a className="nav-link" href="#">How does it work?</a></u><br></br>

            <p>Login to start referring your friends!</p>
            <>
      <Button variant="success" onClick={handleShow}>Login to Refer</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create your Free GUVI Account to Register or Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <p>Already have an account? -<a href='login'>Login</a></p>
            <JobAppFormik/> 
            <a href='Forgot Password'>Forgot Password?</a>
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submit}  className='pop_btn' variant="btn btn-success" >
            Create a Free Account
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
            
          </Col>
          <Col className='c1_right'>
            <img src={img1} alt="" width="100%" sty />
          </Col>
        </Row>




        <Row className='c2'>
          <h1 className='c2_heading'>How can Everybody Win Rewards?</h1>

          <Col className='c2_left'>
            <div>
              <img className="c2_img2" src={img2} alt="" width="60%" sty />
            </div>

            <div>
              <h3>How does this benefit my Friends?</h3>
              <p className='c2_content'>Your friends can sign-up to GUVI & Unlock their favorite Industry-accredited Courses on GUVI for Free. These are the Atomic library courses, which are accredited by well-reputed establishments like IIT-Madras & UiPath.</p>
            </div>

            <div>
              <img className="c2_img2" src={img4} alt="" width="60%" sty />
            </div>


          </Col>
          <Col className='c2_right'>
            <div>
              <h3>How will I win Rewards upon Referral?</h3>
              <p className='c3_content'>Refer our FREE Atomic Courses to your friends, & when they sign-up to GUVI for enrolling their favorite atomic course, then Your referral sign-up count increases. You’d win multiple amazing gifts like Amazon Gift Vouchers, Discount coupons & GUVI premium passes based on your referral sign-up count.</p>
            </div>

            <div>
              <img className="c2_img3" src={img3} alt="" width="40%" sty />
            </div>

            <div>
              <h3>Celebrate the Rewards together with Friends</h3>
              <p className='c4_content'>Now you’d win Amazon Gift Vouchers, GUVI Premium Passes & more based on your referral sign-up count. While your friends Win the Best Industry-accredited Courses for Free. Isn’t this referral program a Win-Win solution for all?</p>
            </div>

          </Col>
          <div>
            <Button className='c2_button' variant="success">Login to Refer</Button>
          </div>
        </Row>
        <Row>
          <div>
            <h1 className='c3_heading'>1 Free Sign-up = 1 Verified Referral</h1>
            <h2 className='c3_heading2'>More Verified Referrals = Multiple Rewards</h2>
          </div>
          <Col>
            <div>
              <CardGroup className='card_group'>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card1} />
                  <Card.Body>
                    <Card.Title>GUVI Coupon</Card.Title>
                    <Card.Text>
                      GUVI Coupon
                      25% OFF GUVI Coupon

                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>1</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card2} />
                  <Card.Body>
                    <Card.Title>GUVI Coupon</Card.Title>
                    <Card.Text>
                      GUVI Coupon
                      50% OFF GUVI Coupon{' '}
                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>2</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card3} />
                  <Card.Body>
                    <Card.Title>GUVI Coupon</Card.Title>
                    <Card.Text>
                      GUVI Coupon
                      100% OFF GUVI Coupon

                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>3</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card >
                <Card className='card_style'>
                  <Card.Img variant="top" src={card4} />
                  <Card.Body>
                    <Card.Title>Amazon Voucher</Card.Title>
                    <Card.Text>
                      Amazon Voucher
                      Get Amazon voucher worth Rs.100

                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>15</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card >
              </CardGroup>
              <CardGroup className='card_group'>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card5} />
                  <Card.Body>
                    <Card.Title>Amazon Voucher</Card.Title>
                    <Card.Text>
                      GUVI Coupon
                      25% OFF GUVI Coupon
                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>25</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card6} />
                  <Card.Body>
                    <Card.Title>Amazon Voucher</Card.Title>
                    <Card.Text>
                      GUVI Coupon
                      50% OFF GUVI Coupon{' '}
                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>40</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>

                    </Card.Text>
                  </Card.Body>

                </Card>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card7} />
                  <Card.Body>
                    <Card.Title>Premium Pass</Card.Title>
                    <Card.Text>
                      GUVI Coupon
                      100% OFF GUVI Coupon
                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>50</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card8} />
                  <Card.Body>
                    <Card.Title>Headphones</Card.Title>
                    <Card.Text>
                      Amazon Voucher
                      Get Amazon voucher worth Rs.100
                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>100</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card>
              </CardGroup>
              <CardGroup className='card_group'>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card9} />
                  <Card.Body>
                    <Card.Title>Smart Watch</Card.Title>
                    <Card.Text>
                      GUVI Coupon
                      25% OFF GUVI Coupon
                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>200</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card10} />
                  <Card.Body>
                    <Card.Title>Smart Phone</Card.Title>
                    <Card.Text>
                      GUVI Coupon
                      50% OFF GUVI Coupon{' '}
                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>500</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card11} />
                  <Card.Body>
                    <Card.Title>Airpods</Card.Title>
                    <Card.Text>
                      GUVI Coupon
                      100% OFF GUVI Coupon
                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>1000</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card>
                <Card className='card_style'>
                  <Card.Img variant="top" src={card12} />
                  <Card.Body>
                    <Card.Title>Apple Iphone</Card.Title>
                    <Card.Text>
                      Amazon Voucher
                      Get Amazon voucher worth Rs.100
                      <Row className='card_bottom'>
                        <Col className='card_ref'>
                          <p>2000</p>
                          <p>Verified Referrals</p>
                        </Col>
                        <Col><Button className='btn btn-success btn-lg float-right' variant="success" disabled>Redeem</Button></Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>

                </Card>
              </CardGroup>

            </div>
          </Col>
        </Row>
        <Row className='bottom'>
          <h1>FAQs</h1>
          <Col>

            <Accordion className='faq_que'>
              <Accordion.Item eventKey="0">
                <Accordion.Header> How do I participate in the Refer & Earn Reward Program?</Accordion.Header>
                <Accordion.Body className='faq_ans'>
                  The offer code will be shown instantly upon claiming the reward.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How I will receive the Voucher/Coupon code?</Accordion.Header>
                <Accordion.Body className='faq_ans'>
                  We will reach you through your registered email address or contact number within 7-14 working days to collect your delivery address information for sending the rewards.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How I will receive the earned reward items?</Accordion.Header>
                <Accordion.Body className='faq_ans'>
                  Please note that each signup is counted as valid referral only on the event of verifing the account information including both email and contact number
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>        Why is my referral sign-up count not updating itself?
                </Accordion.Header>
                <Accordion.Body className='faq_ans'>
                  We will reach you through your registered email address or contact number within 7-14 working days to collect your delivery address information for sending the rewards.

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </Col>
        </Row>

        <Row>
          <Col className='footer'>
            <h1>Refer more friends, Get more rewards, Repeat!</h1>
            <Button variant="success">Login to Refer</Button>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GroupExample;