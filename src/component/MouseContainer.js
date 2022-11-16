import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
    const [display, setDisplay] = useState(true);
  
    return (
      <div className="text-center">
        <button
            onClick={() => setDisplay(!display)}
        >
            Toggle Display
        </button>

        {
            display &&
            
            <div className="mt-2">
                <HookMouse />
            </div>
        }
      </div>
    );
  };
  export default MouseContainer;