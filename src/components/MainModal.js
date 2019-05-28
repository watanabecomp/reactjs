import React from 'react';
import ProtoTypes from 'prop-types';


class MainModal extends React.Component {
    closeModal = () => {
        this.props.controlModal(false);
    }
    render() {
      return (
        <div className={`notify is-visible ${ this.props.openModalStatus ? 'show_modal' : ''}`} >
          <div class="modal_body">
            <div class="popup-controls">
              <a href="#" onClick={this.closeModal} id="modal_close" class="section-close light">&#60;</a>
            </div>
            <div class="popup-content">
              <div class="popup-title">
                <h4 class="title txt-light">Almost here!</h4>
                <p class="subtitle txt-light-transparent">Subscribe to our newsletter and we will send you a notification about the launch of our brand new site.</p>
              </div>
              <div class="content-block">
                <form class="notify-form">
                  <div class="form-group form_row_name">
                    <input class="form-control" type="text" placeholder="First Name*"/>
                    <input class="form-control" type="text" placeholder="Last Name*"/>
                  </div>
                  <div class="form-group ">
                    <input class="form-control" type="text" placeholder="Email Adress*"/>
                  </div>
                  <div class="form-group ">
                    <input class="form-control" type="text" placeholder="Mobile*"/>
                  </div>
                  <div class="form-group ">
                    <input  type="file" id="form_file" class="dis_none" placeholder="First Name*"/>
                    <label id="file_control" class="form-control" for="inputGroup">Choose pictures*</label>
                  </div>
                  <div class="form-group ">
                    <button class="btn btn-l btn-light" type="submit"><span class="btn-caption">Send</span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  
MainModal.protoTypes = {
    controlModal: ProtoTypes.func,
    openModalStatus: ProtoTypes.bool
}
  
export default MainModal;