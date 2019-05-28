import React from 'react';

class BlockWorks extends React.Component {
    render() {
      return (
        <div id="block_works" class="block_works ">
          <h2>How it works</h2>
          <p class="sm_h">たったの3ステップ</p>
          <div class="p_works_con">
            <div id="p_carousel_works">
              <div class="p_work">
                <img src="img/work_1.png"/>
                <div class="p_work_con">
                  <h3>01</h3>
                  <p class="lg">
                    歯のデータを<br/>
                    とりましょう
                  </p>
                  <p class="sm">
                    提携歯科クリニックで、<br/>
                    歯科矯正医があなたの<br/>
                    歯のデータをスキャンします。
                  </p>
                </div>
              </div>
              <div class="p_work">
                <img src="img/work_2.png"/>
                <div class="p_work_con">
                  <h3>02</h3>
                  <p class="lg">
                    治療法<br/>
                    をデザイン
                  </p>
                  <p class="sm">
                    あなたの笑顔を取り戻すため、<br/>
                    歯科矯正医はオーダーメイドの<br/>
                    矯正計画を作ります。歯を動か<br/>
                    す 3 D デ ジ タル モ デル を 調 整<br/>
                     して い きま す。
                  </p>
                </div>
              </div>
              <div class="p_work">
                <img src="img/work_3.png"/>
                <div class="p_work_con">
                  <h3>03</h3>
                  <p class="lg">
                    マウスピースを<br/>
                    着けて笑顔に
                  </p>
                  <p class="sm">
                    おしゃれな箱に入ったマウスピー<br/>
                    スがあなたの自宅へ2週間おきに<br/>
                    届きます。マウスピースを交換 す<br/>
                    ることで、少しづつ 歯は 動き、<br/>
                    笑 顔 に 近 づいていきます
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  
export default BlockWorks;