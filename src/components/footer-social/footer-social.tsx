import { ActionIcon, Container, createStyles, Group } from '@mantine/core'
import React from 'react'
import { BrandInstagram, BrandTwitter, BrandYoutube } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 60,
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}))

export function FooterSocial() {
  const { classes } = useStyles()
  const date = new Date()
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div>© {date.getFullYear()} Calif. All Rights Reserved.</div>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}
