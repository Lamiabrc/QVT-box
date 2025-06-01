
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/teens" element={<Teens />} />
          <Route path="/entreprise/dashboard" element={<EntrepriseDashboard />} />
          <Route path="/entreprise/questionnaire" element={<EntrepriseQuestionnaire />} />
          <Route path="/teens/questionnaire" element={<TeensQuestionnaire />} />
          <Route path="/teens/dashboard-parent" element={<TeensDashboardParent />} />
          <Route path="/teens/family-space" element={<TeensFamilySpace />} />
          <Route path="/teens/personal-space" element={<TeensPersonalSpace />} />
          <Route path="/teens/check-in" element={<TeensCheckIn />} />
          <Route path="/teens/quick-alert" element={<TeensQuickAlert />} />
          <Route path="/teens/parental-access" element={<TeensParentalAccess />} />
          <Route path="/recommandations" element={<Recommandations />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/profil" element={<Profil />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
