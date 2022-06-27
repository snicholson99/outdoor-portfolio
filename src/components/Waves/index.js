import "./style.css";
export const Waves = () => (
  <div id="clouds">
    <h1>Scott Nicholson</h1>
    <h2>Web Developer</h2>

    <svg display="none">
      <defs>
        <filter id="wreckit">
          <feTurbulence
            id="turbulence"
            baseFrequency="0.02"
            numOctaves="3"
            result="noise"
            seed="4"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
        </filter>
      </defs>
    </svg>
  </div>
);
