import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Re-export schema type for use in forms
export type StashClubSignupInput = z.infer<typeof api.users.create.input>;

export function useJoinStashClub() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: StashClubSignupInput) => {
      const res = await fetch(api.users.create.path, {
        method: api.users.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // Handle specific error codes if needed, or generic error
        const errorData = await res.json().catch(() => ({}));
        
        if (res.status === 409) {
          throw new Error("This email is already registered for Stash Club.");
        }
        
        throw new Error(errorData.message || "Failed to join Stash Club. Please try again.");
      }

      return await res.json();
    },
    onSuccess: () => {
      // Toast is handled in the component for more control over UI flow
      // but we could put it here too
    },
    onError: (error: Error) => {
      toast({
        title: "Error joining Stash Club",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
