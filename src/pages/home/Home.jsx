import React from 'react'
import './home.css'
import policeDog from '../../assets/img/policeDog.png'
function Home() {
  return (
    <div className='homeContainer'>
      <div className="firstSection">
      <h1>Sempre Defendendo</h1>
        <button className='callNow'>Ligue agora</button>
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
    </div>
  )
}

export default Home
