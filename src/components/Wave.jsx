export const WAVE_TYPE = {
    top: "top",
    bottom: "bottom",
  };

const getWave = (type = WAVE_TYPE.base) =>
  ({
    [WAVE_TYPE.base]:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
  }[type]);

export const Wave = ({type, className}) =>{
    const WavePath = getWave(type);
    return(
        <svg className={className} viewBox="0 0 1200 120" preserveAspectRatio="none"><path fill="currentColor" fillOpacity="1" d={WavePath}></path></svg>
    )
}