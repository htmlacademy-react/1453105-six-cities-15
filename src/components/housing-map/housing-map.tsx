import {LocationType, ShortHousingItem} from '../../types/types.ts';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.ts';
import leaflet from 'leaflet';
import {currentCustomIcon, defaultCustomIcon} from '../../const/const.ts';
import './housing-map.css';
import {useLocation} from 'react-router-dom';

type HousingMapProps = {
  city: LocationType;
  points: LocationType[];
  selectedItem: ShortHousingItem|null;
}

function HousingMap(props: HousingMapProps) {
  const { city, points, selectedItem } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef,city);
  const location = useLocation();

  useEffect(() => {
    if (map && selectedItem?.location) {
      points.forEach((point:LocationType) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: (selectedItem?.location === point) ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
        leaflet
          .circle([selectedItem.location.latitude,selectedItem.location.longitude ], 25000, {
            fillColor: '#64aff3',
            fillOpacity: 0.1
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedItem]);

  return(
    <div id="map"
      ref={mapRef}
      className={location.pathname === '/' ? 'map-block' : 'map-block-offer'}
    >
    </div>
  );
}

export default HousingMap;
