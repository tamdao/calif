import { Container, createStyles } from '@mantine/core'
import React from 'react'

const BREAKPOINT = '@media (max-width: 960px)'

const useStyles = createStyles((theme, secondary: boolean) => ({
  wrapper: {
    backgroundColor: secondary ? theme.colors.gray[0] : theme.white,
  },
  waves: {
    fill: theme.white,
    width: '150%',
    height: 56,
    transform: 'scaleX(-1)',
    filter: 'drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.05))',

    [BREAKPOINT]: {
      height: 18,
    },
  },

  wavesBottom: {
    height: 34,
    transform: 'rotate(180deg)',
    marginBottom: -7,
    filter: 'none',
    fill: theme.white,
  },
  inner: {
    paddingTop: 120,
    paddingBottom: 200,

    [BREAKPOINT]: {
      paddingTop: 60,
      paddingBottom: 80,
    },
  },
}))

interface PageSectionProps extends React.ComponentProps<'div'> {
  secondary?: boolean
}

export function PageSection(props: PageSectionProps) {
  const { secondary = false, id } = props
  const { classes, cx } = useStyles(secondary)
  return (
    <div id={id} className={classes.wrapper}>
      {secondary && (
        <div style={{ overflow: 'hidden' }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.waves}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>
      )}
      <div className={classes.inner}>
        <Container>{props.children}</Container>
      </div>
      {secondary && (
        <div style={{ overflow: 'hidden' }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            className={cx(classes.waves, classes.wavesBottom)}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>
      )}
    </div>
  )
}
