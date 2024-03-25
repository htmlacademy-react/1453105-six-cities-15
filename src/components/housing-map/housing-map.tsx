import {LocationType, ShortHousingItem} from '../../types/types.ts';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.ts';
import leaflet, {LayerGroup} from 'leaflet';
import {currentCustomIcon, defaultCustomIcon} from '../../const/const.ts';
import * as classNames from 'classnames';
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
  const markerLayer = useRef<LayerGroup>(new leaflet.LayerGroup());
  const location = useLocation();

  useEffect(() => {
    if (map) {
      map.setView([city.latitude, city.longitude], city.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);
  useEffect(() => {
    if (map) {
      points.forEach((point:LocationType) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: (selectedItem?.location === point) ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(markerLayer.current);
      });
    }
  }, [map, points, selectedItem]);

  const tempPath = location.pathname.includes('offer');

  return(
    <div id="map"
      ref={mapRef}
      className={classNames('map', tempPath ? 'offer__map' : 'cities__map')}
    >
    </div>
  );
}

export default HousingMap;
