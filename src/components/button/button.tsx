import { Button as MantineButton } from '@mantine/core'
import React from 'react'

import { ButtonProps } from './button.props'

export function Button(props: ButtonProps) {
  const { children, ...rest } = props

  return <MantineButton {...rest}>{children}</MantineButton>
}
