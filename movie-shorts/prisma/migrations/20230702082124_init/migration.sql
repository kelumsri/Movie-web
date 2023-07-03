/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "film_name" TEXT NOT NULL,
    "director_name" TEXT,
    "category" TEXT,
    "cast_members" TEXT,
    "summery" TEXT,
    "image" TEXT
);
