'use client'
import { Provider } from "react-redux"
import { store } from './store'
import { EdgeStoreProvider } from "@/lib/edgestore"

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <EdgeStoreProvider>
                {children}
            </EdgeStoreProvider>
        </Provider>
    )
}
