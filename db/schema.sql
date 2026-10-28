CREATE TABLE IF NOT EXISTS leaderboard (
  id          SERIAL PRIMARY KEY,
  subject     TEXT        NOT NULL,
  name        TEXT        NOT NULL,
  correct     INTEGER     NOT NULL,
  total       INTEGER     NOT NULL,
  duration_ms INTEGER     NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS leaderboard_rank_idx
  ON leaderboard (subject, correct DESC, duration_ms ASC);
