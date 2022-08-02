import React from 'react'
import { Appearance } from 'react-native'
import { NavigationContainer,DefaultTheme ,DarkTheme} from '@react-navigation/native'
import RootStackNavigation from './src/Navigation/RootNavigation'
import { Provider } from 'react-redux'
import { persistor, store } from './src/Redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

function App(){

  return (
   <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer >
          <RootStackNavigation />
        </NavigationContainer>
     </PersistGate>
   </Provider>
  )
}

export default App
