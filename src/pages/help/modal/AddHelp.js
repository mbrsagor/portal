import React, { Component } from 'react';


class AddHelp extends Component {

    render() {
        return (
            <>
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
                                    <button type="button" className="btn btn-danger  btn-sm" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success btn-sm">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddHelp;