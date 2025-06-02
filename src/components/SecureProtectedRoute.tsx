
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSecureAuth } from '@/hooks/useSecureAuth';

interface SecureProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
  requireManager?: boolean;
  requireHR?: boolean;
  allowedRoles?: string[];
}

const SecureProtectedRoute: React.FC<SecureProtectedRouteProps> = ({ 
  children, 
  requireAuth = false,
  requireAdmin = false,
  requireManager = false,
  requireHR = false,
  allowedRoles = []
}) => {
  const { user, session, loading, isAdmin, isManager, isHR, enterpriseRole } = useSecureAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Vérification des autorisations...</p>
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
      return '/auth';
    }
  };

  // Check auth requirement
  if (requireAuth && (!user || !session)) {
    console.log('Auth required but no user/session, redirecting to:', getLoginRedirect());
    return <Navigate to={getLoginRedirect()} replace />;
  }

  // Check admin requirement
  if (requireAdmin && !isAdmin) {
    console.log('Admin access required but user is not admin');
    const redirectPath = location.pathname.startsWith('/teens') ? '/teens' : '/entreprise';
    return <Navigate to={redirectPath} replace />;
  }

  // Check manager requirement
  if (requireManager && !isManager && !isHR && !isAdmin) {
    console.log('Manager access required but user does not have manager privileges');
    const redirectPath = location.pathname.startsWith('/teens') ? '/teens' : '/entreprise';
    return <Navigate to={redirectPath} replace />;
  }

  // Check HR requirement
  if (requireHR && !isHR && !isAdmin) {
    console.log('HR access required but user does not have HR privileges');
    const redirectPath = location.pathname.startsWith('/teens') ? '/teens' : '/entreprise';
    return <Navigate to={redirectPath} replace />;
  }

  // Check specific allowed roles
  if (allowedRoles.length > 0 && enterpriseRole && !allowedRoles.includes(enterpriseRole) && !isAdmin) {
    console.log('User role not in allowed roles:', enterpriseRole, allowedRoles);
    const redirectPath = location.pathname.startsWith('/teens') ? '/teens' : '/entreprise';
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default SecureProtectedRoute;
