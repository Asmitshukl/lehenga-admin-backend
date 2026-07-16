INSERT INTO "Category" ("id", "name", "slug", "style", "description", "isFeatured", "createdAt", "updatedAt")
VALUES ('khadi-category', 'Khadi', 'khadi', 'KHADI', 'Handcrafted Khadi lehengas', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT ("slug") DO NOTHING;

ALTER TABLE "Lehenga" ADD COLUMN "isLatest" BOOLEAN NOT NULL DEFAULT false;
CREATE INDEX "Lehenga_isLatest_idx" ON "Lehenga"("isLatest");
