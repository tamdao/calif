import { Box, createStyles, Group, Text, ThemeIcon } from '@mantine/core'
import React from 'react'
import { At, MapPin, Phone, Sun } from 'tabler-icons-react'

import { PageSection } from './page-section'
import { Section } from './section'
import { SectionTitle } from './section-title'

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundColor: 'transparent',
  },

  title: {
    color: theme.colors[theme.primaryColor][0],
  },

  description: {
    color: theme.white,
  },
}))

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>
  title: React.ReactNode
  description: React.ReactNode
}

function ContactIcon({ icon: Icon, title, description, className, ...others }: ContactIconProps) {
  const { classes, cx } = useStyles()
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      <ThemeIcon size={40} radius="md" className={classes.icon}>
        <Icon size={24} />
      </ThemeIcon>
      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  )
}

interface ContactIconsListProps {
  data?: ContactIconProps[]
}

function ContactIconsList({ data = [] }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} {...item} />)
  return <Group direction="column">{items}</Group>
}

const MOCKDATA = [
  { title: 'Email', description: 'hello@calif.io', icon: At },
  { title: 'Phone', description: '+01 (800) 000 00 00', icon: Phone },
  { title: 'Address', description: '36 Maris Park avenue', icon: MapPin },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: Sun },
]

export function AboutUs() {
  return (
    <PageSection secondary id="about-us">
      <SectionTitle>About Us</SectionTitle>
      <Section
        title="Lorem sunt esse exercitation"
        description={[
          'Incididunt qui minim ut ipsum cupidatat sit et ea mollit occaecat labore do commodo nisi',
          'Velit esse laborum exercitation labore magna Lorem minim incididunt dolor cupidatat occaecat.',
        ]}
      >
        <Box
          sx={(theme) => ({
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][6]} 0%, ${
              theme.colors[theme.primaryColor][4]
            } 100%)`,
          })}
        >
          <ContactIconsList data={MOCKDATA} />
        </Box>
      </Section>
    </PageSection>
  )
}
