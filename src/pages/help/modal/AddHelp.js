import React, { Component } from 'react';
import HelpService from '../../../services/HelpService';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import HelpLine from '../HelpLine'

const help_service = new HelpService();

class AddHelp extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params) {
            help_service.getHelp(params.id)
                .then((help => {
                    this.refs.title.value = help.title;
                    this.refs.help_text.value = help.full_name;
                }))
        }
    }

    // Create help 
    handleCreate() {
        help_service.createHelp({
            "title": this.refs.title.value,
            "help_text": this.refs.help_text.value,
        }).then((result => {
            ToastsStore.success('successfully created the help center!');
        })).catch(() => {
            ToastsStore.warning('Something went wrong while creating the help center.');
        })
    }

    // Update help 
    handleUpdate(id) {
        help_service.updateHelp({
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
        }
        event.preventDefault();
        event.target.reset();
    }

    render() {
        
        return (
            <div>
                <HelpLine />
                <div className="modal fade mt-5" id="open-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title custom_model_title">Add new help service</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="modal-body text-left">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="title">Enter help title</label>
                                            <input type="text"
                                                className="form-control"
                                                id="title"
                                                ref="title"
                                                name="title"
                                                placeholder="Enter help title"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="help_text">Enter help text</label>
                                            <input type="text"
                                                className="form-control"
                                                id="help_text"
                                                ref="help_text"
                                                name="help_text"
                                                placeholder="Enter help text"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-file">
                                                <label className="custom-file-label" htmlFor="customFile">Help photo (Optional)</label>
                                                <input type="file"
                                                    name="help_image"
                                                    ref="help_image"
                                                    className="custom-file-input"
                                                    id="customFile"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer text-right">
                                    <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                                    <button onClick={this.handleCloseModal} type="submit" className="btn btn-success btn-sm">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastsContainer store={ToastsStore} />
            </div>
        );
    }
}

export default AddHelp;
