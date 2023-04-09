import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { 
        text: "SDLC",
        handler: props.actionProvider.handleSDLCList, 
        id: 1
     },
    { 
        text: "Methodologies", 
        handler: props.actionProvider.handleMethodologyList, 
        id: 2
     },
    { 
        text: "Architectures", 
        handler: props.actionProvider.handleArchList, 
        id: 3 
    },
    { 
        text: "Project Management Tools", 
        handler: props.actionProvider.handleMGMTList, 
        id: 4 },
    { 
        text: "Other", 
        handler: props.actionProvider.handleOtherList, 
        id: 5 }
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;

// in src/components/LearningOptions/LearningOptions.css

