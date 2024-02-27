import { PropsWithChildren } from 'react'

declare global {
    export type NextPageParams<P extends {}, Props = {}> = PropsWithChildren<
        {
            params: P
        } & Props
    >
}