import { useState, useEffect } from 'react'
import axios from 'axios'

import { Header } from '@/components/Header'
import { JobComponent } from '@/components/Job'
import styled from 'styled-components'

type Job = {
  jobTitle: string
  companyName: string
  jobDescription: string
  postedDate: string
}

export default function App({
  fetchedJobs,
  companies,
}: {
  fetchedJobs: Job[]
  companies: string[]
}): JSX.Element {
  const [showByCompany, setShowByCompany] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState('')
  const [showLast7Days, setShowLast7Days] = useState(false)
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(fetchedJobs)

  useEffect(() => {
    let filteredJobs = fetchedJobs

    if (selectedCompany) {
      setShowByCompany(true)
      filteredJobs = filteredJobs.filter(
        (job) => job.companyName === selectedCompany
      )
    } else {
      setShowByCompany(false)
    }

    if (showLast7Days) {
      filteredJobs = filteredJobs.filter((job) => {
        const regexResult = job.postedDate.match(/^(\d+)([dh])/)
        if (regexResult) {
          const [_, number, letter] = regexResult
          return letter === 'd' ? Number(number) <= 7 : true
        }
        return false
      })
    }

    setFilteredJobs(filteredJobs)
  }, [selectedCompany, fetchedJobs, showLast7Days])

  return (
    <>
      <Header
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        companies={companies}
        showLast7Days={showLast7Days}
        setShowLast7Days={setShowLast7Days}
      />
      <JobsContainer>
        {filteredJobs.map((job, index) => (
          <JobComponent job={job} key={index} />
        ))}
      </JobsContainer>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const response = await axios.post('https://www.zippia.com/api/jobs/', {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: 'Business Analyst',
      locations: [],
      numJobs: 20,
      previousListingHashes: [],
    })

    const fetchedJobs = response.data.jobs

    const companies = [
      ...new Set(fetchedJobs.map((job: Job) => job.companyName)),
    ]

    return {
      props: {
        fetchedJobs,
        companies,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        fetchedJobs: [],
        companies: [],
      },
    }
  }
}

const JobsContainer = styled.main`
  padding: 0 7rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 767px) {
    padding: 0 1rem;
  }
`
