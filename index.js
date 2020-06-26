import React from 'react'
import { gql, useQuery } from '@apollo/client'

// query
const QUERY_SEARCH = gql`
    query CompanySearch {
        search {
            companyName
        }
    }
`

const CompanySelect = () => {
    const { data, error, loading } = useQuery(QUERY_SEARCH, {})
    
    if (loading) {
        return 'loading'
    }
    if (error) {
        return 'error'
    }

    return (
        <div>
            {data?.search?.map((c) => (
                <div key={c.companyName}>{c.companyName}</div>
            ))}
        </div>
    )
}

export default CompanySelect
