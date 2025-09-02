import { cityRouter } from "./routers/city";
import { router } from "./trpc";

export const appRouter = router({
  city: cityRouter,
});

export type AppRouter = typeof appRouter;
