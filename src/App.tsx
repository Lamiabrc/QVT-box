// src/App.tsx
import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

// Components « lourds » importés dynamiquement si besoin
// import { lazy } from "react";
// const TeensQuestionnaire = lazy(() => import("./pages/TeensQuestionnaire"));
// …

// Import global depuis votre barrel
import * as Pages from "@/pages";

import TeensDashboard from "./pages/TeensDashboard";
import FamilyDashboard from "./pages/FamilyDashboard";
import TeensShopV3 from "./pages/TeensShopV3";
import FamilyShopV3 from "./pages/FamilyShopV3";
import EnterpriseShopV3 from "./pages/EnterpriseShopV3";
import CoachQVT from "./pages/CoachQVT";

import Header from "./components/Header";
import SignupPopup from "./components/SignupPopup";

const queryClient = new QueryClient();

// Liste des chemins où l'on ne veut PAS afficher le Header ni le Signup
const pagesWithoutHeader = new Set([
  "/",
  "/admin/login",
  "/teens/login",
  "/teens/home",
  "/teens/dashboard",
  "/famille/dashboard",
  "/entreprise/login",
  "/entreprise/home",
  "/entreprise/dashboard",
  "/unboxing",
]);

function AppContent() {
  const { pathname } = useLocation();
  const showHeader = !pagesWithoutHeader.has(pathname);
  const showSignup = showHeader; // idem, ou affinez la condition si besoin

  return (
    <>
      {showHeader && <Header />}
      {showSignup && <SignupPopup />}

      <Toaster />

      {/* Pour supporter les composants lazy-loaded */}
      <Suspense fallback={<div>Chargement…</div>}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Pages.Index />} />
          <Route path="/contact" element={<Pages.Contact />} />
          <Route path="/qui-sommes-nous" element={<Pages.QuiSommesNous />} />
          <Route path="/nos-valeurs" element={<Pages.NosValeurs />} />
          <Route path="/concept-qvt" element={<Pages.ConceptQVT />} />
          <Route path="/coach-qvt" element={<CoachQVT />} />
          <Route path="/unboxing" element={<Pages.Unboxing />} />
          <Route path="/admin/login" element={<Pages.AdminLogin />} />

          {/* Famille */}
          <Route path="/famille" element={<Pages.Famille />} />
          <Route
            path="/famille/dashboard"
            element={<FamilyDashboard />}
          />
          <Route path="/famille/shop" element={<FamilyShopV3 />} />

          {/* Teens */}
          <Route path="/teens" element={<Pages.Teens />} />
          <Route
            path="/teens/dashboard"
            element={<TeensDashboard />}
          />
          <Route path="/teens/login" element={<Pages.TeensLogin />} />
          <Route path="/teens/home" element={<Pages.TeensHome />} />
          <Route path="/teens/shop" element={<TeensShopV3 />} />
          <Route
            path="/teens/questionnaire"
            element={<Pages.TeensQuestionnaire />}
          />
          <Route
            path="/teens/ai-evaluation"
            element={<Pages.TeensAIEvaluation />}
          />
          <Route
            path="/teens/personal-space"
            element={<Pages.TeensPersonalSpace />}
          />
          <Route
            path="/teens/intimacy-space"
            element={<Pages.TeensIntimacySpace />}
          />
          <Route
            path="/teens/family-space"
            element={<Pages.TeensFamilySpace />}
          />
          <Route
            path="/teens/parental-access"
            element={<Pages.TeensParentalAccess />}
          />
          <Route
            path="/teens/parental-access-dashboard"
            element={<Pages.TeensParentalAccessDashboard />}
          />
          <Route
            path="/teens/quick-alert"
            element={<Pages.TeensQuickAlert />}
          />
          <Route
            path="/teens/check-in"
            element={<Pages.TeensCheckIn />}
          />
          <Route
            path="/teens/calendar"
            element={<Pages.TeensCalendar />}
          />
          <Route
            path="/teens/journal"
            element={<Pages.TeensJournal />}
          />
          <Route
            path="/teens/playlist"
            element={<Pages.TeensPlaylist />}
          />
          <Route
            path="/teens/customization"
            element={<Pages.TeensCustomization />}
          />
          <Route
            path="/teens/fun-solutions"
            element={<Pages.TeensFunSolutions />}
          />
          <Route
            path="/teens/family-simulator"
            element={<Pages.FamilySimulator />}
          />

          {/* Entreprise */}
          <Route
            path="/entreprise"
            element={<Navigate to="/entreprise/home" replace />}
          />
          <Route
            path="/entreprise/home"
            element={<Pages.EntrepriseHome />}
          />
          <Route
            path="/entreprise/shop"
            element={<EnterpriseShopV3 />}
          />
          <Route
            path="/entreprise/register"
            element={<Pages.EntrepriseRegister />}
          />
          <Route
            path="/entreprise/login"
            element={<Pages.EntrepriseLogin />}
          />
          <Route
            path="/entreprise/forgot-password"
            element={<Pages.EntrepriseForgotPassword />}
          />
          <Route
            path="/entreprise/reset-password"
            element={<Pages.EntrepriseResetPassword />}
          />
          <Route
            path="/entreprise/questionnaire"
            element={<Pages.EntrepriseQuestionnaire />}
          />
          <Route
            path="/entreprise/dashboard"
            element={<Pages.EntrepriseDashboard />}
          />
          <Route
            path="/entreprise/employee-dashboard"
            element={<Pages.EmployeeDashboard />}
          />
          <Route
            path="/entreprise/manager-dashboard"
            element={<Pages.ManagerDashboard />}
          />
          <Route
            path="/entreprise/hr-dashboard"
            element={<Pages.HRDashboard />}
          />
          <Route
            path="/entreprise/admin-dashboard"
            element={<Pages.AdminDashboard />}
          />
          <Route
            path="/entreprise/orders"
            element={<Pages.EntrepriseOrders />}
          />
          <Route
            path="/entreprise/unboxing"
            element={<Pages.EntrepriseUnboxing />}
          />
          <Route
            path="/entreprise/simulator"
            element={<Pages.EntrepriseSimulator />}
          />
          <Route
            path="/entreprise/admin-content"
            element={<Pages.AdminContentManager />}
          />

          {/* Authentification */}
          <Route path="/auth" element={<Pages.Auth />} />
          <Route path="/auth/login" element={<Pages.Login />} />
          <Route path="/auth/register" element={<Pages.Register />} />
          <Route
            path="/auth/forgot-password"
            element={<Pages.ForgotPassword />}
          />
          <Route
            path="/auth/reset-password"
            element={<Pages.ResetPassword />}
          />

          {/* Simulateur */}
          <Route
            path="/simulators"
            element={<Pages.SimulatorHome />}
          />
          <Route
            path="/simulator-hub"
            element={<Pages.SimulatorHub />}
          />

          {/* Divers */}
          <Route
            path="/recommandations"
            element={<Pages.Recommandations />}
          />
          <Route
            path="/historique"
            element={<Pages.Historique />}
          />
          <Route path="/profil" element={<Pages.Profil />} />

          {/* Admin panel */}
          <Route path="/admin" element={<Pages.AdminPanel />} />

          {/* Catch-all */}
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
      </Suspense>
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
