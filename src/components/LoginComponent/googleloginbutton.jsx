import React from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const clientId = "420650638651-lic6rnh8lufkkoostp7eihadi6qrp00m.apps.googleusercontent.com";

function GoogleLoginButtonInner() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const token = tokenResponse.credential || tokenResponse.access_token;
      try {
        const res = await axios.post('http://localhost:8000/api/auth/google', { token });
        localStorage.setItem('jwt', res.data.token);
        window.location.href = '/dashboard';
      } catch (err) {
        alert('Error autenticando con Google');
      }
    },
    onError: () => alert('Error al iniciar sesión con Google'),
    flow: 'implicit', // o 'auth-code' según tu backend
    redirect_uri: "http://localhost:5173/",
  });

  return (
    <button
      className="btn btn-outline"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
      onClick={() => login()}
      type="button"
    >
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/google.svg"
        alt="Google"
        style={{ width: '20px', height: '20px', marginRight: '10px' }}
      />
      Continue with Google
    </button>
  );
}

export default function GoogleLoginButton() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLoginButtonInner />
    </GoogleOAuthProvider>
  );
}