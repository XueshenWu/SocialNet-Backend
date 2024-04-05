-- CreateEnum
CREATE TYPE "Role" AS ENUM ('COMMON', 'ADMIN', 'DISABLED');

-- CreateEnum
CREATE TYPE "Interest" AS ENUM ('SPORT', 'MUSIC', 'MOVIE', 'TRAVEL', 'FOOD', 'GAME', 'TECH', 'ART', 'SCIENCE', 'LITERATURE', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "fullname" TEXT,
    "avatar" TEXT,
    "bio" TEXT,
    "interests" "Interest"[],
    "tags" TEXT[],
    "location" TEXT,
    "external_link" TEXT,
    "gender" TEXT,
    "birthday" TIMESTAMP(3),
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Friend" (
    "id_from" TEXT NOT NULL,
    "id_to" TEXT NOT NULL,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("id_from","id_to")
);

-- CreateTable
CREATE TABLE "Follow" (
    "id_from" TEXT NOT NULL,
    "id_to" TEXT NOT NULL,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id_from","id_to")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Friend_id_from_id_to_key" ON "Friend"("id_from", "id_to");

-- CreateIndex
CREATE UNIQUE INDEX "Follow_id_from_id_to_key" ON "Follow"("id_from", "id_to");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_id_from_fkey" FOREIGN KEY ("id_from") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_id_to_fkey" FOREIGN KEY ("id_to") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_id_from_fkey" FOREIGN KEY ("id_from") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_id_to_fkey" FOREIGN KEY ("id_to") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
