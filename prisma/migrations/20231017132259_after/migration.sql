/*
  Warnings:

  - A unique constraint covering the columns `[ISBN]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Book` MODIFY `ISBN` VARCHAR(13) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Book_ISBN_key` ON `Book`(`ISBN`);
