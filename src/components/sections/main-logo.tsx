"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://gloffers.org/aff_c?offer_id=3673&aff_id=44723&source=Mars" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/iR7gglF.png" 
        alt="Target Logo" 
        className="h-10 sm:h-15 w-30 object-contain transition-all duration-700 hover:brightness-110"
      />
    </div>
  );
};

export default MainLogo;
