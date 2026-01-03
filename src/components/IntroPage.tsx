export function IntroPage({exitPage} : { exitPage : () => void})
{
    return(
        <>
            <div className="introBackgroundDiv fadeInAnim"></div>
            <div className="introPageDiv flex fadeInAnim" style={{animationDuration:"4s"}} onClick={exitPage}>
                   <h1>Within Temptation Album Page.</h1>
                   <h2>Practice page for Web Development in React + Vite.</h2>
                   <p className="introText">This is my practice page in React for Within Temptation, a Dutch symphonic rock group. </p>
                   <p className="introText">Originally, this was a Frontend Practice project with some guy I never heard of and hadn't listened to in the past. I started making it in Vanilla.</p>
                   <p className="introText">So, then I thought : "Why not make this an album page for one of Within Temptations albums since I already have a lot of their CD's (yes, I'm from the CD generation :-). 
                      I've listened to them over the years, since they had a big breakthrough in 2004 with "Stand My Ground" from "The Silent Force".</p>
                    <p className="introText">I started changing it and then began planning the page to switch between several albums and listen to them. </p>
                    <button className="exitIntroButton flex" onClick={exitPage}>
                        <img className="logoButtonIntro" src="/icons/wtlogov2.jpg" alt="logo within temptation"/>
                        Enter Page</button>
            </div>
       
        
        </>
    )
}