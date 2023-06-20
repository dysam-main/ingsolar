import React from "react";
import useInput from "../reactHooks/useInput";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import credentials from "../credentials";
import SectionTitle from "../commons/SectionTitle"

const Contact = () => {
  const nombre = useInput();
  const email = useInput();
  const mensaje = useInput();

  const { isLoaded } = useLoadScript({ googleMapsApiKey: credentials.mapsKey });
  const center = useMemo(() => ({ lat: -37.1767267, lng: -62.7596665 }), [])

  console.log("nombre",nombre.value)
  return (
    <div id="Contact">
      <form>
        <label htmlFor="">Nombre</label>
        <input {...nombre} />
        <label htmlFor="">email</label>
        <input {...email} />
        <textarea {...mensaje} />
        <button type="submit">ENVIAR</button>
      </form>
        {!isLoaded ? (
          <></>
        ) : (
            <GoogleMap
            mapContainerClassName="mapContainer"
            center={center}
            zoom={15}
          >
            <Marker position={{ lat: -37.1767267, lng: -62.7596665 }} />
          </GoogleMap>
        )}
        <section className="ubicacion">
            <SectionTitle content={"Ubicacion"}/>
        </section>
    </div>
  );
};

export default Contact;



// https://medium.com/scalereal/integration-of-google-maps-with-react-part-1-86c075ab452a