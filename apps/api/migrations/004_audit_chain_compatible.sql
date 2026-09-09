-- Compatibilidad con versiones anteriores
ALTER TABLE audit_events ALTER COLUMN previous_hash DROP NOT NULL;
