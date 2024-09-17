import React from 'react'
import Genomics from '../Modules/Genomics'
import './product.css'

export default function Product() {
  return (
    <div style={{display: "flex"}}>
      <div className='side-bar'>
        <ul>
            <li>Genomics R & D</li>
            <li>Biology R & D</li>
            <li>Chemistry R & D</li>
            <li>Computational Chemistry</li>
            <li>DMPK</li>
            <li>ELN & LIMS</li>
            <li>Virtual Reality</li>
            <li>AI/ML</li>
        </ul>
      </div>
      <div className="contents">
        <Genomics />
      </div>
    </div>
  )
}
