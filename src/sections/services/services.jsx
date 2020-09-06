import React from "react";
import ServicePreview from "../../components/service-preview/service-preview";
import "./services.scss";
const Services = () => {
  return (
    <div className="services">
      <div className="heading">
        <h1>SERVICES</h1>
        <span>THESE ARE WHAT I CAN DO FOR YOU</span>
        <div className="service-list">
          <ServicePreview
            data={{
              title: "ILLUSTRATIONS AND ARTS",
              body:
                "we make different kinds of illustrations and arts, which includes; face illustration being framed, original characters for cartoon and comics, outfits cartons and arts for outfits traders and many more; as we offer a freelancer services. we also feature other artists on our webpage.",
            }}
          />
          <ServicePreview
            data={{
              title: "ARCHITECTURE",
              body: `we design and model your buildings digitally with high graphics rendering and total efficiency and functional suit for the proposed project`,
            }}
          />
          <ServicePreview
            data={{
              title: "CRAFTS",
              body: `We have amazing crafts ranging from outfits to interior decors that are durable and attractive enough for you to stand out`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
