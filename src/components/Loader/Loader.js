import React from 'react'
import './loader.css'
export default function Loader() {
  return (
    <div className='loaderWrap'>
    <div className="scene">
  <div className="shadow"></div>
  <div className="jumper">
    <div className="spinner">
      <div className="scaler">
        <div className="loader">
          <div className="cuboid">
            <div className="cuboid__side"></div>
            <div className="cuboid__side"></div>
            <div className="cuboid__side"></div>
            <div className="cuboid__side"></div>
            <div className="cuboid__side"></div>
            <div className="cuboid__side"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</div>
  )
}
