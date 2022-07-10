import { Chip, Chips, createStyles } from '@mantine/core'
import { RESOURCE_TYPE } from 'data'
import React from 'react'

const useStyles = createStyles((theme, _params, getRef) => ({
  iconWrapper: {
    ref: getRef('iconWrapper'),
  },

  checked: {
    backgroundColor: `${theme.colors[theme.primaryColor][6]} !important`,
    color: theme.white,

    [`& .${getRef('iconWrapper')}`]: {
      color: theme.white,
    },
  },
}))

interface FilterProps {
  onFilterChange: (value: string) => void
}

export function Filter(props: FilterProps) {
  const { classes } = useStyles()

  const { onFilterChange } = props

  return (
    <Chips
      position="center"
      variant="filled"
      classNames={classes}
      defaultValue=""
      onChange={onFilterChange}
    >
      {RESOURCE_TYPE.map((resourceType) => (
        <Chip value={resourceType.id} key={resourceType.id}>
          {resourceType.label}
        </Chip>
      ))}
    </Chips>
  )
}
