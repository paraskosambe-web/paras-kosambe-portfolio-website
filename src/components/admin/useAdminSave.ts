import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";

/** Refreshes admin lists and the public site content after a change. */
export function useRefreshContent() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return async () => {
    await queryClient.invalidateQueries({ queryKey: ["admin"] });
    await queryClient.invalidateQueries({ queryKey: ["portfolio-content"] });
    void router.invalidate();
  };
}
