import React from 'react'
import { TypographyH2 } from '../typography/h2'
import { TypographyP } from '../typography/p'

const Advertisement = () => {
  return (
    <section id="#advertisement">
      <article>
        <TypographyH2 className=''>
            Mobile Applications
        </TypographyH2>
        <TypographyP className=''>
            We have mobile applications for IOS and Android devices. 
            You can download the applicaton from Play Store or
            Apple.
        </TypographyP>
      </article>
    </section>
  )
}

export default Advertisement
