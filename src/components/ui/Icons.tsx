import React from "react";

import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaTwitch,
  FaReddit,
  FaAmazon,
  FaWikipediaW,
  FaSpotify,
} from "react-icons/fa";

interface IconsProps {
  name: string;
}

const Icons: React.FC<IconsProps> = ({ name }) => {
  // Define a mapping of website names to Lucide icons
  const iconMap: { [key: string]: React.ReactElement } = {
    google: <FaGoogle />,
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedin />,
    youtube: <FaYoutube />,
    instagram: <FaInstagram />,
    pinterest: <FaPinterest />,
    twitch: <FaTwitch />,
    reddit: <FaReddit />,
    amazon: <FaAmazon />,
    wikipedia: <FaWikipediaW />,
    spotify: <FaSpotify />,
  };

  // Get the icon based on the provided website name
  const selectedIcon = iconMap[name];

  // If the provided name doesn't match any known icon, you can provide a default icon or handle it as needed
  if (!selectedIcon) {
    // You can return a default icon or null, or handle the case in a way that makes sense for your application
    return null;
  }

  return selectedIcon;
};

export default Icons;
