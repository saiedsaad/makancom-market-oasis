import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Please enter a password.");
      valid = false;
    }

    return valid;
  };

  const handleSignIn = async () => {
    if (!validate()) return;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("You are now signed in!");
      navigate("/account");
    } catch (err: any) {
      const message =
        err?.code === "auth/user-not-found" || err?.code === "auth/wrong-password"
          ? "Invalid email or password"
          : err.message || "Failed to sign in";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!");
    } catch (err: any) {
      toast.error(err.message || "Google sign in failed");
    }
  };

  const handleSignUp = async () => {
    if (!validate()) return;
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Successfully registered");
      navigate("/account");
    } catch (err: any) {
      const message =
        err?.code === "auth/email-already-in-use"
          ? "Email already exists"
          : err.message || "Failed to sign up";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-makancom-green to-makancom-dark-green">
      <Card className="w-full max-w-md shadow-xl animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-accent flex flex-col items-center">
            Makancom <span className="text-2xl">⭐⭐⭐</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="text-sm text-red-500">{emailError}</p>
          )}
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className="text-sm text-red-500">{passwordError}</p>
          )}
          <Button className="w-full" onClick={handleSignIn} disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </Button>
          <Button variant="secondary" className="w-full" onClick={handleGoogleSignIn} disabled={loading}>
            Sign in with Google
          </Button>
          <Button variant="link" className="w-full text-center" onClick={handleSignUp} disabled={loading}>
            Sign up
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
