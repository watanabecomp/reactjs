import React from 'react';
import ProtoTypes from 'prop-types';

class BlockBana extends React.Component {
    openModal = () => {
        this.props.controlModal(true);
    };

    render() {
      return (
        <div id="block_bana" class="block_bana">
          <div class="p_bana_img">
            <img src="img/bana.png"/>
          </div>
          <div class="p_bana_con">
            <h1>Oh my teeth!</h1>
            <p class="sm">あなたの歯並び<br/>
            自宅でなおしませんか</p>
            <p class="lg">今だけ 20万円が5万円<br/>
            玄関先までマススピースをお届けします</p>
            <a href="#" onClick={this.openModal} class="btn_get">
              <span>-　今だけ 20万円が5万円　-</span>
              <strong>モニターに応募する</strong>
            </a>
            <p class="des_get">モニター募集終了まで 6/30 00:00</p>
          </div>
        </div>
      );
    }
}
  
BlockBana.protoTypes = {
    controlModal: ProtoTypes.bool
}
export default BlockBana;