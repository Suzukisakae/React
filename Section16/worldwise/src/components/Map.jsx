import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  // Ham useSearchParams tra ve mot doi tuong SearchParams.
  // useSearchParams la mot hook cua react-router-dom, no giup chung ta truy cap vao cac tham so tren URL.
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <p>
        Position: {lat} {lng}
      </p>
    </div>
  );
}

export default Map;
