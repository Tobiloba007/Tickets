import React, { useState } from 'react'
import { UserHelpCentre } from '../../components/user/userSupport/UserHelpCentre'
import { CreateIssueTable } from '../../components/user/userSupport/CreateIssueTable'
import { CreateIssueInput } from '../../components/user/userSupport/CreateIssueInput'

export const UserSupport: React.FC = () => {
  const [createIssue, setCreateIssue] = useState<number>(0)

  return (
    <div className='flex flex-col items-start justify-start w-full h-full mt-16 px-5 xl:px-8'>
          {
            createIssue === 0 ? <UserHelpCentre setCreateIssue={setCreateIssue} />
            : createIssue === 1 ? <CreateIssueTable setCreateIssue={setCreateIssue} />
            : createIssue === 2 && <CreateIssueInput setCreateIssue={setCreateIssue} />
          }
    </div>
  )
}