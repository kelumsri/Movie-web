/*
  Warnings:

  - You are about to drop the column `cast_members` on the `Film` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Film` table. All the data in the column will be lost.
  - You are about to drop the column `director_name` on the `Film` table. All the data in the column will be lost.
  - You are about to drop the column `film_name` on the `Film` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Film` table. All the data in the column will be lost.
  - You are about to drop the column `summery` on the `Film` table. All the data in the column will be lost.
  - Added the required column `name` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Film` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Film" ("id") SELECT "id" FROM "Film";
DROP TABLE "Film";
ALTER TABLE "new_Film" RENAME TO "Film";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
