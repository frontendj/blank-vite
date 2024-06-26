import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from 'components/Layout/Layout';
import { HomeContainerErrorBoundary } from 'containers/home/container';
import { StrictMode, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from 'store/redux-store';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
});

const Content = () => {
    return (
        <Layout>
            <main>
                <h1>Demo app</h1>
                <Routes>
                    <Route element={<div>Hello</div>} path="/blank-vite/:id" />
                    <Route element={<HomeContainerErrorBoundary />} path="/blank-vite/" />
                </Routes>
            </main>
        </Layout>
    );
};
const App = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <QueryClientProvider client={queryClient}>
                        <Content />
                    </QueryClientProvider>
                </BrowserRouter>
            </Provider>
        </StrictMode>
    );
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(createElement(App));
