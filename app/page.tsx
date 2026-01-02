import RainyBackground from '@/app/RainyBackground';
import "./css/main.css"

export default function Home() {
  return (
    // background for the raining animation this might need edit
    // change the rain color depending on the background
      <RainyBackground intensity={50}>

        {/* make a boarder for the entire page */}
        <div className="flex justify-center min-h-screen">
          <div className="Main_card" id="main">
            <div className="header">

              {/* icon image */}
              <div className="relative w-35 h-35 rounded-full overflow-hidden border-4 border-[var(--ColorOne)]">
                <img 
                  src="./img/Lurk.png" 
                  alt="Circle"
                  className="w-full h-full object-cover object-[30%_25%]"
                />
              </div>

              <div className="Name-header">
                <h1 className="Name text-black">
                  Rain
                </h1>
              </div>
            </div>

            {/* information */}
            <div className="information-box">
              <p className='information'>

              </p>
            </div>

            {/* link to social */}
            <div className='WebLink'>
              {/* name is temp */}
              {/* discord */}
              <div className='discord_link' id='link-card'>
                <a className='linkButton' href="https://discord.com/users/532010887024869386" target='_blank' rel='noopener noreferrer' id='logo-text-box'>
                  <img 
                  src="./Discord-Symbol-Blurple.png"
                  alt='Circle'
                  id='logo'
                  />
                  <span className='Title text-black'>Discord</span>
                </a>
              </div>

              {/* blue sky */}
              {/* add href */}
              <div className='blueSky_link' id='link-card'>
                <a className='linkButton' target='_blank' rel='noopener noreferrer' id="logo-text-box">
                  <img 
                  src="./icons_bluesky.png"
                  alt='Circle'
                  id='logo'
                  />
                  <span className='Title text-black'>Blue Sky</span>
                </a>
              </div>

              {/* telegram */}
              {/* add href */}
                <div className='telegram_link' id='link-card'>
                  <a className='linkButton' target='_blank' rel='noopener noreferrer' id="logo-text-box">
                    
                    <span className='Title text-black'>Telegram</span>
                  </a>
                </div>

            </div>

          </div>
        </div>
      </RainyBackground>
  );
}
