import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vawudieichqcdvzrxhtp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhd3VkaWVpY2hxY2R2enJ4aHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNTYyNjYsImV4cCI6MjAzMjgzMjI2Nn0.r2DJ0OxJKg1bAY9OqTsCmFs4zb82axfe8S1QlhWt1UM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
