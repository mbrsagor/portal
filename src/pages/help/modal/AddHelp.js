import React, { Component } from 'react';
import HelpService from '../../../services/HelpService';

const help_service = new HelpService();

class AddHelp extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params) {
            help_service.getCustomer(params.id)
                .then((help => {
                    this.refs.title.value = help.title;
                    this.refs.help_text.value = help.full_name;
                }))
        }
    }

    // Create help 
    handleCreate() {
        help_service.createCustomer({
            "title": this.refs.title.value,
            "help_text": this.refs.help_text.value,
        }).then((result => {
            console.log("Help service created");
        })).catch(() => {
            console.log("Help service failed");
        })
    }

    // Update help 
    handleUpdate(id) {
        help_service.updateCustomer({
            "id": id,
            "title": this.refs.title.value,
            "help_text": this.refs.help_text.value,
        }).then((result) => {
            console.log(result);
        }).catch(() => {
            console.log("Help update failed");
        });
    }

    // Create update customer `handler`
    handleSubmit(event) {
        const { match: { params } } = this.props;

        if (params && params.id) {
            this.handleUpdate(params.id);
        } else {
            this.handleCreate();
        } event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="row mt-5 ml-5">
                    <div className="col-lg-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input className="form-control" type="text" ref='title' placeholder="help title" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" ref='help_text' placeholder="Help text" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddHelp;