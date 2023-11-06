-- CreateEnum
CREATE TYPE "StatusTime" AS ENUM ('BOOKED', 'AVAILABLE');

-- AlterTable
ALTER TABLE "ScheduleTime" ADD COLUMN     "status" "StatusTime" NOT NULL DEFAULT 'AVAILABLE';
