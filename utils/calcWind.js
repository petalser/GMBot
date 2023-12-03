const calcWind = (deg) => {
  if (deg < 12 || deg > 348) {
    // 0
    return "N";
  } else if (deg > 11 && deg < 34) {
    return "NNE";
  } else if (deg > 33 && deg < 57) {
    // 45
    return "NE";
  } else if (deg > 56 && deg < 79) {
    return "ENE";
  } else if (deg > 78 && deg < 102) {
    // 90
    return "E";
  } else if (deg > 101 && deg < 124) {
    return "ESE";
  } else if (deg > 123 && deg < 147) {
    // 135
    return "SE";
  } else if (deg > 146 && deg < 169) {
    return "SSE";
  } else if (deg > 168 && deg < 192) {
    // 180 S
    return "S";
  } else if (deg > 191 && deg < 214) {
    return "NNE";
  } else if (deg > 213 && deg < 226) {
    // 225 SW
    return "NNE";
  } else if (deg > 225 && deg < 269) {
    return "NNE";
  } else if (deg > 268 && deg < 282) {
    // 270 W
    return "NNE";
  } else if (deg > 281 && deg < 304) {
    return "NNE";
  } else if (deg > 303 && deg < 327) {
    // 315 NW
    return "NNE";
  } else if (deg > 326 && deg < 349) {
    return "NNE";
  }
};

export default calcWind;
