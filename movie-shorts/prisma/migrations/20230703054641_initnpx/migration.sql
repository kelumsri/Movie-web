/*
  Warnings:

  - Added the required column `Castmember` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `director` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Film` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "Castmember" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Film" ("date", "id", "name", "summary") SELECT "date", "id", "name", "summary" FROM "Film";
DROP TABLE "Film";
ALTER TABLE "new_Film" RENAME TO "Film";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
