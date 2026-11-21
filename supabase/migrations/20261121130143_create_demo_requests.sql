/*
# Create demo_requests table for the Nexlify Labs ltd contact form

1. New Tables
- `demo_requests`
  - `id` (uuid, primary key) — unique identifier for each request
  - `name` (text, not null) — visitor's full name
  - `email` (text, not null) — visitor's email address
  - `company` (text) — visitor's company name (optional)
  - `message` (text, not null) — what the visitor wants to tell us
  - `status` (text, not null, default 'new') — internal tracking status ('new', 'contacted', 'closed')
  - `created_at` (timestamp with time zone, default now) — when the request was submitted
2. Security
- Enable Row Level Security (RLS) on `demo_requests`.
- Grant INSERT to `anon` and `authenticated` only — visitors only submit new requests.
- Policy: anyone (anon or authenticated) may INSERT a new demo request. No one may read,
  update, or delete them through the public API — only the internal team can via admin access.
- Grants are column-restricted to exactly the fields the form submits, so no extra fields
  can be injected.
3. Notes
- This is a no-sign-in marketing site, so policies are scoped `TO anon, authenticated`.
- No SELECT/UPDATE/DELETE grants: submitted demo requests stay private.
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT (name, email, company, message) ON demo_requests TO anon, authenticated;

DROP POLICY IF EXISTS "Anyone can submit a demo request" ON demo_requests;
CREATE POLICY "Anyone can submit a demo request"
ON demo_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);