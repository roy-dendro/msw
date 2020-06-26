import React from 'react'
import { graphql } from 'msw'
import { render, waitFor, screen } from '@testing-library/react'
import CompanySelect from './index'
import { client } from './client'
import { server } from './mocks/server'
import { ApolloProvider } from '@apollo/client'

describe('Search', () => {
    it('works', async () => {
        // Wrapping in provider should be moved to some utility
        render(
            <ApolloProvider client={client}>
                <CompanySelect />
            </ApolloProvider>
        )

        await waitFor(() => screen.getByText('Foo'))
    })
    it('shows an error when error returned by search', async () => {
        server.use(
            graphql.query('CompanySearch', (req, res, ctx) => {
                console.log('overwrite called')
                return res(
                    ctx.errors([
                        {
                            message: 'ERROR',
                        },
                    ])
                )
            })
        )

        // Wrapping in provider should be moved to some utility
        render(
            <ApolloProvider client={client}>
                <CompanySelect />
            </ApolloProvider>
        )

        await waitFor(() => screen.getByText('error'))
    })
})
