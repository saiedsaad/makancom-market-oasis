import { useAuth } from "@/context/AuthContext";

const Account = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">My Account</h2>
        {user ? (
          <p className="text-muted-foreground">Logged in as {user.email}</p>
        ) : (
          <p className="text-muted-foreground">You are not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default Account;
