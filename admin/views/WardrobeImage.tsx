/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core'
import {
  Field as KeystoneImageField,
  type ImageValue,
} from '@keystone-6/core/fields/types/image/views'
import type { ClipboardEvent, ComponentProps } from 'react'

export { CardValue, controller } from '@keystone-6/core/fields/types/image/views'

type ImageFieldProps = ComponentProps<typeof KeystoneImageField>

type ImageCellProps = {
  field: { path: string }
  item: Record<string, { url: string } | null>
}

export const Cell = ({ item, field }: ImageCellProps) => {
  const image = item[field.path]

  if (!image) {
    return null
  }

  return (
    <img
      alt=""
      css={{
        display: 'block',
        objectFit: 'contain',
        height: 160,
        width: 160
      }}
      src={image.url}
    />
  )
}

const validClipboardImage = { valid: true } as ValidityState

const getPastedImage = (event: ClipboardEvent<HTMLDivElement>) => {
  const clipboardFiles = Array.from(event.clipboardData.files)
  const clipboardItems = Array.from(event.clipboardData.items)
  const imageFile = clipboardFiles.find(file => file.type.startsWith('image/'))

  return imageFile ?? clipboardItems.find(item => item.type.startsWith('image/'))?.getAsFile()
}

export const Field = ({ onChange, value, ...props }: ImageFieldProps) => {
  const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
    const imageFile = getPastedImage(event)

    if (!imageFile) {
      return
    }

    event.preventDefault()
    onChange?.({
      kind: 'upload',
      data: { file: imageFile, validity: validClipboardImage },
      previous: value,
    })
  }

  return (
    <div onPaste={handlePaste} tabIndex={0}>
      <KeystoneImageField {...props} onChange={onChange} value={value} />
      <p css={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
        Click here and paste an image from your clipboard.
      </p>
    </div>
  )
}
