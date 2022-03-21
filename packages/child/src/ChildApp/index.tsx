import React, { FC } from "react"

export interface Props {
  text?: string
}

export const ChildApp: FC<Props> = ({ text }) => (
  <>
    <div>
      kek
    </div>
    <div>
      {text}
    </div>
  </>
)