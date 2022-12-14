import React from "react";
import Resume from "../../assets/Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={Resume} download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
