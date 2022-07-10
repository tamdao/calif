import { Badge, Card, createStyles, Image, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.white,
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor: theme.colors.gray[0],
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}))

interface ArticleCardProps {
  imageUrl: string
  link: string
  title: string
  description: string
  type: string
}

export function ArticleCard({
  className,
  imageUrl,
  link,
  title,
  description,
  type,
  ...others
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
  const { classes, cx } = useStyles()
  return (
    <Card withBorder radius="md" className={cx(classes.card, className)} {...others}>
      <Card.Section>
        <Link to={link}>
          <Image src={imageUrl} height={180} />
        </Link>
      </Card.Section>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {type}
      </Badge>

      <Text className={classes.title} weight={500} component={Link} to={link}>
        {title}
      </Text>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>
    </Card>
  )
}
