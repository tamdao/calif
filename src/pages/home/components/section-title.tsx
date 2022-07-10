import { createStyles, Title } from '@mantine/core'
import React from 'react'

const BREAKPOINT = '@media (max-width: 600px)'

const useStyles = createStyles((theme) => ({
  title: {
    position: 'relative',
    fontWeight: 'normal',
    fontSize: 42,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    textAlign: 'center',
    marginBottom: theme.spacing.xl * 2,
    letterSpacing: 1,
    color: theme.colors[theme.primaryColor][4],

    [BREAKPOINT]: {
      fontSize: 28,
      marginBottom: theme.spacing.xl * 2,
      marginLeft: 0,
    },
  },
}))

interface SectionTitleProps extends React.ComponentProps<'h2'> {}

export function SectionTitle(props: SectionTitleProps) {
  const { children, className } = props
  const { classes, cx } = useStyles()
  return (
    <Title order={2} className={cx(classes.title, className)}>
      {children}
    </Title>
  )
}
