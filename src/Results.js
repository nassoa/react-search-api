import React from 'react'

const Results = ({brand, image, reference, details}) => {
  return (
    <>
        <div className="item">
            <div className="image"><img width="250" src={image} alt="" /></div>
            <div className="content">
                <div className="reference"> <h3>{reference}</h3> </div>
                <div className="ref-usine"><h3><span className='pre-title'>Référence usine</span> {details}</h3></div>
                <div className="br-list">
                    <div className="brand">
                        <h3><span className="pre-title">Marque</span> {brand}</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Results