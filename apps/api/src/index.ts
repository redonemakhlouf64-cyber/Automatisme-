import express from "express";
import cors from "cors";
import crypto from "node:crypto";

const app = express();
const PORT = Number(process.env.API_PORT || 4000);

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "nyx-api",
    version: "0.1.0",
    time: new Date().toISOString(),
  });
});

app.get("/api", (_req, res) => {
  res.json({
    name: "Nyx Social Automation API",
    status: "online",
    version: "0.1.0",
  });
});

app.get("/api/accounts", (_req, res) => {
  res.json({
    accounts: [],
    total: 0,
  });
});

app.post("/api/accounts", (req, res) => {
  const { platform, name } = req.body;

  if (!platform || !name) {
    return res.status(400).json({
      error: "platform and name are required",
    });
  }

  const account = {
    id: crypto.randomUUID(),
    platform,
    name,
    status: "pending_connection",
    createdAt: new Date().toISOString(),
  };

  res.status(201).json(account);
});

app.get("/api/posts", (_req, res) => {
  res.json({
    posts: [],
    total: 0,
  });
});

app.get("/api/automations", (_req, res) => {
  res.json({
    automations: [],
    total: 0,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Nyx API running on http://127.0.0.1:${PORT}`);
});
