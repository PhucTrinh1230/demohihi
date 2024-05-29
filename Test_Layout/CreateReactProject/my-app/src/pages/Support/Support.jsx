
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Content from '../../components/layout/ContentSupport/Content';
import Slidebar from '../../components/layout/Slidebar';
import Header from '../../components/layout/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import ContentPage2 from '../../components/layout/ContentSupport/ContentPage2';
import ContentPage3 from '../../components/layout/ContentSupport/ContentPage3';
import ContentPage4 from '../../components/layout/ContentSupport/ContentPage4';
import ContentPage5 from '../../components/layout/ContentSupport/ContentPage5';
import ContentPage6 from '../../components/layout/ContentSupport/ContentPage6';
import ContentPage7 from '../../components/layout/ContentSupport/ContentPage7';
import ContentPage8 from '../../components/layout/ContentSupport/ContentPage8';
import ContentPage9 from '../../components/layout/ContentSupport/ContentPage9';
import ContentPage10 from '../../components/layout/ContentSupport/ContentPage10';
import ContentPage11 from '../../components/layout/ContentSupport/ContentPage11';
const MainContent = () => {
  return (
    <Router>
      <div className='container'>
        <React.Fragment>
          <Header />
          <Row>
            <Col xxl={4} xl={4} lg={4} md={1} sm={1} >
              <Slidebar />

            </Col>

            <Col xxl={8} xl={8} lg={8} md={11} sm={11}>

              <Routes>
                <Route path='/' element={<Content/>} />
                <Route path='/support2' element={<ContentPage2/>} />
                <Route path='/support3' element={<ContentPage3/>} />
                <Route path='/support4' element={<ContentPage4/>} />
                <Route path='/support5' element={<ContentPage5/>} />
                <Route path='/support6' element={<ContentPage6/>} />
                <Route path='/support7' element={<ContentPage7/>} />
                <Route path='/support8' element={<ContentPage8/>} />
                <Route path='/support9' element={<ContentPage9/>} />
                <Route path='/support10' element={<ContentPage10/>} />
                <Route path='/support11' element={<ContentPage11/>} />
              </Routes>

            </Col>


          </Row>
        </React.Fragment>
      </div>
    </Router>



  )
}
export default MainContent;