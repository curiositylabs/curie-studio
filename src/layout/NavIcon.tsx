// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { SvgIconProps } from '@mui/material'

interface UserIconProps {
  iconProps?: SvgIconProps
  icon: string | ReactNode
}

const NavIcon = (props: UserIconProps) => {
  const { icon, iconProps } = props

  const IconTag = icon

  // @ts-ignore
  return <IconTag {...iconProps} />
}

export default NavIcon
