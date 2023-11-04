'use client'

import type { ReactNode } from 'react'

export default function AuthLayout (
  { children } : {children: ReactNode}
) {
  return (
    <div className="bg-base-300">
      {children}
    </div>
  )
}
