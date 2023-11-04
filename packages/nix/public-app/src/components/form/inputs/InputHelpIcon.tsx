import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import type { Theme } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import React, { memo, useCallback, useState } from 'react'

import DefaultTooltipLazy from '@/components/tooltip/DefaultTooltipLazy'

const InputHelpIconMobile = memo(function InputHelpIconMobile (props: {helpMessage: string}) {
  const { helpMessage } = props
  const [open, setOpen] = useState(false)
  const handleTooltipClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const handleTooltipOpen = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <DefaultTooltipLazy
          title={helpMessage}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
        >
          <HelpOutlineIcon
            onClick={handleTooltipOpen}
            className="!text-black"
          />
        </DefaultTooltipLazy>
      </div>
    </ClickAwayListener>
  )
})

export default memo(function InputHelpIcon (props: {helpMessage: string}) {
  const { helpMessage } = props
  const isXSmall = useMediaQuery<Theme>(theme =>
    theme.breakpoints.down('sm')
  )
  return isXSmall
    ? <InputHelpIconMobile helpMessage={helpMessage}/>
    : (
      <DefaultTooltipLazy
        title={helpMessage}
      >
        <HelpOutlineIcon/>
      </DefaultTooltipLazy>
    )
})
