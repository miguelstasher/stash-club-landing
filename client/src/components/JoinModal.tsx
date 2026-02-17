import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import { useJoinStashClub, type StashClubSignupInput } from "@/hooks/use-stash-club";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, Lock } from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JoinModal({ isOpen, onOpenChange }: JoinModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const joinMutation = useJoinStashClub();
  
  const form = useForm<StashClubSignupInput>({
    resolver: zodResolver(api.users.create.input),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: StashClubSignupInput) => {
    joinMutation.mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
        form.reset();
      },
    });
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset state after a short delay so animation finishes
    setTimeout(() => {
      setIsSuccess(false);
      form.reset();
      joinMutation.reset();
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-3xl border-0 shadow-2xl p-0 overflow-hidden">
        {isSuccess ? (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-blue-50 to-white">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2 animate-in zoom-in duration-300">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-[#101828]">Welcome to the Club!</DialogTitle>
            <DialogDescription className="text-center text-gray-600 max-w-xs">
              Your unique code has been emailed to you. You can now save 50% on all your luggage storage.
            </DialogDescription>
            <Button 
              className="mt-6 w-full btn-brand"
              onClick={handleClose}
            >
              Done
            </Button>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="bg-[#026FE3] p-6 text-white text-center">
              <DialogTitle className="text-2xl font-bold text-white mb-2">Join Stash Club</DialogTitle>
              <DialogDescription className="text-blue-100">
                Unlock 50% off all bookings for just £1.99/year
              </DialogDescription>
            </div>
            
            <div className="p-6 pt-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">
                    Email address
                  </label>
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                    {...form.register("email")}
                    className="h-12 rounded-xl border-gray-200 focus:border-[#026FE3] focus:ring-[#026FE3]/20"
                    disabled={joinMutation.isPending}
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-500 ml-1">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base btn-brand mt-4"
                  disabled={joinMutation.isPending}
                >
                  {joinMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Pay £1.99 & Join"
                  )}
                </Button>

                <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" /> Secure payment. Cancel anytime.
                </p>
                
                {joinMutation.isError && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
                    {joinMutation.error?.message || "Something went wrong. Please try again."}
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
