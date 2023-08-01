const Tropapp = () => {
  const imageAddress = "/assets/tropapp/images/";
  const iconAddress = "/assets/tropapp/icons/";
  return (
    <div className="h-auto w-full flex items-center justify-center pt-10">
      <div className="w-full h-auto flex flex-col gap-24 items-center justify-center">
        <div className="w-full md:w-2/3 h-auto flex flex-col md:flex-row gap-4 items-center justify-around">
          <p className="text-5xl md:text-8xl w-full md:w-1/2 font-bold text-blue-400 text-center md:text-left">Tropapp</p>
          <p className="w-5/6 md:w-1/2 text-md font-light text-justify text-slate-800">
            This web-app is a combination of my 2 previous full-stack apps which
            are usapp a messaging app and kitapp a posting app, which are both
            made with the same tech stack. This web-app allows users to post,
            follow, and message each other.{" "}
          </p>
        </div>
        <div className="w-full h-auto flex flex-col gap-24">
          <div className="w-full h-auto flex items-center justify-center">
            <div className="w-full md:w-2/3 flex flex-col h-auto items-center justify-center gap-32 mb-10">
              <div className="w-full h-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-24">
                <img
                  src={`${imageAddress}register.png`}
                  className="w-full md:w-2/3 h-auto md:border-2 border-blue-300"
                  alt=""
                />
                <div className="w-full md:w-1/3 h-auto flex flex-col gap-2 items-center">
                  <p className="text-4xl md:text-6xl font-bold w-full text-blue-300 text-center md:text-left">
                   Login & Register 
                  </p>
                  <p className="text-xl text-justify w-5/6 md:w-auto md:text-left h-auto">
                    This is the homepage where you can see all the post of the
                    people who you follow on your account.
                  </p>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
                <div className="w-full md:w-1/3 h-auto flex flex-col gap-2 items-center">
                  <p className="text-4xl md:text-6xl font-bold w-full text-blue-300 text-center md:text-left">
                    Homepage
                  </p>
                  <p className="text-xl text-justify w-5/6 md:w-auto md:text-left h-auto">
                    This is the homepage where you can see all the post of the
                    people who you follow on your account.
                  </p>
                </div>
                <img
                  src={`${imageAddress}homepage.png`}
                  className="w-full md:w-2/3 h-auto md:border-2 border-blue-300"
                  alt=""
                />
              </div>
              <div className="w-full h-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-24">
                <img
                  src={`${imageAddress}profile.png`}
                  className="w-full md:w-2/3 h-auto md:border-2 border-blue-300"
                  alt=""
                />
                <div className="w-full md:w-1/3 h-auto flex flex-col gap-2 items-center">
                  <p className="text-4xl md:text-6xl font-bold w-full text-blue-300 text-center md:text-left">
                    Profile Page   
                  </p>
                  <p className="text-xl text-justify w-5/6 md:w-auto md:text-left h-auto">
                     This page display the post of the user and allows the user to edit certain data regarding his account. 
                     Displayed post here from the user can also be edited and be deleted if wanted.
                  </p>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
                <div className="w-full md:w-1/3 h-auto flex flex-col gap-2 items-center">
                  <p className="text-4xl md:text-6xl font-bold w-full text-blue-300 text-center md:text-left">
                    Message
                  </p>
                  <p className="text-xl text-justify w-5/6 md:w-auto md:text-left h-auto">
                    This page will allow user to message each other through joining with a specific code that can be input on chat page,
                    or directly going into their account and clicking on the message icon. 
                  </p>
                </div>
                <img
                  src={`${imageAddress}chat.png`}
                  className="w-full md:w-2/3 h-auto md:border-2 border-blue-300"
                  alt=""
                />
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
              <img className="h-10 md:h-24 w-auto" src={`${iconAddress}express.png`} alt="" />
              <p className="text-xs md:text-md font-medium">Back-End</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <img className="h-10 md:h-24 w-auto" src={`${iconAddress}react.png`} alt="" />
              <p className="text-xs md:text-md font-medium">Front-End</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <img className="h-10 md:h-24 w-auto" src={`${iconAddress}node.png`} alt="" />
              <p className="text-xs md:text-md font-medium">Back-end</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tropapp;
