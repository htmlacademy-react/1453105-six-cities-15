import {LocationType, ShortHousingItem} from "../../types/types.ts";
import { useEffect, useRef} from "react";
import useMap from "../../hooks/useMap.ts";
import leaflet from "leaflet";
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from "../../const/const.ts";

type HousingMapProps = {
  city: LocationType;
  points: LocationType[];
  selectedItem: ShortHousingItem|null;
}

function HousingMap(props: HousingMapProps) {
  const { city, points, selectedItem } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef,city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  console.log('1', city, selectedItem );

  useEffect(() => {
    if (map) {
      points.forEach((point:LocationType) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: (selectedItem?.location === point ) ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedItem]);

  return(
    <div id="map"
         ref={mapRef}
         style={{height: '682px'}}>
    </div>
  );
}

export default HousingMap;
