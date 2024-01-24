-- CreateTable
CREATE TABLE `CryptoPair` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `baseUnit` VARCHAR(191) NOT NULL,
    `quoteUnit` VARCHAR(191) NOT NULL,
    `low` DOUBLE NOT NULL,
    `high` DOUBLE NOT NULL,
    `last` DOUBLE NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `open` DOUBLE NOT NULL,
    `volume` DOUBLE NOT NULL,
    `sell` DOUBLE NOT NULL,
    `buy` DOUBLE NOT NULL,
    `at` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
