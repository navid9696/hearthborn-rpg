import 'dotenv/config';

// The current backend does not use the experimental Prisma contract runtime yet.
// Keep this as a lightweight no-op so Nest can boot without the generated contract artifacts.
export const db = {
  async query() {
    return [];
  },
  async $connect() {
    return undefined;
  },
  async $disconnect() {
    return undefined;
  },
};
