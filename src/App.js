import React, { useState } from "react";
import "./styles/index.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faPhone,
  faChevronUp,
  faVolumeHigh,
  faMicrophoneAlt,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const data = [
  {
    name: "Alex Cooper",
    message: "Hello! My name is Alex, what's your name?",
    audio: true,
  },
  {
    name: "Joe Howard",
    message: "Hey Alex, my name is Joe, I’m from New Jersey",
    audio: true,
  },
  {
    name: "Alex Cooper",
    message: "Hey Joe! It's great to meet you.",
    audio: true,
  },
];

const ChatInterface = () => {
  const [micOn, setMicOn] = useState(false);

  const handleMicToggle = () => {
    setMicOn((prevMicOn) => !prevMicOn);
  };

  const scrollToTopOfDiv = (divId) => {
    const div = document.getElementById(divId);
    if (div) {
      div.scrollTop = 0;
    }
  };

  return (
    <div className="chat-container flex flex-column">
      <header className="header flex justify-between items-center">
        <button className="back-button">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="settings-button">A</button>
      </header>

      <div className="chat-messages flex flex-column" id="chat-messages">
        {data.map((message, index) => (
          <div className="message flex flex-column" key={index}>
            <div className="message-header flex flex-base flex-row w-100">
              <FontAwesomeIcon icon={faUser} className="avatar" />
              <span className="name">{message.name}</span>
            </div>
            <div className="message-content flex flex-column w-100">
              <p className="text">{message.message}</p>
              {message.audio && (
                <button className="audio-button">
                  <FontAwesomeIcon icon={faVolumeHigh} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer className="footer flex flex-wrap justify-between items-center">
        <span className="speaking-status w-100 text-center">
          ...Joe is Speaking
        </span>
        <div className="action-buttons flex flex-base py-10 justify-center">
          <button
            id="toggleMicButton"
            className={`mute-button ${micOn ? "" : "mic-off"}`}
            onClick={handleMicToggle}
          >
            <FontAwesomeIcon icon={micOn ? faMicrophoneAlt : faMicrophoneSlash} />
          </button>
          <button className="end-call-button">
            <FontAwesomeIcon icon={faPhone} />
          </button>
        </div>
        <button
          id="scrollToTopButton"
          className="scroll-to-top-button"
          onClick={() => scrollToTopOfDiv("chat-messages")}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </footer>
    </div>
  );
};

export default ChatInterface;
