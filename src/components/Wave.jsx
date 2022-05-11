export const WAVE_TYPE = {
    top: "top",
    bottom: "bottom",
  };


export const Wave = ({type, className}) =>{
    if(type === "top"){
      return(
          <svg className={className} viewBox="0 0 1200 120" preserveAspectRatio="none"><path fill="currentColor" fillOpacity="1" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path></svg>
      )}
    else{
      return <svg className={className} viewBox="0 0 1440 320"><path fill="currentColor" fillOpacity="1" d="M0,64L40,69.3C80,75,160,85,240,106.7C320,128,400,160,480,181.3C560,203,640,213,720,192C800,171,880,117,960,85.3C1040,53,1120,43,1200,64C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    }
}

