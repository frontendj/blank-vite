import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from 'components/Layout/Layout';
import { LayoutHeader } from 'components/Layout/LayoutHeader';
import { LayoutMain } from 'components/Layout/LayoutMain';
import { HomeContainerErrorBoundary } from 'containers/home/container';
import { StrictMode, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: Infinity,
            staleTime: Infinity,
        },
    },
});

const Content = () => {
    return (
        <Layout>
            <LayoutHeader tag="header">
                <h1>Demo app</h1>
            </LayoutHeader>
            <LayoutMain tag="main">
                <Routes>
                    <Route element={<div>Hello</div>} path="/:id" />
                    <Route element={<HomeContainerErrorBoundary />} path="/" />
                </Routes>
            </LayoutMain>
        </Layout>
    );
};
const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Content />
                </QueryClientProvider>
            </BrowserRouter>
        </StrictMode>
    );
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(createElement(App));
