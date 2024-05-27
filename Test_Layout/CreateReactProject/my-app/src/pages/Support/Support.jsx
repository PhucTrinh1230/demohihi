
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Content from '../../components/layout/ContentSupport/Content';
import Slidebar from '../../components/layout/Slidebar';
import Header from '../../components/layout/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import ContentPage2 from '../../components/layout/ContentSupport/ContentPage2';
const MainContent = () => {
  return (
    <Router>
      <div className='container'>
        <React.Fragment>
          <Header />
          <Row>
            <Col xxl={4} xl={4} lg={4} md={0} sm={0} >
              <Slidebar />

            </Col>

            <Col xxl={8} xl={8} lg={8} md={12} sm={12}>

              <Routes>
                <Route path='/' element={<Content/>} />
                <Route path='/support2' element={<ContentPage2/>} />
              </Routes>

            </Col>


          </Row>
        </React.Fragment>
      </div>
    </Router>



  )
}
export default MainContent;