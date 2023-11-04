import type { ButtonProps } from '@mui/material/Button'
import Button from '@mui/material/Button'
import type { ReactElement } from 'react'
import React, { forwardRef, memo } from 'react'

import DefaultTooltipLazy from '@/components/tooltip/DefaultTooltipLazy'

interface BulkActionsButtonProps extends ButtonProps {
  tooltipText: string;
  Icon?: ReactElement
  active?: boolean
}

const ActionButton = forwardRef<HTMLButtonElement, BulkActionsButtonProps>(
  function ActionButton (props, ref) {
    const {
      tooltipText,
      children,
      Icon,
      active,
      ...buttonProps
    } = props
    const background = active ? 'bg-primary' : ''
    const text = active ? 'text-white' : 'text-primary'
    return (
      <DefaultTooltipLazy title={tooltipText}>
        <span className="h-full">
          <Button
            ref={ref}
            size="small"
            {...buttonProps}
            variant={active ? 'contained' : 'text'}
            className={`pointer-events-auto py-0 px-2 md:pb-1.5 h-full flex flex-col justify-center md:justify-end gap-y-1 items-center normal-case min-w-0 ${background} ${text} ${props.className ?? ''}`}
          >
            {Icon}
            <span
              className="hidden md:inline text-[0.6rem] leading-[0.4rem] xl:text-[1rem] xl:leading-[0.7rem]"
            >
              {children}
            </span>
          </Button>
        </span>
      </DefaultTooltipLazy>
    )
  }
)

export default memo(ActionButton)
