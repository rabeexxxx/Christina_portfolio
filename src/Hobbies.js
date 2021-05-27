import gsap from 'gsap/gsap-core';
import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import netball1 from './images/netball1.png'
import netball2 from './images/netball2.png'
import netball3 from './images/netball3.png'
import netball4 from './images/netball4.png'
import swim1 from './images/swim1.png'
import swim2 from './images/swim2.png'
import swim3 from './images/swim3.png'
import swim4 from './images/swim4.png'
import tennis1 from './images/tennis1.png'
import tennis2 from './images/tennis2.jpg'
import tennis3 from './images/tennis3.jpg'
import tennis4 from './images/tennis4.jpg'


export default class Hobbies extends React.Component {
    back_home(){
         gsap.to('.footer',{opacity:0})
        gsap.to(".hobbies",{top:-1000,duration:1,})
        var s=document.getElementById('profile_home_link');
        setTimeout(()=>{s.click()},1000);
    }
componentDidMount(){
    gsap.from('.footer',{opacity:0,duration:1,delay:2})
   
    gsap.from('#h',{left:-2000,duration:1})
    gsap.from('#o',{right:-2000,duration:1,delay:0.2})
    gsap.from('#b1',{left:-2000,duration:1,delay:0.4})
    gsap.from('#b2',{right:-2000,duration:1,delay:0.6})
    gsap.from('#i',{left:-2000,duration:1,delay:0.8})
    gsap.from('#e',{right:-2000,duration:1,delay:1})
    gsap.from('#s',{left:-2000,duration:1,delay:1.2})
    setTimeout(()=>{document.querySelector('.netball').classList.remove('hide')},1400)
    setTimeout(()=>{document.querySelector('.swim').classList.remove('hide')},1400)
    setTimeout(()=>{document.querySelector('.tennis').classList.remove('hide')},1400)
    
    var netball1=gsap.from('.netball1',{opacity:0,duration:2,delay:1.2})
    var netball2=gsap.from('.netball2',{opacity:0,duration:2,delay:1.4})
    var netball3=gsap.from('.netball3',{opacity:0,duration:2,delay:1.6})
    var netball4=gsap.from('.netball4',{opacity:0,duration:2,delay:1.8})
    netball1.repeat(Infinity)
    netball2.repeat(Infinity)
    netball3.repeat(Infinity)
    netball4.repeat(Infinity)
    var swim1=gsap.from('.swim1',{opacity:0,duration:2,delay:2.2})
    var swim2=gsap.from('.swim2',{opacity:0,duration:2,delay:2.4})
    var swim3=gsap.from('.swim3',{opacity:0,duration:2,delay:2.6})
    var swim4=gsap.from('.swim4',{opacity:0,duration:2,delay:2.8})
    swim1.repeat(Infinity)
    swim2.repeat(Infinity)
    swim3.repeat(Infinity)
    swim4.repeat(Infinity)
    var tennis1=gsap.from('.tennis1',{opacity:0,duration:2,delay:3.7})
    var tennis2=gsap.from('.tennis2',{opacity:0,duration:2,delay:3.9})
    var tennis3=gsap.from('.tennis3',{opacity:0,duration:2,delay:4.3})
    var tennis4=gsap.from('.tennis4',{opacity:0,duration:2,delay:4.7})
    tennis1.repeat(Infinity)
    tennis2.repeat(Infinity)
    tennis3.repeat(Infinity)
    tennis4.repeat(Infinity)

}
    render() {
        return (
            <div className='hobbies'>
                <div className="back-btn" onClick={this.back_home}><i class="fas fa-long-arrow-alt-left">back</i></div>
                <h1 className='hobbies-title'>
                    <span id='h'>H</span>
                    <span id='o'>O</span>
                    <span id='b1'>B</span>
                    <span id='b2'>B</span>
                    <span id='i'>I</span>
                    <span id='e'>E</span>
                    <span id='s'>S</span>
                </h1>    
                <div className="hobby netball hide">
                    <h3 className='hobby-title'>NETBALL</h3>
                    <img src={netball1} className='hobby-img netball1' alt='netball'/>
                    <img src={netball2} className='hobby-img netball2' alt='netball'/>
                    <img src={netball3} className='hobby-img netball3' alt='netball'/>
                    <img src={netball4} className='hobby-img netball4' alt='netball'/>
                </div>
                <div className="hobby swim hide">
                    <h3 className='hobby-title'>SWIMMING</h3>
                    <img src={swim1} className='hobby-img swim1' alt='swim'/>
                    <img src={swim2} className='hobby-img swim2' alt='swim'/>
                    <img src={swim3} className='hobby-img swim3' alt='swim'/>
                    <img src={swim4} className='hobby-img swim4' alt='swim'/>
                </div>
                <div className="hobby tennis hide">
                    <h3 className='hobby-title'>TENNIS</h3>
                    <img src={tennis1} className='hobby-img tennis1' alt='tennis'/>
                    <img src={tennis2} className='hobby-img tennis2' alt='tennis'/>
                    <img src={tennis3} className='hobby-img tennis3' alt='tennis'/>
                    <img src={tennis4} className='hobby-img tennis4' alt='tennis'/>
                </div>
                
            <Link id='profile_home_link' className='hide-D' to='/'></Link>
            <Footer/>
            </div>
        )
    }
}
