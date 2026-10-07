# Running this project on Replit

- Start the development server with `npm run dev -- --host 0.0.0.0 --port 5000`.
- Build for production with `npm run build`.
- The public portfolio can render its bundled mock content when Supabase is not configured. Supabase-backed content and admin features need the project's Supabase environment variables.
- Apply pending SQL files in `supabase/migrations/` to the connected Supabase project before relying on newly added database or storage setup.
