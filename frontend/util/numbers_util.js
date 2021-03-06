export const twoDecimals = float => {
  return (Math.round(float * 100) / 100).toFixed(2);
};

export const changeColor = change => {
  if (change === 0) {
    return "grey";
  } else if (change > 0) {
    return "green";
  } else {
    return "red";
  }
}

export const changeArrow = change => {
  if (change === 0) {
    return "-";
  } else if (change > 0) {
    return "↑";
  } else {
    return "↓";
  }
};

export const convertSeconds = time => {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
};