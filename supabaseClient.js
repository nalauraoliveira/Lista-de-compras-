// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://avskqylgeevglmnwfukz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2c2txeWxnZWV2Z2xtbndmdWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjExMjYsImV4cCI6MjA2NDEzNzEyNn0.s8LzsM_-g47IRcFiFsWLXU-sqymJT9LJDli7hxUrUmo'
)