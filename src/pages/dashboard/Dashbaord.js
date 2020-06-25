import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReportList from '../../components/report/ReportList';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';
import PageTitle from '../../components/common/PageTitle';

class Dashboard extends Component {
    render() {
        return (
            <>
                <Header />
                <Row className="fix_height m-0">
                    <Col className="sidebar_bg_color p-0" lg={2}>
                        <Sidebar />
                    </Col>
                    <Col className="p-0" lg={10}>
                        <PageTitle title="Dashboard" sub_title="Dashboard" />
                        <div className="page-container m-2 p-2">

                            <Row>
                                <Col md={6}>
                                    <ReportList header_title="Today Total Test" country_name="Bangaldesh" bg_name="bg-info text-light" count="15030" date="06/06/2020" />
                                </Col>

                                <Col md={6}>
                                    <ReportList header_title="Today Total Effected" country_name="Bangaldesh" bg_name="bg-warning text-light" count="3500" date="06/06/2020" />
                                </Col>

                                <Col md={6}>
                                    <ReportList header_title="Today Total Dies" country_name="Bangaldesh" bg_name="bg-danger text-light" count="120" date="06/06/2020" />
                                </Col>

                                <Col md={6}>
                                    <ReportList header_title="Today Total Improve" country_name="Bangaldesh" bg_name="bg-success text-light" count="1620" date="06/06/2020" />
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </>
        );
    }
}

export default Dashboard;
