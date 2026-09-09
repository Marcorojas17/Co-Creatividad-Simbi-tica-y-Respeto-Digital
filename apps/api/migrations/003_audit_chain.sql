ALTER TABLE audit_events ADD COLUMN batch_id UUID;
ALTER TABLE audit_events ADD COLUMN batch_signature VARCHAR(128);
CREATE INDEX idx_audit_events_batch_id ON audit_events(batch_id);
