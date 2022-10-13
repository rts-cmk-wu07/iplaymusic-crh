export const formatToISODuration = (duration: number) => {
  var minutes = Math.floor(duration / 60000);
  var seconds = parseInt(((duration % 60000) / 1000).toFixed(0));
  return +seconds === 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
