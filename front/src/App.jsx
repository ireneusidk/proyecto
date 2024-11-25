import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Menu from './componentes/menu/Menu';
import Register from './componentes/api/Register';
import Login from './componentes/api/Login';
import { AuthProvider } from './componentes/api/AuthContext';
import Protegida from './componentes/protegida/Protegida'
import ProtectedRoute from './componentes/api/ProtectedRoutes';
import Inicio from './componentes/menu/Inicio';
import Post from './componentes/posts/Posts';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="container">
      <div class="background-shapes">
        <div class="shape square"></div>
        <div class="shape square"></div>
        <div class="shape triangle"></div>
        <div class="shape triangle"></div>
        <div class="shape circle"></div>
        <div class="shape circle"></div>
      </div>
        <Header />
        <Menu /> {/* Muestra el menú de pestañas */}
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
