import React from 'react';
class Footer extends React.Component {
    render() {
      return (
        <footer> 
          <h2>Oh my teeth!</h2>
          <div class="footer_menu">
            <ul>
              <li><a href="#">利用規約</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
              <li><a href="#">特定商取引に基づく表記</a></li>
              <li><a href="#">お問い合わせ</a></li>
              <li><a href="#">よくある質問</a></li>
              <li><a href="#">運営会社</a></li>
            </ul>
          </div>
          <p>@Oh my teeth! All rights reserved.</p>
        </footer>
      );
    }
  }

  
export default Footer;