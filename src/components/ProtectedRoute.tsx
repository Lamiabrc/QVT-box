
import React from 'react';
import { Navigate } from 'react-router-dom';
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
  const { user, loading, isAdmin } = useSecureAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Check auth requirement
  if (requireAuth && !user) {
    return <Navigate to="/entreprise/login" replace />;
  }

  // Check admin requirement
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/entreprise" replace />;
  }

  // For simulator requirement, just continue for now
  if (requireSimulator && !user) {
    return <Navigate to="/entreprise/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
