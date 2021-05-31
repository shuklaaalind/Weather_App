import Router from './Navigation/Router';
import React from 'react';
import {RecoilRoot} from 'recoil';
import {QueryClientProvider} from 'react-query'; //@ts-ignore
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import {queryClient} from './Constants/Config';

function App() {
  return (
    <InternetConnectionAlert>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </RecoilRoot>
    </InternetConnectionAlert>
  );
}

export default App;
