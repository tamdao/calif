import { createStyles, Text, Title } from '@mantine/core'
import React, { useMemo } from 'react'

const BREAKPOINT = '@media (max-width: 960px)'

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing.xl * 5,
    display: 'flex',

    '&:first-of-type': {
      marginTop: theme.spacing.xl * 2,
    },

    [BREAKPOINT]: {
      flexDirection: 'column',
      marginTop: theme.spacing.xl * 3,
    },
  },

  body: {
    flex: 1,
    maxWidth: '60%',

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
      maxWidth: '100%',
    },
  },

  meta: {
    flex: 1,
    maxWidth: '35%',
    paddingRight: theme.spacing.xl * 1.5,

    [BREAKPOINT]: {
      paddingRight: 0,
      maxWidth: '100%',
    },
  },

  title: {
    marginBottom: theme.spacing.xs,
    color: theme.colors[theme.primaryColor][6],
    fontWeight: 'normal',
  },

  description: {
    lineHeight: 1.6,
    '&:not(:first-of-type)': {
      marginTop: theme.spacing.sm,
    },
  },
}))

interface SectionProps {
  title: React.ReactNode
  description: React.ReactNode | React.ReactNode[]
  children: React.ReactNode
}

export function Section({ title, description, children }: SectionProps) {
  const { classes } = useStyles()
  const descriptionContent = useMemo(() => {
    if (Array.isArray(description)) {
      return description.map((line, index) => (
        <Text className={classes.description} key={index}>
          {line}
        </Text>
      ))
    }
    return <Text className={classes.description}>{description}</Text>
  }, [description])
  return (
    <div className={classes.wrapper}>
      <div className={classes.meta}>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        {descriptionContent}
      </div>
      <div className={classes.body}>{children}</div>
    </div>
  )
}
