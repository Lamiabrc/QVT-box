import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import Profil from '@/pages/Profil';
import Recommandations from '@/pages/Recommandations';
import Historique from '@/pages/Historique';
import NotFound from '@/pages/NotFound';
import ProtectedRoute from '@/components/ProtectedRoute';
import TeensLogin from '@/pages/TeensLogin';
import TeensRegister from '@/pages/TeensRegister';
import Teens from '@/pages/Teens';
import TeensPersonalSpace from '@/pages/TeensPersonalSpace';
import TeensShop from '@/pages/TeensShop';
import TeensQuickAlert from '@/pages/TeensQuickAlert';
import TeensCalendar from '@/pages/TeensCalendar';
import TeensCheckIn from '@/pages/TeensCheckIn';
import TeensParentalAccess from '@/pages/TeensParentalAccess';
import TeensFamilySpace from '@/pages/TeensFamilySpace';
import TeensIntimacySpace from '@/pages/TeensIntimacySpace';
import TeensFamilySimulator from '@/pages/TeensFamilySimulator';
import TeensQuestionnaire from '@/pages/TeensQuestionnaire';
import TeensDashboardParent from '@/pages/TeensDashboardParent';
import EntrepriseLogin from '@/pages/entreprise/Login';
import EntrepriseRegister from '@/pages/entreprise/Register';
import EntrepriseForgotPassword from '@/pages/entreprise/ForgotPassword';
import EntrepriseResetPassword from '@/pages/entreprise/ResetPassword';
import Entreprise from '@/pages/entreprise/Entreprise';
import EntrepriseDashboard from '@/pages/entreprise/EntrepriseDashboard';
import EntrepriseAdminDashboard from '@/pages/entreprise/EntrepriseAdminDashboard';
import EntrepriseQuestionnaire from '@/pages/entreprise/EntrepriseQuestionnaire';
import EntrepriseOrders from '@/pages/entreprise/EntrepriseOrders';
import EntrepriseShop from '@/pages/entreprise/EntrepriseShop';
import EntrepriseUnboxing from '@/pages/entreprise/EntrepriseUnboxing';
import EntrepriseSimulator from '@/pages/entreprise/EntrepriseSimulator';
import EntrepriseAdminContentManager from '@/pages/entreprise/EntrepriseAdminContentManager';
import TeensCustomization from '@/pages/TeensCustomization';
import TeensJournal from '@/pages/TeensJournal';
import TeensPlaylist from '@/pages/TeensPlaylist';
import TeensMetaverse from '@/pages/TeensMetaverse';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profil" element={<ProtectedRoute requireAuth={true}><Profil /></ProtectedRoute>} />
          <Route path="/recommandations" element={<ProtectedRoute requireAuth={true}><Recommandations /></ProtectedRoute>} />
          <Route path="/historique" element={<ProtectedRoute requireAuth={true}><Historique /></ProtectedRoute>} />
          
          {/* Teens Routes */}
          <Route path="/teens/login" element={<TeensLogin />} />
          <Route path="/teens/register" element={<TeensRegister />} />
          <Route path="/teens" element={<ProtectedRoute requireAuth={true}><Teens /></ProtectedRoute>} />
          <Route path="/teens/personal-space" element={<ProtectedRoute requireAuth={true}><TeensPersonalSpace /></ProtectedRoute>} />
          <Route path="/teens/customization" element={<ProtectedRoute requireAuth={true}><TeensCustomization /></ProtectedRoute>} />
          <Route path="/teens/journal" element={<ProtectedRoute requireAuth={true}><TeensJournal /></ProtectedRoute>} />
          <Route path="/teens/playlist" element={<ProtectedRoute requireAuth={true}><TeensPlaylist /></ProtectedRoute>} />
          <Route path="/teens/metaverse" element={<ProtectedRoute requireAuth={true}><TeensMetaverse /></ProtectedRoute>} />
          <Route path="/teens/shop" element={<ProtectedRoute requireAuth={true}><TeensShop /></ProtectedRoute>} />
          <Route path="/teens/quick-alert" element={<ProtectedRoute requireAuth={true}><TeensQuickAlert /></ProtectedRoute>} />
          <Route path="/teens/calendar" element={<ProtectedRoute requireAuth={true}><TeensCalendar /></ProtectedRoute>} />
          <Route path="/teens/check-in" element={<ProtectedRoute requireAuth={true}><TeensCheckIn /></ProtectedRoute>} />
          <Route path="/teens/parental-access" element={<ProtectedRoute requireAuth={true}><TeensParentalAccess /></ProtectedRoute>} />
          <Route path="/teens/family-space" element={<ProtectedRoute requireAuth={true}><TeensFamilySpace /></ProtectedRoute>} />
          <Route path="/teens/intimacy-space" element={<ProtectedRoute requireAuth={true}><TeensIntimacySpace /></ProtectedRoute>} />
          <Route path="/teens/family-simulator" element={<ProtectedRoute requireAuth={true}><TeensFamilySimulator /></ProtectedRoute>} />
          <Route path="/teens/questionnaire" element={<ProtectedRoute requireAuth={true}><TeensQuestionnaire /></ProtectedRoute>} />
          <Route path="/teens/dashboard-parent" element={<ProtectedRoute requireAuth={true}><TeensDashboardParent /></ProtectedRoute>} />
          
          {/* Entreprise Routes */}
          <Route path="/entreprise/login" element={<EntrepriseLogin />} />
          <Route path="/entreprise/register" element={<EntrepriseRegister />} />
          <Route path="/entreprise/forgot-password" element={<EntrepriseForgotPassword />} />
          <Route path="/entreprise/reset-password" element={<EntrepriseResetPassword />} />
          <Route path="/entreprise" element={<ProtectedRoute requireAuth={true}><Entreprise /></ProtectedRoute>} />
          <Route path="/entreprise/dashboard" element={<ProtectedRoute requireAuth={true}><EntrepriseDashboard /></ProtectedRoute>} />
          <Route path="/entreprise/admin-dashboard" element={<ProtectedRoute requireAuth={true} requireAdmin={true}><EntrepriseAdminDashboard /></ProtectedRoute>} />
          <Route path="/entreprise/questionnaire" element={<ProtectedRoute requireAuth={true}><EntrepriseQuestionnaire /></ProtectedRoute>} />
          <Route path="/entreprise/orders" element={<ProtectedRoute requireAuth={true}><EntrepriseOrders /></ProtectedRoute>} />
          <Route path="/entreprise/shop" element={<ProtectedRoute requireAuth={true}><EntrepriseShop /></ProtectedRoute>} />
          <Route path="/entreprise/unboxing" element={<ProtectedRoute requireAuth={true}><EntrepriseUnboxing /></ProtectedRoute>} />
          <Route path="/entreprise/simulator" element={<ProtectedRoute requireAuth={true}><EntrepriseSimulator /></ProtectedRoute>} />
          <Route path="/entreprise/admin-content" element={<ProtectedRoute requireAuth={true} requireAdmin={true}><EntrepriseAdminContentManager /></ProtectedRoute>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
