import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';

class ReportList extends Component {
    render() {
        return (
            <div className="report_list mb-3">
                <div className="card">
                    <div className="card-header"><FeatherIcon icon="align-justify" /> {this.props.header_title}</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <FeatherIcon icon="edit-3" /> {this.props.country_name} <span className={this.props.bg_name}>{this.props.count}</span></li>
                    </ul>
                    <div className="card-footer text-muted">Last udpated: <b>{this.props.date}</b></div>
                </div>
            </div>
        );
    }
}

export default ReportList;
