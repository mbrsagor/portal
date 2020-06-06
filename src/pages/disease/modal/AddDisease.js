import React, { Component } from 'react';

class AddDisease extends Component {

    render() {
        return (
            <>
                <div className="modal fade" id="open-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add new Disease</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body text-left">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="name">Enter Disease Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter disease name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer text-right">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddDisease;
