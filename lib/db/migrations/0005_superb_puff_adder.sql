CREATE TABLE IF NOT EXISTS "Coach" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp NOT NULL,
	"name" text NOT NULL,
	"prompt" text NOT NULL,
	"visibility" varchar DEFAULT 'public' NOT NULL
);
