import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './contexts/auth'; 

import Rotas from './Rotas';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </NavigationContainer>
  );
}