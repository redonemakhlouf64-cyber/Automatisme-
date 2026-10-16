import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
} from "drizzle-orm/pg-core";

export const workspaces = pgTable("workspaces", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const socialAccounts = pgTable("social_accounts", {
  id: text("id").primaryKey(),
  workspaceId: text("workspace_id").notNull(),
  platform: text("platform").notNull(),
  name: text("name").notNull(),
  platformId: text("platform_id"),
  status: text("status").default("disconnected").notNull(),
  accessTokenEncrypted: text("access_token_encrypted"),
  refreshTokenEncrypted: text("refresh_token_encrypted"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const media = pgTable("media", {
  id: text("id").primaryKey(),
  workspaceId: text("workspace_id").notNull(),
  filename: text("filename").notNull(),
  type: text("type").notNull(),
  mimeType: text("mime_type"),
  size: integer("size"),
  url: text("url"),
  thumbnailUrl: text("thumbnail_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const posts = pgTable("posts", {
  id: text("id").primaryKey(),
  workspaceId: text("workspace_id").notNull(),
  mediaId: text("media_id"),
  caption: text("caption"),
  hashtags: text("hashtags"),
  firstComment: text("first_comment"),
  status: text("status").default("draft").notNull(),
  scheduledAt: timestamp("scheduled_at"),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const postTargets = pgTable("post_targets", {
  id: text("id").primaryKey(),
  postId: text("post_id").notNull(),
  accountId: text("account_id").notNull(),
  status: text("status").default("pending").notNull(),
  remoteId: text("remote_id"),
  error: text("error"),
});

export const automationRules = pgTable("automation_rules", {
  id: text("id").primaryKey(),
  workspaceId: text("workspace_id").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  enabled: boolean("enabled").default(false).notNull(),
  trigger: text("trigger").notNull(),
  actions: text("actions").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const queueJobs = pgTable("queue_jobs", {
  id: text("id").primaryKey(),
  type: text("type").notNull(),
  status: text("status").default("pending").notNull(),
  payload: text("payload").notNull(),
  attempts: integer("attempts").default(0).notNull(),
  runAt: timestamp("run_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
