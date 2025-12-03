import React from 'react'
import AProposDeNous from '../Components/AProposDeNous'
import Footer from '../Components/Footer'
import { AdvancedWaveSeparator } from '../Components/WaveVariants'

function Propo() {
  return (
    <div>
        
        <AProposDeNous />
         <AdvancedWaveSeparator 
                variant="liquid"
                direction="up"
                colors={{ secondary: '#964cb2' }}
                animated={true}
              />
         <Footer />
    </div>
  )
}

export default Propo