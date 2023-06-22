import Button from "../components/button/Button"
import Navbar from "../components/navbar/Navbar"
import Icon from "../components/icon/icon"
import phone from '../assets/images/header-iphone.png'
import apple from '../assets/images/apple.svg'
import play from '../assets/images/play.svg'
import users from '../assets/images/users.png'
import code from '../assets/images/code.png'
import settings from '../assets/images/settings.png'
import comments from '../assets/images/comments.png'
import rocket from '../assets/images/rocket.png'
import  './LandingPage.css'



function LandingPage(){
    return(
        <>
            <Navbar></Navbar>
            <h1>Mobile App Landing Page</h1>
            <p>Start focusing on your goals and get more things done with Sync mobile aplication. Is the first app to harness the power of social connections to help you stay focused and get organized</p>
            <img className="phone" src={phone}/>
            <Button buttonStyle={'buttonDouble'} icon={<img className={'icon'} src={apple}/>} buttonText={'Download'}></Button>
            <Button buttonStyle={'buttonDouble'} icon={<img className={'icon'} src={play}/>} buttonText={'Download'}></Button>
            <div className="iconsList">
                <Icon icon2={<img src={users}/>} text={'Identify Goals'}></Icon>
                <Icon icon2={<img src={code}/>} text={'Situation Analysis'}></Icon>
                <Icon icon2={<img src={settings}/>} text={'Tasks Settings'}></Icon>
                <Icon icon2={<img src={comments}/>} text={'Social Interaction'}></Icon>
                <Icon icon2={<img src={rocket}/>} text={'Get Things Done'}></Icon>
            </div>
            
        </>    )
    
}

export default LandingPage