import React, { useState, useEffect, useMemo } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(0);
  const  dependency = { name, mobile };
  console.log(JSON.stringify(dependency))
  useEffect(() => {
    console.log("UseEffect is called");
  }, [JSON.stringify(dependency)]);

  return (
    <div className={`container ${darkMode ? "bgDark" : "bgLight"}`}>
      <input
        type="text"
        id="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        /* Something Went Wrong .. 2 */

        id="mobile"
        placeholder="Mobile"
        onChange={(e) => setMobile(e.target.value)}
      />
      <div className="darkmode">
        <input
          type="checkbox"
          id="darkMode"
          onChange={() => setDarkMode(!darkMode)}
        />
        Enable dark mode
      </div>
    </div>
  );
}
