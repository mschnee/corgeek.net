import { memo } from 'react'

import ChangeResourceStatusModal from '@/components/modals/ChangeResourceStatusModal'
import { useUpdateManyPackage } from '@/lib/hooks/queries/crud/packages'

interface Package {
  id: string;
  name: string;
}

interface IProps {
  open: boolean
  onClose: () => void
  onSuccess?: () => void
  packages: Package[]
  isRemoving: boolean;
}

const renderRecord = ({ name }: Package) => name
export default memo(function ChangePackagesStatusModal (props: IProps) {
  const {
    open,
    onClose,
    onSuccess,
    packages,
    isRemoving
  } = props
  const { mutate } = useUpdateManyPackage()
  const warningText = isRemoving
    ? 'By archiving these packages, the package AND all of its versions will become hidden to potential users. Additionally, all of the package versions will be deleted when there are no new downloads for a 30-day period.'
    : 'By restoring these packages, users will be able to see them again.'
  return (
    <ChangeResourceStatusModal
      open={open}
      onClose={onClose}
      onSuccess={onSuccess}
      records={packages}
      isRemoving={isRemoving}
      update={mutate}
      resourceName="Packages"
      warningText={warningText}
      renderRecord={renderRecord}
      type="archive"
    />
  )
})
