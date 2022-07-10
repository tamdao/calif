import { Container, createStyles, SimpleGrid, Text, Title } from '@mantine/core'
import { ArticleCard, Dots } from 'components'
import { RESOURCE_LIST } from 'data'
import React, { useCallback, useState } from 'react'

import { Filter } from './components/filter'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 80,
    paddingBottom: 40,

    '@media (max-width: 755px)': {
      paddingTop: 40,
      paddingBottom: 20,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colors.gray[1],

    '@media (max-width: 755px)': {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 40,
    letterSpacing: -1,
    color: theme.black,
    marginBottom: theme.spacing.xs,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },
}))

export function Resources() {
  const { classes } = useStyles()
  const [resources, setResources] = useState(RESOURCE_LIST)

  const onFilterChange = useCallback((selectedFilter: string) => {
    if (!selectedFilter) {
      return setResources(RESOURCE_LIST)
    }
    setResources(RESOURCE_LIST.filter((r) => r.type === selectedFilter))
  }, [])

  return (
    <>
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>Resources</Title>

          <Container p={0} size={600} mb="xl">
            <Text size="lg" color="dimmed" className={classes.description}>
              Qui excepteur reprehenderit mollit nulla ipsum est tempor in.
            </Text>
          </Container>
          <Filter onFilterChange={onFilterChange} />
        </div>
      </Container>
      <Container>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
          {resources.map((resource) => (
            <ArticleCard
              title={resource.title}
              key={resource.id}
              imageUrl={resource.imageUrl}
              description={resource.description}
              link={`/resources/${resource.id}`}
              type={resource.type}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}
