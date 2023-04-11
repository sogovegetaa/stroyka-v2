// react
import React from "react";

// data stubs
import specification from "../../data/shopProductSpec";

function ProductTabSpecification() {
  const sections = specification.map((section, index) => {
    const features = section.features.map((feature, index) => (
      <div key={index} className="spec__row">
        <div className="spec__name">{feature.name}</div>
        <div className="spec__value">{feature.value}</div>
      </div>
    ));

    return (
      <div key={index} className="spec__section">
        <h4 className="spec__section-title">{section.name}</h4>
        {features}
      </div>
    );
  });

  return (
    <div className="spec">
      <h3 className="spec__header">Specification</h3>
      {sections}
      <div className="spec__disclaimer">
        Техникалық сипаттамалары, жеткізілім жиынтығы, өндірушінің елі және
        тауардың сыртқы түрі туралы ақпарат тек анықтама үшін берілген және
        жарияланған кездегі соңғы ақпаратқа негізделген.
      </div>
    </div>
  );
}

export default ProductTabSpecification;
