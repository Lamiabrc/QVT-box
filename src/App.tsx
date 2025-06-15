
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Main pages
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Profil from "./pages/Profil";
import Historique from "./pages/Historique";
import Recommandations from "./pages/Recommandations";
import Contact from "./pages/Contact";
import QuiSommesNous from "./pages/QuiSommesNous";
import NosValeurs from "./pages/NosValeurs";
import NotFound from "./pages/NotFound";
import Teens from "./pages/Teens";

// Teens pages
import TeensHome from "./pages/teens/TeensHome";
import TeensQuestionnaire from "./pages/TeensQuestionnaire";
import TeensPersonalSpace from "./pages/TeensPersonalSpace";
import TeensJournal from "./pages/TeensJournal";
import TeensCheckIn from "./pages/TeensCheckIn";
import TeensCalendar from "./pages/TeensCalendar";
import TeensFamilySpace from "./pages/TeensFamilySpace";
import TeensParentalAccess from "./pages/TeensParentalAccess";
import TeensParentalAccessDashboard from "./pages/TeensParentalAccessDashboard";
import TeensDashboardParent from "./pages/TeensDashboardParent";
import TeensCustomization from "./pages/TeensCustomization";
import TeensMetaverse from "./pages/TeensMetaverse";
import TeensPlaylist from "./pages/TeensPlaylist";
import TeensShop from "./pages/TeensShop";
import TeensIntimacySpace from "./pages/TeensIntimacySpace";
import TeensFunSolutions from "./pages/TeensFunSolutions";
import TeensQuickAlert from "./pages/TeensQuickAlert";
import TeensAIEvaluation from "./pages/TeensAIEvaluation";

// Enterprise pages
import EntrepriseHome from "./pages/entreprise/EntrepriseHome";
import Login from "./pages/entreprise/Login";
import Register from "./pages/entreprise/Register";
import ForgotPassword from "./pages/entreprise/ForgotPassword";
import ResetPassword from "./pages/entreprise/ResetPassword";
import Dashboard from "./pages/entreprise/Dashboard";
import EmployeeDashboard from "./pages/entreprise/EmployeeDashboard";
import ManagerDashboard from "./pages/entreprise/ManagerDashboard";
import HRDashboard from "./pages/entreprise/HRDashboard";
import AdminDashboard from "./pages/entreprise/AdminDashboard";
import Shop from "./pages/entreprise/Shop";
import Orders from "./pages/entreprise/Orders";
import Unboxing from "./pages/entreprise/Unboxing";
import Simulator from "./pages/entreprise/Simulator";
import AdminContentManager from "./pages/entreprise/AdminContentManager";

// Teens auth pages
import TeensLogin from "./pages/teens/Login";
import TeensRegister from "./pages/teens/Register";

// Auth pages
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AuthForgotPassword from "./pages/auth/ForgotPassword";

// New pages
import AdminPanel from "./pages/AdminPanel";
import FamilySimulator from "./pages/teens/FamilySimulator";
import SimulatorHub from "./pages/simulator/SimulatorHub";
import AdminDashboardMain from "./pages/admin/AdminDashboard";
import FamilyRegister from "./pages/famille/Register";
import ZenGarden from "./pages/teens/metaverse/ZenGarden";
import CreativityStudio from "./pages/teens/metaverse/CreativityStudio";
import AdventureIsland from "./pages/teens/metaverse/AdventureIsland";
import SafeTalkCircle from "./pages/teens/metaverse/SafeTalkCircle";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/login" element={<AuthLogin />} />
            <Route path="/auth/register" element={<AuthRegister />} />
            <Route path="/auth/forgot-password" element={<AuthForgotPassword />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/historique" element={<Historique />} />
            <Route path="/recommandations" element={<Recommandations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/nos-valeurs" element={<NosValeurs />} />
            
            {/* Admin routes */}
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/dashboard" element={<AdminDashboardMain />} />
            
            {/* Simulator Hub */}
            <Route path="/simulators" element={<SimulatorHub />} />

            {/* Enterprise routes */}
            <Route path="/entreprise" element={<EntrepriseHome />} />
            <Route path="/entreprise/login" element={<Login />} />
            <Route path="/entreprise/register" element={<Register />} />
            <Route path="/entreprise/forgot-password" element={<ForgotPassword />} />
            <Route path="/entreprise/reset-password" element={<ResetPassword />} />
            <Route path="/entreprise/dashboard" element={<Dashboard />} />
            <Route path="/entreprise/employee" element={<EmployeeDashboard />} />
            <Route path="/entreprise/manager" element={<ManagerDashboard />} />
            <Route path="/entreprise/hr" element={<HRDashboard />} />
            <Route path="/entreprise/admin" element={<AdminDashboard />} />
            <Route path="/entreprise/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/entreprise/admin-content" element={<AdminContentManager />} />
            <Route path="/entreprise/shop" element={<Shop />} />
            <Route path="/entreprise/orders" element={<Orders />} />
            <Route path="/entreprise/unboxing" element={<Unboxing />} />
            <Route path="/entreprise/simulator" element={<Simulator />} />

            {/* Teens routes */}
            <Route path="/teens" element={<Teens />} />
            <Route path="/teens/login" element={<TeensLogin />} />
            <Route path="/teens/register" element={<TeensRegister />} />
            <Route path="/teens/questionnaire" element={<TeensQuestionnaire />} />
            <Route path="/teens/personal-space" element={<TeensPersonalSpace />} />
            <Route path="/teens/journal" element={<TeensJournal />} />
            <Route path="/teens/checkin" element={<TeensCheckIn />} />
            <Route path="/teens/calendar" element={<TeensCalendar />} />
            <Route path="/teens/family-space" element={<TeensFamilySpace />} />
            <Route path="/teens/parental-access" element={<TeensParentalAccess />} />
            <Route path="/teens/parental-dashboard" element={<TeensParentalAccessDashboard />} />
            <Route path="/teens/parent-dashboard" element={<TeensDashboardParent />} />
            <Route path="/teens/customization" element={<TeensCustomization />} />
            <Route path="/teens/metaverse" element={<TeensMetaverse />} />
            <Route path="/teens/metaverse/zen-garden" element={<ZenGarden />} />
            <Route path="/teens/metaverse/creativity-studio" element={<CreativityStudio />} />
            <Route path="/teens/metaverse/adventure-island" element={<AdventureIsland />} />
            <Route path="/teens/metaverse/safe-talk" element={<SafeTalkCircle />} />
            <Route path="/teens/playlist" element={<TeensPlaylist />} />
            <Route path="/teens/shop" element={<TeensShop />} />
            <Route path="/teens/intimacy-space" element={<TeensIntimacySpace />} />
            <Route path="/teens/fun-solutions" element={<TeensFunSolutions />} />
            <Route path="/teens/quick-alert" element={<TeensQuickAlert />} />
            <Route path="/teens/ai-evaluation" element={<TeensAIEvaluation />} />

            {/* Family routes */}
            <Route path="/famille" element={<Navigate to="/teens" replace />} />
            <Route path="/famille/simulator" element={<FamilySimulator />} />
            <Route path="/famille/register" element={<FamilyRegister />} />

            {/* Legacy redirects */}
            <Route path="/entreprise-dashboard" element={<Navigate to="/entreprise/dashboard" replace />} />
            <Route path="/questionnaire" element={<Navigate to="/teens/questionnaire" replace />} />
            
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
