
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, RefreshCw } from "lucide-react";
import { useSecureAuth } from "@/hooks/useSecureAuth";
import { useAuthOperations } from "@/hooks/useAuthOperations";

const UserNavigation = () => {
  const navigate = useNavigate();
  const { user } = useSecureAuth();
  const { signOutUser } = useAuthOperations();

  const handleSignOut = async () => {
    await signOutUser();
    navigate('/');
  };

  const handleChangeUniverse = () => {
    // Propose à l'utilisateur de changer d'univers
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        onClick={handleChangeUniverse}
        className="flex items-center space-x-2"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Changer d'univers</span>
      </Button>
      <Button
        variant="outline"
        onClick={handleSignOut}
        className="flex items-center space-x-2"
      >
        <LogOut className="w-4 h-4" />
        <span>Se déconnecter</span>
      </Button>
    </div>
  );
};

export default UserNavigation;
