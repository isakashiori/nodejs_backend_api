-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "WorkOutMenu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "menu" TEXT NOT NULL,
    "trainer_name" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "WorkOutMenu_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
