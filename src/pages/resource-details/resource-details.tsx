import { Code, Container, createStyles, Text, Title } from '@mantine/core'
import { RESOURCE_LIST } from 'data'
import React, { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

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
    fontWeight: 'normal',
    fontSize: 40,
    letterSpacing: -1,
    color: theme.black,
    marginBottom: theme.spacing.xs,

    '@media (max-width: 520px)': {
      fontSize: 28,
    },
  },
}))

export function ResourceDetails() {
  const { classes } = useStyles()
  const [content, setContent] = useState('')
  const { resourceId } = useParams()
  const navigate = useNavigate()
  const resource = useMemo(() => {
    return RESOURCE_LIST.find((r) => r.id === resourceId)
  }, [resourceId])

  useEffect(() => {
    if (!resource) {
      navigate('/404', { replace: true })
      return
    }
    fetch(resource.source)
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [resource])

  return (
    <Container className={classes.wrapper}>
      <ReactMarkdown
        // eslint-disable-next-line react/no-children-prop
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <Title order={2} mb="lg" {...props} />,
          p: ({ node, ...props }) => <Text mb="md" {...props} />,
          pre: ({ node, ...props }) => <Code mb="md" block {...props} />,
        }}
      />
    </Container>
  )
}
