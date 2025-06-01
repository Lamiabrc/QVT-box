
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Entreprise from "./pages/Entreprise";
import Teens from "./pages/Teens";
import EntrepriseDashboard from "./pages/EntrepriseDashboard";
import EntrepriseQuestionnaire from "./pages/EntrepriseQuestionnaire";
import TeensQuestionnaire from "./pages/TeensQuestionnaire";
import TeensDashboardParent from "./pages/TeensDashboardParent";
import TeensFamilySpace from "./pages/TeensFamilySpace";
import TeensPersonalSpace from "./pages/TeensPersonalSpace";
import TeensCheckIn from "./pages/TeensCheckIn";
import TeensQuickAlert from "./pages/TeensQuickAlert";
import TeensParentalAccess from "./pages/TeensParentalAccess";
import Recommandations from "./pages/Recommandations";
import Historique from "./pages/Historique";
import Profil from "./pages/Profil";
import Auth from "./pages/Auth";
import TeensIntimacySpace from "./pages/TeensIntimacySpace";
import TeensMetaverse from "./pages/TeensMetaverse";
import TeensShop from "./pages/TeensShop";
import TeensCalendar from "./pages/TeensCalendar";

// Enterprise Pages
import EntrepriseLogin from "./pages/entreprise/Login";
import EntrepriseRegister from "./pages/entreprise/Register";
import EntrepriseForgotPassword from "./pages/entreprise/ForgotPassword";
import EntrepriseResetPassword from "./pages/entreprise/ResetPassword";
import AdminDashboard from "./pages/entreprise/AdminDashboard";
import AdminContentManager from "./pages/entreprise/AdminContentManager";
import Simulator from "./pages/entreprise/Simulator";
import Orders from "./pages/entreprise/Orders";
import EntrepriseShop from "./pages/entreprise/Shop";
import Unboxing from "./pages/entreprise/Unboxing";
import EntrepriseDashboardNew from "./pages/entreprise/Dashboard";

// Teens Pages
import TeensLogin from "./pages/teens/Login";
import TeensRegister from "./pages/teens/Register";
import FamilySimulator from "./pages/teens/FamilySimulator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* PUBLIC Enterprise Routes - No auth required */}
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/entreprise/login" element={<EntrepriseLogin />} />
          <Route path="/entreprise/register" element={<EntrepriseRegister />} />
          <Route path="/entreprise/forgot-password" element={<EntrepriseForgotPassword />} />
          <Route path="/entreprise/reset-password" element={<EntrepriseResetPassword />} />
          <Route path="/entreprise/simulator" element={<Simulator />} />
          
          {/* Protected Enterprise Routes */}
          <Route 
            path="/entreprise/dashboard" 
            element={
              <ProtectedRoute requireAuth={true}>
                <EntrepriseDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/entreprise/mon-dashboard" 
            element={
              <ProtectedRoute requireAuth={true}>
                <EntrepriseDashboardNew />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/entreprise/admin-dashboard" 
            element={
              <ProtectedRoute requireAuth={true} requireAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/entreprise/admin-content" 
            element={
              <ProtectedRoute requireAuth={true} requireAdmin={true}>
                <AdminContentManager />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/entreprise/questionnaire" 
            element={
              <ProtectedRoute requireAuth={true}>
                <EntrepriseQuestionnaire />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/entreprise/orders" 
            element={
              <ProtectedRoute requireAuth={true}>
                <Orders />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/entreprise/shop" 
            element={
              <ProtectedRoute requireAuth={true}>
                <EntrepriseShop />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/entreprise/unboxing" 
            element={
              <ProtectedRoute requireAuth={true}>
                <Unboxing />
              </ProtectedRoute>
            } 
          />
          
          {/* PUBLIC Teens Routes - No auth required */}
          <Route path="/teens" element={<Teens />} />
          <Route path="/teens/login" element={<TeensLogin />} />
          <Route path="/teens/register" element={<TeensRegister />} />
          <Route path="/teens/family-simulator" element={<FamilySimulator />} />
          
          {/* Protected Teens Routes */}
          <Route 
            path="/teens/questionnaire" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensQuestionnaire />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teens/dashboard-parent" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensDashboardParent />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teens/family-space" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensFamilySpace />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teens/personal-space" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensPersonalSpace />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teens/intimacy-space" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensIntimacySpace />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teens/metaverse" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensMetaverse />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teens/shop" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensShop />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teens/calendar" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensCalendar />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teens/check-in" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensCheckIn />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teens/quick-alert" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensQuickAlert />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teens/parental-access" 
            element={
              <ProtectedRoute requireAuth={true}>
                <TeensParentalAccess />
              </ProtectedRoute>
            } 
          />
          
          {/* Shared Protected Routes */}
          <Route 
            path="/recommandations" 
            element={
              <ProtectedRoute requireAuth={true}>
                <Recommandations />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/historique" 
            element={
              <ProtectedRoute requireAuth={true}>
                <Historique />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profil" 
            element={
              <ProtectedRoute requireAuth={true}>
                <Profil />
              </ProtectedRoute>
            } 
          />
          
          {/* Catch all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
