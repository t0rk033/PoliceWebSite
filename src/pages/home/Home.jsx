import React from 'react'
import './home.css'
import policeDog from '../../assets/img/policeDog.png'
import { Link } from 'react-router-dom' 
import superintendent from '../../assets/img/policeImg.png'

function Home() {
  return (
    
    <div className='homeContainer'>
      
      <div className="firstSection">
      <h1>Sempre Defendendo</h1>
        <Link className='callNow' to='/contactUs'>Fale conosco</Link>
      </div>
      <div className="secondSection">
        <div className="leftSection">
          <img src={policeDog} alt="Police Dog" className='policeDog'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus, nostrum ullam fuga minus ratione eum autem, enim quos voluptatem, culpa expedita. Vitae ullam fugit enim harum dolor fuga doloribus!</p>
        </div>
        <div className="rightSection">
          <h3>AQUI VAI UM TITULO</h3>
          <span>lorem ipsun</span>
          <p className='subtitle'>consectetur adipisicing</p>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsum tempora totam deserunt doloribus iste a vero, aspernatur atque animi officiis, eligendi quis quasi? A harum dolorum eum architecto reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laudantium ad amet modi. Repudiandae deleniti culpa nemo ut corrupti sed eaque quasi, nostrum praesentium numquam reiciendis id quidem minima debitis!</p>
        </div>
      </div>

      <div className="lastSection">
        <div className="lastSectionContainer">
          <h2>Nosso superintendente </h2>
          <div className="positionLast">
            <div className="leftLastSection">
              <h3>Superintendente Guimaraes</h3>
              <p className='aboutSuperintendent'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos explicabo, doloribus nulla molestiae quod aut vel dolor vero dicta eaque, quae iure autem culpa cupiditate ad quasi officiis maiores rem.
              </p>
            </div>
            <div className="rightLastSection">
              <img src={superintendent} alt="superintendent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
