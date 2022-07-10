import { List, ThemeIcon } from '@mantine/core'
import React from 'react'
import { Check } from 'tabler-icons-react'

import { PageSection, Section, SectionTitle } from '../components'

export function WhyCalif() {
  return (
    <PageSection id="why-calif">
      <SectionTitle>Why Calif?</SectionTitle>
      <Section
        title="Lorem sunt esse exercitation"
        description="Incididunt qui minim ut ipsum cupidatat sit et ea mollit occaecat labore do commodo nisi."
      >
        <List
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <Check size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <b>Sunt ex esse</b> – esse sit mollit culpa qui fugiat nulla.
          </List.Item>
          <List.Item>
            <b>Aute nulla adipisicing</b> – ullamco ut reprehenderit incididunt voluptate aliquip
            est deserunt magna.
          </List.Item>
          <List.Item>
            <b>Voluptate tempor</b> – dolore culpa proident non cupidatat ipsum culpa Lorem enim
            velit et.
          </List.Item>
        </List>
      </Section>
    </PageSection>
  )
}
