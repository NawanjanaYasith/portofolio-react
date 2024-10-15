import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

export default function Hero(){
    return(
        <div className='hero'>
            <img src={profile_img} className='pro-img'/>
            <h1><span>I'm Yasith Manage,</span>frontend developer based on USA</h1>
            <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
            <div className='hero-action'>
                <div className='hero-connect'>Conncet with me</div>
                <div className='hero-resume'>My resume</div>
            </div>
        </div>
    )
}