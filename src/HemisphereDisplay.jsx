import React from 'react'
import freddyurur from './images/freddyurur.jpeg'
import ururur from './images/ururur.jpeg'

const hemisphereConfig = {
    Northern: {
        text: 'It is northern hemisphere',
        picture: freddyurur
    },
    Southern: {
        text: 'It is southern hemisphere',
        picture: ururur
    }
}

const HemisphereDisplay = ({latitude}) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern'
    const { text, picture } = hemisphereConfig[hemisphere]
  return (
      <div>
          <img src={ picture} alt="image" />
      {text}
    </div>
  )
}

export default HemisphereDisplay
