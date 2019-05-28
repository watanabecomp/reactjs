import React from 'react';

class BlockPrice extends React.Component {
    render() {
      return (
        <div id="block_price" class="block_price">
          <h2>Price</h2>
          <p class="sm_h">今までの矯正よりも60%安い価格</p>
          <strong>20<small>万円</small></strong>
          <div class="s_block_prices">
            <div class="p_price_img">
              <img src="img/price_1.png"/>
            </div>
            <div class="p_price_img">
              <img src="img/price_2.png"/>
            </div>
            <div class="p_price_img">
              <img src="img/price_3.png"/>
            </div>
          </div>
          <p class="desc">
            フルセットのマウスピース、診療費、送料の全てがこの価格に含めまれております。<br class="c_res_pc" />
            Oh My Tooth！がこれ以上請求することはありません。
          </p>
        </div>
      );
    }
  }

  
export default BlockPrice;