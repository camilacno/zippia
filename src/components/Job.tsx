import React from 'react'
import { Job } from '../interfaces'
import { Container, Article, CompanyInfo } from './JobStyles'

interface Props {
  job: Job
}

export function JobComponent({ job }: Props) {
  return (
    <Container>
      <CompanyInfo>
        <a href="#">{job.jobTitle}</a>
        <p>{job.companyName}</p>
        <p>{`Posted ${job.postedDate}`}</p>
      </CompanyInfo>

      <Article dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
    </Container>
  )
}
