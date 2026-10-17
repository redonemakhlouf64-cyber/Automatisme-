CREATE TABLE "automation_rules" (
	"id" text PRIMARY KEY NOT NULL,
	"workspace_id" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"enabled" boolean DEFAULT false NOT NULL,
	"trigger" text NOT NULL,
	"actions" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "media" (
	"id" text PRIMARY KEY NOT NULL,
	"workspace_id" text NOT NULL,
	"filename" text NOT NULL,
	"type" text NOT NULL,
	"mime_type" text,
	"size" integer,
	"url" text,
	"thumbnail_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "post_targets" (
	"id" text PRIMARY KEY NOT NULL,
	"post_id" text NOT NULL,
	"account_id" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"remote_id" text,
	"error" text
);
--> statement-breakpoint
CREATE TABLE "posts" (
	"id" text PRIMARY KEY NOT NULL,
	"workspace_id" text NOT NULL,
	"media_id" text,
	"caption" text,
	"hashtags" text,
	"first_comment" text,
	"status" text DEFAULT 'draft' NOT NULL,
	"scheduled_at" timestamp,
	"published_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "queue_jobs" (
	"id" text PRIMARY KEY NOT NULL,
	"type" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"payload" text NOT NULL,
	"attempts" integer DEFAULT 0 NOT NULL,
	"run_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "social_accounts" (
	"id" text PRIMARY KEY NOT NULL,
	"workspace_id" text NOT NULL,
	"platform" text NOT NULL,
	"name" text NOT NULL,
	"platform_id" text,
	"status" text DEFAULT 'disconnected' NOT NULL,
	"access_token_encrypted" text,
	"refresh_token_encrypted" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "workspaces" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
