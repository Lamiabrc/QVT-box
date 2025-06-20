
// App.tsx: Conditional Header and SignupPopup based on pathname
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import {
  Index,
  Contact,
  QuiSommesNous,
  NosValeurs,
  Famille,
  Teens,
  TeensLogin,
  TeensHome,
  TeensQuestionnaire,
  TeensAIEvaluation,
  TeensPersonalSpace,
  TeensIntimacySpace,
  TeensFamilySpace,
  TeensParentalAccess,
  TeensParentalAccessDashboard,
  TeensQuickAlert,
  TeensCheckIn,
  TeensCalendar,
  TeensJournal,
  TeensPlaylist,
  TeensCustomization,
  TeensFunSolutions,
  FamilySimulator,
  Entreprise,
  EntrepriseHome,
  EntrepriseLogin,
  EntrepriseRegister,
  EntrepriseForgotPassword,
  EntrepriseResetPassword,
  EntrepriseQuestionnaire,
  EntrepriseDashboard,
  EmployeeDashboard,
  ManagerDashboard,
  HRDashboard,
  AdminDashboard,
  EntrepriseOrders,
  EntrepriseUnboxing,
  EntrepriseSimulator,
  AdminContentManager,
  Auth,
  Login,
  Register,
  ForgotPassword,
  SimulatorHome,
  SimulatorHub,
  Recommandations,
  Historique,
  Profil,
  AdminPanel,
  NotFound,
  ConceptQVT,
  Unboxing,
  AdminLogin,
} from "@/pages";
import TeensShopV3 from "./pages/TeensShopV3";
import FamilyShopV3 from "./pages/FamilyShopV3";
import EnterpriseShopV3 from "./pages/EnterpriseShopV3";
import TeensDashboard from "./pages/TeensDashboard";
import FamilyDashboard from "./pages/FamilyDashboard";
import CoachQVT from "./pages/CoachQVT";
import Header from "./components/Header";
import SignupPopup from "./components/SignupPopup";

const queryClient = new QueryClient();

function AppContent() {
  const { pathname } = useLocation();
  
  // Pages sans header - including admin login and pages that already have their own headers
  const pagesWithoutHeader = [
    "/", 
    "/admin/login",
    "/teens/login",
    "/teens/home",
    "/teens/dashboard",
    "/famille/dashboard",
    "/entreprise/login",
    "/entreprise/home",
    "/entreprise/dashboard",
    "/unboxing"
  ];

  return (
    <>
      {/* Masque Header sur certaines pages */}
      {!pagesWithoutHeader.includes(pathname) && <Header />}
      {pathname !== "/" && pathname !== "/admin/login" && <SignupPopup />}

      {/* Notifications */}
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
        <Route path="/nos-valeurs" element={<NosValeurs />} />
        <Route path="/concept-qvt" element={<ConceptQVT />} />
        <Route path="/coach-qvt" element={<CoachQVT />} />
        <Route path="/unboxing" element={<Unboxing />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/famille" element={<Famille />} />
        <Route path="/famille/dashboard" element={<FamilyDashboard />} />
        <Route path="/famille/shop" element={<FamilyShopV3 />} />

        <Route path="/teens" element={<Teens />} />
        <Route path="/teens/dashboard" element={<TeensDashboard />} />
        <Route path="/teens/login" element={<TeensLogin />} />
        <Route path="/teens/home" element={<TeensHome />} />
        <Route path="/teens/shop" element={<TeensShopV3 />} />
        <Route path="/teens/questionnaire" element={<TeensQuestionnaire />} />
        <Route path="/teens/ai-evaluation" element={<TeensAIEvaluation />} />
        <Route path="/teens/personal-space" element={<TeensPersonalSpace />} />
        <Route path="/teens/intimacy-space" element={<TeensIntimacySpace />} />
        <Route path="/teens/family-space" element={<TeensFamilySpace />} />
        <Route
          path="/teens/parental-access"
          element={<TeensParentalAccess />}
        />
        <Route
          path="/teens/parental-access-dashboard"
          element={<TeensParentalAccessDashboard />}
        />
        <Route path="/teens/quick-alert" element={<TeensQuickAlert />} />
        <Route path="/teens/check-in" element={<TeensCheckIn />} />
        <Route path="/teens/calendar" element={<TeensCalendar />} />
        <Route path="/teens/journal" element={<TeensJournal />} />
        <Route path="/teens/playlist" element={<TeensPlaylist />} />
        <Route path="/teens/customization" element={<TeensCustomization />} />
        <Route path="/teens/fun-solutions" element={<TeensFunSolutions />} />
        <Route path="/teens/family-simulator" element={<FamilySimulator />} />

        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/entreprise/shop" element={<EnterpriseShopV3 />} />
        <Route path="/entreprise/register" element={<EntrepriseRegister />} />
        <Route path="/entreprise/home" element={<EntrepriseHome />} />
        <Route path="/entreprise/login" element={<EntrepriseLogin />} />
        <Route
          path="/entreprise/forgot-password"
          element={<EntrepriseForgotPassword />}
        />
        <Route
          path="/entreprise/reset-password"
          element={<EntrepriseResetPassword />}
        />
        <Route
          path="/entreprise/questionnaire"
          element={<EntrepriseQuestionnaire />}
        />
        <Route path="/entreprise/dashboard" element={<EntrepriseDashboard />} />
        <Route
          path="/entreprise/employee-dashboard"
          element={<EmployeeDashboard />}
        />
        <Route
          path="/entreprise/manager-dashboard"
          element={<ManagerDashboard />}
        />
        <Route path="/entreprise/hr-dashboard" element={<HRDashboard />} />
        <Route
          path="/entreprise/admin-dashboard"
          element={<AdminDashboard />}
        />
        <Route path="/entreprise/orders" element={<EntrepriseOrders />} />
        <Route path="/entreprise/unboxing" element={<EntrepriseUnboxing />} />
        <Route path="/entreprise/simulator" element={<EntrepriseSimulator />} />
        <Route
          path="/entreprise/admin-content"
          element={<AdminContentManager />}
        />

        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />

        <Route path="/simulators" element={<SimulatorHome />} />
        <Route path="/simulator-hub" element={<SimulatorHub />} />
        <Route path="/recommandations" element={<Recommandations />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/admin" element={<AdminPanel />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
