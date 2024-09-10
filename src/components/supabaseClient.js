import { createClient } from '@supabase/supabase-js';

const supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhld3ZxaGFva3ZjYXhlbW9nb2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzNjEwMDIsImV4cCI6MjAzODkzNzAwMn0.d9R8Yz8IT_YjcfUPyefRzhdat6RUn01u8zicDmJq8Vw"
const supabase_url = "https://hewvqhaokvcaxemogoeq.supabase.co"

export const supabase = createClient(supabase_url, supabase_key);