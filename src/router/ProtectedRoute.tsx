import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { getRoleFromToken } from '../services/getRoleFromToken';

interface ProtectedRouteProps {
    children: ReactNode;
    allow?: string[];
}

function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload?.exp;

    if (typeof exp !== 'number') return false;

    return exp <= Math.floor(Date.now() / 1000);
  } catch {
    return true;
  }
}

export default function ProtectedRoute({ children, allow }: ProtectedRouteProps) {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    toast.error('Please login to continue', { toastId: 'auth-required' });
    return <Navigate to="/login" replace />;
  }

  if (isTokenExpired(token)) {
    localStorage.removeItem('accessToken');
    toast.error('Session expired. Please login again.', { toastId: 'session-expired' });
    return <Navigate to="/login" replace />;
  }

  if (allow && allow.length > 0) {
    const role = getRoleFromToken();

    if (!role) {
      toast.error('Please login to continue', { toastId: 'auth-required' });
      return <Navigate to="/login" replace />;
    }

    if (!allow.includes(role)) {
      toast.error('You do not have permission to access this page', { toastId: 'access-denied' });
      return <Navigate to="/access-denied" replace />;
    }
  }

  return <>{children}</>;
}
