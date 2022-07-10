import { Burger, Container, createStyles, Group, Header, Paper, Transition } from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 2,
    background: 'transparent',
  },
  logo: {
    textDecoration: 'none',
    color: theme.colors.gray[7],
    outline: 'none',
    '& h1': {
      margin: 0,
    },
  },
  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][7],
    },
  },
}))

interface HeaderSimpleProps {
  links: { link: string; label: string }[]
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [active, setActive] = useState(`${window.location.pathname}${window.location.hash}`)
  const { classes, cx } = useStyles()

  const items = useMemo(
    () =>
      links.map((link) => (
        <Link
          key={link.label}
          to={link.link}
          className={cx(classes.link, { [classes.linkActive]: active === link.link })}
          onClick={() => {
            setActive(link.link)
            toggleOpened(false)
            setTimeout(() => {
              const element = document.querySelector(window.location.hash)
              element?.scrollIntoView({ behavior: 'smooth' })
            }, 50)
          }}
        >
          {link.label}
        </Link>
      )),
    [active],
  )

  return (
    <Header height={HEADER_HEIGHT} className={classes.root} fixed>
      <Container className={classes.header}>
        <Link
          to="/"
          className={classes.logo}
          onClick={() => {
            setActive('')
            toggleOpened(false)
          }}
        >
          <h1>Calif</h1>
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  )
}
