import { graphql } from 'msw'

export const handlers = [
    graphql.query('CompanySearch', (req, res, ctx) => {
        console.log('original mock')

        return res(
            ctx.data({
                search: [
                    {
                        companyName: 'Foo',
                    },
                    {
                        companyName: 'Bar',
                    },
                ],
            })
        )
    }),
]
