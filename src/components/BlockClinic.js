import React from 'react';
import MapContainer from '../organism/MapContainer';

class BlockClinic extends React.Component {
    render() {
      return (
        <div id="block_clinic" class="block_clinic">
          <h2>Clinic</h2>
          <p class="sm_h">提携歯科医院</p>
          <div class="s_block_clinic">
            <h3>銀座しらゆり歯科</h3>
            <p class="info_1"><span>〒104-0061</span> 東京都中央区銀座2-4-18 ALBORE GINZA 5F</p>
            <p class="info_2">東京都メトロ有楽町線　銀座一丁目5番出口より徒歩0分</p>
            <p class="info_3">TEL: 03-6338-7826</p>
            <div class="s_block_clinic_info">
              <div class="p_clinic_company">
                <img src="img/building.png"/>
              </div>
              
              <MapContainer
                className="p_clinic_map"
                options={{
                  center: { lat: 41.0082, lng: 28.9784 },
                  zoom: 8
                }}
                onMapLoad={map => {
                  var marker = new window.google.maps.Marker({
                    position: { lat: 41.0082, lng: 28.9784 },
                    map: map,
                    title: 'Hello Istanbul!'
                  });
                }}
                id="map"
              />
            </div>
          </div>
        </div>
      );
    }
  }

  
export default BlockClinic;