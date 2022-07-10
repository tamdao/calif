import { Image } from '@mantine/core'
import React from 'react'

import { PageSection, Section, SectionTitle } from '../components'
import laptopImage from '../images/laptop.svg'

export function OurServices() {
  return (
    <PageSection secondary id="our-services">
      <SectionTitle>Our Services</SectionTitle>
      <Section
        title="Lorem sunt esse exercitation"
        description="Incididunt qui minim ut ipsum cupidatat sit et ea mollit occaecat labore do commodo nisi. Velit esse laborum exercitation labore magna Lorem minim incididunt dolor cupidatat occaecat."
      >
        <Image src={laptopImage} />
      </Section>
    </PageSection>
  )
}
