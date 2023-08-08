

const Manhwa = () => {
  const imageAddress = "/assets/manhwa/images/";
  const iconAddress = "/assets/manhwa/icons/";
  return (
    <div className="h-auto w-full flex items-center justify-center bg-slate-800 text-white pt-24">
      <div className="w-full h-auto flex flex-col gap-24 items-center justify-center">
        <div className="w-full md:w-2/3 h-auto flex flex-col md:flex-row gap-4 items-center justify-around">
          <div className="w-auto h-auto">
            <p className="text-5xl md:text-8xl w-full md:w-1/2 font-bold text-blue-400 text-center md:text-left">Manhwa</p>
            <p className="text-2xl md:text-base w-full md:w-full pt-4 font-medium text-blue-400 text-center md:text-right">
              July 19 - To be finished.
            </p>
          </div>
          <p className="w-5/6 md:w-1/2 text-md font-light text-justify text-white">
            This web-app is inspired from My-Anime-List, but allows user to post works that are not well known or are only published 
            through online website with a handful amount of readers. It will also allow users to read the news that will be supervised 
            by the admins. 
          </p>
        </div>
        <div className="w-full h-auto flex flex-col gap-24">
          <div className="w-full h-auto flex items-center justify-center">
            <div className="w-full md:w-2/3 flex flex-col h-auto items-center justify-center gap-32 mb-10">
              <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
                <img
                  src={`${imageAddress}login.png`}
                  className="w-full md:w-2/3 h-auto md:border-2 border-blue-300"
                  alt=""
                />
                <div className="w-full md:w-1/3 h-auto flex flex-col gap-2 items-center">
                  <p className="text-4xl md:text-4xl font-bold w-full text-green-500 text-center md:text-left">
                   Login & Register 
                  </p>
                  <p className="text-xl text-justify w-5/6 md:w-auto md:text-left h-auto">
                   This will allow users to create their account, but unlike the previous website this will not be a requirement to 
                   access the service. 
                  </p>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-24">
                <div className="w-full md:w-1/3 h-auto flex flex-col gap-2 items-center">
                  <p className="text-4xl md:text-4xl font-bold w-full text-green-500 text-center md:text-left">
                    Homepage
                  </p>
                  <p className="text-xl text-justify w-5/6 md:w-auto md:text-left h-auto">
                    This will preview the recently posted reviews, most recent news regarding manhwa, and currently trending 
                    which will be also updated in the future. 
                  </p>
                </div>
                <img
                  src={`${imageAddress}homepage.png`}
                  className="w-full md:w-2/3 h-auto md:border-2 border-blue-300"
                  alt=""
                />
              </div>
              <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
                <img
                  src={`${imageAddress}blog.png`}
                  className="w-full md:w-2/3 h-auto md:border-2 border-blue-300"
                  alt=""
                />
                <div className="w-full md:w-1/3 h-auto flex flex-col gap-2 items-center">
                  <p className="text-4xl md:text-4xl font-bold w-full text-green-500 text-center md:text-left">
                    Create blog   
                  </p>
                  <p className="text-xl text-justify w-5/6 md:w-auto md:text-left h-auto">
                    This allows certain users to post and add manhwa the the database which will allow other users to rate it, and the 
                    news regarding like the status of the manhwa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 h-auto flex flex-col items-center justify-center gap-10 mb-10">
          <p className="text-6xl font-medium text-amber-400 w-full text-center">Tech Stack</p>
          <div className="h-auto w-full flex items-stretch justify-around">
            <div className="flex flex-col items-center justify-center gap-4">
              <img className="h-10 md:h-24 w-auto" src={`${iconAddress}mongodb.webp`} alt="" />
              <p className="text-xs md:text-md font-medium">Database</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <img className="h-5 md:h-12 w-auto" src={`${iconAddress}next.png`} alt="" />
              <p className="text-xs md:text-md font-medium">Framework</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manhwa