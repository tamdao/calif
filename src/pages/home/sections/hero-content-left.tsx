import { Container, createStyles, Text, Title } from '@mantine/core'
import { Button } from 'components'
import React from 'react'

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.black,
    fontSize: 60,
    fontWeight: 'normal',
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.black,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][6],
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}))

interface HeroContentLeftProps {}

export function HeroContentLeft(props: HeroContentLeftProps) {
  const { classes } = useStyles()
  return (
    <div className={classes.hero}>
      <Container className={classes.container}>
        <Title className={classes.title}>
          Laborum Lorem duis{' '}
          <Text component="span" inherit className={classes.highlight}>
            ipsum voluptate
          </Text>{' '}
          velit.
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Amet minim cillum ex sunt cupidatat. Non ad esse culpa labore ut deserunt anim anim id
          aute. Magna nulla voluptate minim exercitation amet reprehenderit ea culpa elit veniam. Do
          est laborum sit dolore id excepteur irure nostrud dolor nulla.
        </Text>

        <Button size="xl" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  )
}
