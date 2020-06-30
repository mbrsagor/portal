import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import PageTitle from '../../components/common/PageTitle';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';

class AddDoctor extends Component {
    state = {  }
    render() { 
        return (
            <>
            <Header />
            <Row className="fix_height m-0">
                <Col className="sidebar_bg_color p-0" lg={2}>
                    <Sidebar />
                </Col>
                <Col className="p-0" lg={10}>
                    <PageTitle title="Add Doctor" sub_title="Add New Doctor" />
                </Col>
            </Row>
            <Footer />
            </>
        );
    }
}
 
export default AddDoctor;
