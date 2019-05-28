import React from 'react';

class BlockResults extends React.Component {
    render() {
      return (
        <div id="block_results" class="block_results">
            <h2>Results</h2>
            <p class="sm_h">みんなのSmile</p>
            <div class="s_block_results">
              <div class="c_row">
                <div class="c_col_md_6">
                  <div class="c_row">
                    <div class="p_clinic">
                      <img src="img/insta_1.png"/>
                    </div>
                  </div>
                </div>
                <div class="c_col_md_6">
                    <div class="c_row">
                      <div class="p_clinic">
                      <img src="img/insta_1.png"/>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      );
    }
  }

  
export default BlockResults;