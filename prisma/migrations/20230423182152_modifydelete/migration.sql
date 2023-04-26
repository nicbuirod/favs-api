-- CreateTable
CREATE TABLE `favs` (
    `idfavs` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NULL,
    `description` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `idlist` INTEGER NOT NULL,

    INDEX `fk_favs_list1_idx`(`idlist`),
    PRIMARY KEY (`idfavs`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `list` (
    `idlist` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `iduser` INTEGER NOT NULL,

    INDEX `fk_list_user_idx`(`iduser`),
    PRIMARY KEY (`idlist`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `iduser` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `iduser_UNIQUE`(`iduser`),
    PRIMARY KEY (`iduser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `favs` ADD CONSTRAINT `fk_favs_list1` FOREIGN KEY (`idlist`) REFERENCES `list`(`idlist`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `list` ADD CONSTRAINT `fk_list_user` FOREIGN KEY (`iduser`) REFERENCES `user`(`iduser`) ON DELETE CASCADE ON UPDATE NO ACTION;
