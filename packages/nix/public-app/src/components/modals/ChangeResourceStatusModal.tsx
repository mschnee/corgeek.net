import { useCallback, useMemo, useState } from 'react'

import BaseModalLazy from '@/components/modals/BaseModalLazy'
import ConfirmForm from '@/components/modals/ConfirmForm'
import type { APIServerError } from '@/lib/clients/api/apiFetch'
import type { CRUDResultType } from '@/lib/hooks/queries/util/CRUDResultType'

interface IBaseProps<T extends CRUDResultType> {
  open: boolean
  onClose: () => void
  onSuccess?: () => void
  records: T[],
  isRemoving: boolean,
  warningText: string;
  renderRecord: (record: T) => string
  resourceName: string;
}

interface IArchiveProps{
  type: 'archive',
  update: (args: {ids: string[], delta: {isArchived: boolean}}, options: {onSuccess?: () => void, onError?: (error: APIServerError) => void}) => void,
}

interface IDeleteProps {
  type: 'delete',
  update: (args: {ids: string[], delta: {isDeleted: boolean}}, options: {onSuccess?: () => void, onError?: (error: APIServerError) => void}) => void,
}

export default function ChangeResourceStatusModal<T extends CRUDResultType> (props: (IBaseProps<T> & (IArchiveProps | IDeleteProps))) {
  const [error, setError] = useState<null | APIServerError>(null)
  const {
    open,
    onClose,
    records,
    onSuccess,
    isRemoving,
    renderRecord,
    warningText,
    update,
    type,
    resourceName
  } = props

  const action = type === 'delete'
    ? (isRemoving ? 'Deactivate' : 'Reactivate')
    : (isRemoving ? 'Archive' : 'Restore')

  const title = `${action} ${resourceName}`
  const description = `${action} the following ${resourceName.toLowerCase()}`

  const onConfirm = useCallback(() => {
    const ids = records.map(({ id }) => id)
    const options = {
      onSuccess: () => {
        setError(null)
        if (onSuccess) {
          onSuccess()
        }
        onClose()
      },
      onError: (error: APIServerError) => {
        setError(error)
      }
    }
    if (type === 'delete') {
      void update({ ids, delta: { isDeleted: isRemoving } }, options)
    } else {
      void update({ ids, delta: { isArchived: isRemoving } }, options)
    }
  }, [records, update, type, onClose, onSuccess, setError, isRemoving])

  const errors = useMemo(() => (error?.errors || [])
    .map(({ message, resourceId }) => {
      const record = records.find(record => record.id === resourceId)
      const prefix = record === undefined ? 'Unknown resource' : renderRecord(record)
      return `${prefix}: Unable to ${isRemoving ? 'deactivate' : 'reactivate'}. ${message}`
    })
  , [records, error, isRemoving, renderRecord])

  return (
    <BaseModalLazy
      open={open}
      onClose={onClose}
      name={title.replace(' ', '-').toLowerCase()}
      title={title}
      description={description}
      errors={errors}
    >
      <div>
        <div className="flex flex-row flex-wrap gap-4 py-4 text-base lg:text-lg">
          {records.map(record => {
            const name = renderRecord(record)
            return (
              <div key={name}>
                {name}
              </div>
            )
          })}
        </div>
        <ConfirmForm
          warningText={warningText}
          onConfirm={onConfirm}
          confirmationText={action}
        />
      </div>
    </BaseModalLazy>
  )
}
