import React, { useState } from 'react'
import { HostHelpCentre } from '../../components/host/hostSupport/HostHelpCentre'
import { HostIssueTable } from '../../components/host/hostSupport/HostIssueTable'
import { HostIssueInput } from '../../components/host/hostSupport/HostIssueInput'

export const HostSupport: React.FC = () => {
  const [createIssue, setCreateIssue] = useState<number>(0)

  return (
    <div className='flex flex-col items-start justify-start w-full h-full mt-16 px-5 xl:px-8'>
          {
            createIssue === 0 ? <HostHelpCentre setCreateIssue={setCreateIssue} />
            : createIssue === 1 ? <HostIssueTable setCreateIssue={setCreateIssue} />
            : createIssue === 2 && <HostIssueInput setCreateIssue={setCreateIssue} />
          }
    </div>
  )
}