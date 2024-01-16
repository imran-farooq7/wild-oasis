import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
	"https://bxdbejjcxavczeyrmpyb.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZGJlampjeGF2Y3pleXJtcHliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMzUwMjQsImV4cCI6MjAyMDkxMTAyNH0.-RDIF_SlfTB1anakx7QJBt-LvaIm6EgpAU16ZMQtFh8"
);

export default supabase;
