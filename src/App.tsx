
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import Profil from '@/pages/Profil';
import Recommandations from '@/pages/Recommandations';
import Historique from '@/pages/Historique';
import NotFound from '@/pages/NotFound';
import QuiSommesNous from '@/pages/QuiSommesNous';
import NosValeurs from '@/pages/NosValeurs';
import Contact from '@/pages/Contact';
import ProtectedRoute from '@/components/ProtectedRoute';
import AdminPanel from '@/pages/AdminPanel';
import TeensLogin from '@/pages/teens/Login';
import TeensRegister from '@/pages/teens/Register';
import Teens from '@/pages/Teens';
import TeensPersonalSpace from '@/pages/TeensPersonalSpace';
import TeensFunSolutions from '@/pages/TeensFunSolutions';
import TeensParentalAccessDashboard from '@/pages/TeensParentalAccessDashboard';
import TeensShop from '@/pages/TeensShop';
import TeensQuickAlert from '@/pages/TeensQuickAlert';
import TeensCalendar from '@/pages/TeensCalendar';
import TeensCheckIn from '@/pages/TeensCheckIn';
import TeensParentalAccess from '@/pages/TeensParentalAccess';
import TeensFamilySpace from '@/pages/TeensFamilySpace';
import TeensIntimacySpace from '@/pages/TeensIntimacySpace';
import TeensFamilySimulator from '@/pages/teens/FamilySimulator';
import TeensQuestionnaire from '@/pages/TeensQuestionnaire';
import TeensDashboardParent from '@/pages/TeensDashboardParent';
import TeensAIEvaluation from '@/pages/TeensAIEvaluation';
import EntrepriseLogin from '@/pages/entreprise/Login';
import EntrepriseRegister from '@/pages/entreprise/Register';
import EntrepriseForgotPassword from '@/pages/entreprise/ForgotPassword';
import EntrepriseResetPassword from '@/pages/entreprise/ResetPassword';
import Entreprise from '@/pages/Entreprise';
import EntrepriseDashboard from '@/pages/EntrepriseDashboard';
import EntrepriseAdminDashboard from '@/pages/entreprise/AdminDashboard';
import EntrepriseQuestionnaire from '@/pages/EntrepriseQuestionnaire';
import EntrepriseOrders from '@/pages/entreprise/Orders';
import EntrepriseShop from '@/pages/entreprise/Shop';
import EntrepriseUnboxing from '@/pages/entreprise/Unboxing';
import EntrepriseSimulator from '@/pages/entreprise/Simulator';
import EntrepriseAdminContentManager from '@/pages/entreprise/AdminContentManager';
import TeensCustomization from '@/pages/TeensCustomization';
import TeensJournal from '@/pages/TeensJournal';
import TeensPlaylist from '@/pages/TeensPlaylist';
import TeensMetaverse from '@/pages/TeensMetaverse';
import EmployeeDashboard from '@/pages/entreprise/EmployeeDashboard';
import ManagerDashboard from '@/pages/entreprise/ManagerDashboard';
import HRDashboard from '@/pages/entreprise/HRDashboard';

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
          
          {/* Pages footer */}
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/nos-valeurs" element={<NosValeurs />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Route */}
          <Route path="/admin" element={<ProtectedRoute requireAuth={true}><AdminPanel /></ProtectedRoute>} />
          
          {/* Teens Routes */}
          <Route path="/teens/login" element={<TeensLogin />} />
          <Route path="/teens/register" element={<TeensRegister />} />
          <Route path="/teens" element={<ProtectedRoute requireAuth={true}><Teens /></ProtectedRoute>} />
          <Route path="/teens/personal-space" element={<ProtectedRoute requireAuth={true}><TeensPersonalSpace /></ProtectedRoute>} />
          <Route path="/teens/fun-solutions" element={<ProtectedRoute requireAuth={true}><TeensFunSolutions /></ProtectedRoute>} />
          <Route path="/teens/parental-access-dashboard" element={<ProtectedRoute requireAuth={true}><TeensParentalAccessDashboard /></ProtectedRoute>} />
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
          <Route path="/teens/ai-evaluation" element={<ProtectedRoute requireAuth={true}><TeensAIEvaluation /></ProtectedRoute>} />
          
          {/* Entreprise Routes */}
          <Route path="/entreprise/login" element={<EntrepriseLogin />} />
          <Route path="/entreprise/register" element={<EntrepriseRegister />} />
          <Route path="/entreprise/forgot-password" element={<EntrepriseForgotPassword />} />
          <Route path="/entreprise/reset-password" element={<EntrepriseResetPassword />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/entreprise/dashboard" element={<ProtectedRoute requireAuth={true}><EntrepriseDashboard /></ProtectedRoute>} />
          <Route path="/entreprise/employee-dashboard" element={<ProtectedRoute requireAuth={true}><EmployeeDashboard /></ProtectedRoute>} />
          <Route path="/entreprise/manager-dashboard" element={<ProtectedRoute requireAuth={true}><ManagerDashboard /></ProtectedRoute>} />
          <Route path="/entreprise/hr-dashboard" element={<ProtectedRoute requireAuth={true}><HRDashboard /></ProtectedRoute>} />
          <Route path="/entreprise/admin-dashboard" element={<ProtectedRoute requireAuth={true} requireAdmin={true}><EntrepriseAdminDashboard /></ProtectedRoute>} />
          <Route path="/entreprise/questionnaire" element={<ProtectedRoute requireAuth={true}><EntrepriseQuestionnaire /></ProtectedRoute>} />
          <Route path="/entreprise/orders" element={<ProtectedRoute requireAuth={true}><EntrepriseOrders /></ProtectedRoute>} />
          <Route path="/entreprise/shop" element={<ProtectedRoute requireAuth={true}><EntrepriseShop /></ProtectedRoute>} />
          <Route path="/entreprise/unboxing" element={<ProtectedRoute requireAuth={true}><EntrepriseUnboxing /></ProtectedRoute>} />
          <Route path="/entreprise/simulator" element={<EntrepriseSimulator />} />
          <Route path="/entreprise/admin-content" element={<ProtectedRoute requireAuth={true} requireAdmin={true}><EntrepriseAdminContentManager /></ProtectedRoute>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
