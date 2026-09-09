CREATE TABLE IF NOT EXISTS audit_events (
  id SERIAL PRIMARY KEY,
  event_hash VARCHAR(64) NOT NULL UNIQUE,
  previous_hash VARCHAR(64),
  hmac VARCHAR(64) NOT NULL,
  ip VARCHAR(45) NOT NULL,
  payload JSONB NOT NULL,
  user_agent TEXT,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  signature VARCHAR(128)
);

CREATE INDEX idx_audit_events_previous_hash ON audit_events(previous_hash);
CREATE INDEX idx_audit_events_timestamp ON audit_events(timestamp DESC);
