import React from "react";

const BackgroundEllipses = () => {
  return (
    <>
      {/* About Section - Top Left */}
      <div className="absolute top-[8%] -left-[10%] w-[700px] h-[700px] pointer-events-none z-20">
        <div
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: "linear-gradient(121.76deg, #ffde59 90%, #ff1616 10% )",
            filter: "blur(200px)",
          }}
        />
      </div>

      {/* About/Experience Section - Right Side */}
      <div className="absolute top-[17%] -right-[280px] w-[720px] h-[720px] pointer-events-none z-20">
        <div
          className="absolute inset-0 rounded-full opacity-22"
          style={{
            background: "linear-gradient(121.76deg, #ffde59 90%, #ff1616 10% )",
            filter: "blur(200px)",
          }}
        />
      </div>

      {/* Experience Card - Middle */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] pointer-events-none z-20">
        <div
          className="absolute inset-0 rounded-full opacity-22"
          style={{
            background: "linear-gradient(121.76deg, #ffde59 90%, #ff1616 10% )",
            filter: "blur(200px)",
          }}
        />
      </div>

      {/* Companies Section - Right Side */}
      <div className="absolute top-[48%] -right-[300px] w-[680px] h-[680px] pointer-events-none z-20">
        <div
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: "linear-gradient(121.76deg, #ffde59 90%, #ff1616 10% )",
            filter: "blur(200px)",
          }}
        />
      </div>

      {/* Projects Section - Left Side */}
      <div className="absolute top-[58%] -left-[280px] w-[700px] h-[700px] pointer-events-none z-20">
        <div
          className="absolute inset-0 rounded-full opacity-15"
          style={{
            background: "linear-gradient(121.76deg, #ffde59 90%, #ff1616 10% )",
            filter: "blur(200px)",
          }}
        />
      </div>

      {/* Achievements Section - Left Side */}
      <div className="absolute top-[70%] -left-[300px] w-[680px] h-[680px] pointer-events-none z-20">
        <div
          className="absolute inset-0 rounded-full opacity-15"
          style={{
            background: "linear-gradient(121.76deg, #ffde59 90%, #ff1616 10% )",
            filter: "blur(200px)",
          }}
        />
      </div>

      {/* Get In Touch Section - Middle */}
      <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] pointer-events-none z-20">
        <div
          className="absolute inset-0 rounded-full opacity-18"
          style={{
            background: "linear-gradient(121.76deg, #ffde59 90%, #ff1616 10% )",
            filter: "blur(200px)",
          }}
        />
      </div>
    </>
  );
};

export default BackgroundEllipses;
