
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSecureAuth } from '@/hooks/useSecureAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
  requireSimulator?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = false,
  requireAdmin = false,
  requireSimulator = false
}) => {
  const { user, session, loading, isAdmin } = useSecureAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Chargement...</p>
        </div>
      </div>
    );
  }

  // Determine the correct login redirect based on the current path
  const getLoginRedirect = () => {
    const path = location.pathname;
    if (path.startsWith('/teens')) {
      return '/teens/login';
    } else if (path.startsWith('/entreprise')) {
      return '/entreprise/login';
    } else {
      return '/auth'; // Default fallback
    }
  };

  // Check auth requirement - check both user AND session for better persistence
  if (requireAuth && (!user || !session)) {
    console.log('Auth required but no user/session, redirecting to:', getLoginRedirect());
    return <Navigate to={getLoginRedirect()} replace />;
  }

  // Check admin requirement
  if (requireAdmin && !isAdmin) {
    const redirectPath = location.pathname.startsWith('/teens') ? '/teens' : '/entreprise';
    return <Navigate to={redirectPath} replace />;
  }

  // For simulator requirement, just continue for now
  if (requireSimulator && (!user || !session)) {
    return <Navigate to={getLoginRedirect()} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
