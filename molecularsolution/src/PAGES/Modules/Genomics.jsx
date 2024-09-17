import React from 'react';
import '../Products/product.css';
import Commander from '../../Assets/Genomics.svg';
import Youtube from '../../Assets/Youtube.svg'

export default function Genomics() {
  return (
    <div className='genomics'>
        <div className="items">
            <div className='image'>
                <img src={Commander} alt="Commander" />
                <p className="title">Commander</p>
                <p className="subtitle">NGS data analysis</p>
            </div>
            <div className='description'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minus dicta rerum debitis consequuntur dolor. Aliquam dolore, ut laudantium consequuntur, libero iusto tempore ad rerum dolorum deserunt explicabo repellendus officiis?</p>
                <div>
                    <img src={Youtube} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}
