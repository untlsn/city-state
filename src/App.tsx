import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { enableMapSet } from 'immer';
import pages from '~react-pages';
import DefaultTemplate from '~/components/templates/Default';

enableMapSet();

export default function App() {
  const routes = useRoutes(pages);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DefaultTemplate>
        {routes}
      </DefaultTemplate>
    </Suspense>
  );
}
