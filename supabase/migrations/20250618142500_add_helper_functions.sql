
-- Create helper functions for teen questionnaire
CREATE OR REPLACE FUNCTION public.custom_query(query_text TEXT)
RETURNS TABLE(responses JSONB)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY EXECUTE query_text;
END;
$$;

CREATE OR REPLACE FUNCTION public.custom_insert(table_name TEXT, data JSONB)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  columns TEXT;
  values_text TEXT;
  key TEXT;
  value JSONB;
BEGIN
  columns := '';
  values_text := '';
  
  FOR key, value IN SELECT * FROM jsonb_each(data)
  LOOP
    IF columns != '' THEN
      columns := columns || ', ';
      values_text := values_text || ', ';
    END IF;
    
    columns := columns || quote_ident(key);
    values_text := values_text || quote_literal(value #>> '{}');
  END LOOP;
  
  EXECUTE format('INSERT INTO %I (%s) VALUES (%s)', table_name, columns, values_text);
END;
$$;
