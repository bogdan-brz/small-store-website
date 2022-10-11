import styles from "./Map.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Fragment } from "react";

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_KEY,
    });
    if (!isLoaded) return <h3>Loading map...</h3>;
    return (
        <Fragment>
            <h4 className={styles.subtitle}>Address:</h4>
            <div className={styles.address}>1111 nice street City, State</div>
            <GoogleMap
                zoom={8}
                center={{ lat: 50.06169372030968, lng: 19.93743802885597 }}
                mapContainerClassName={styles.map}>
                <Marker
                    position={{
                        lat: 50.06169372030968,
                        lng: 19.93743802885597,
                    }}
                />
            </GoogleMap>
        </Fragment>
    );
};

export default Map;
