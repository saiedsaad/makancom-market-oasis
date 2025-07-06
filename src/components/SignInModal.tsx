import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInModal = ({ open, onOpenChange }: SignInModalProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("You are now signed in!");
    } catch (err: any) {
      toast.error(err.message || "Failed to sign in");
    }
  };

  const handleSignUp = async () => {
    if (!validate()) return;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("You are now signed in!");
    } catch (err: any) {
      toast.error(err.message || "Failed to sign up");
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="space-y-4">
        <DialogHeader>
          <DialogTitle>{t('header.signIn')}</DialogTitle>
        </DialogHeader>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {emailError && <p className="text-sm text-red-500">{emailError}</p>}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
        <Button className="w-full" onClick={handleSignIn}>Sign In</Button>
        <Button variant="secondary" className="w-full" onClick={handleGoogleSignIn}>
          Sign in with Google
        </Button>
        <Button variant="link" className="w-full" onClick={handleSignUp}>
          Sign Up
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
