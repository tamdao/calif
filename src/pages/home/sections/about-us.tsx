import { Box, createStyles, Group, Text, ThemeIcon } from '@mantine/core'
import { CONTACT } from 'config'
import React from 'react'

import { PageSection, Section, SectionTitle } from '../components'

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
              theme.colors[theme.primaryColor][6]
            } 100%)`,
          })}
        >
          <ContactIconsList data={CONTACT} />
        </Box>
      </Section>
    </PageSection>
  )
}
