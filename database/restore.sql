-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema restore
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `restore` ;

-- -----------------------------------------------------
-- Schema restore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `restore` DEFAULT CHARACTER SET utf8 ;
USE `restore` ;

-- -----------------------------------------------------
-- Table `restore`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `restore`.`user` ;

CREATE TABLE IF NOT EXISTS `restore`.`user` (
  `userid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL UNIQUE,
  `password` VARCHAR(16) NOT NULL,
  `points` INT NULL,
  `isAdmin` TINYINT NULL,
  `email` VARCHAR(45) NOT NULL UNIQUE,
  PRIMARY KEY (`userid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restore`.`game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `restore`.`game` ;

CREATE TABLE IF NOT EXISTS `restore`.`game` (
  `idgame` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `pointLimit` INT NULL,
  PRIMARY KEY (`idgame`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restore`.`user_plays_game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `restore`.`user_plays_game` ;

CREATE TABLE IF NOT EXISTS `restore`.`user_plays_game` (
  `users_userid` INT UNSIGNED NOT NULL,
  `games_idgame` INT NOT NULL,
  `pointSave` TINYINT NULL,
  `highScore` INT NULL,
  PRIMARY KEY (`users_userid`, `games_idgame`),
  INDEX `fk_users_has_games_games1_idx` (`games_idgame` ASC) ,
  INDEX `fk_users_has_games_users_idx` (`users_userid` ASC) ,
  CONSTRAINT `fk_users_has_games_users`
    FOREIGN KEY (`users_userid`)
    REFERENCES `restore`.`user` (`userid`)
     ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_users_has_games_games1`
    FOREIGN KEY (`games_idgame`)
    REFERENCES `restore`.`game` (`idgame`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restore`.`store`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `restore`.`store` ;

CREATE TABLE IF NOT EXISTS `restore`.`store` (
  `idstore` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `store_desc` VARCHAR(45) NULL,
  PRIMARY KEY (`idstore`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restore`.`promotion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `restore`.`promotion` ;

CREATE TABLE IF NOT EXISTS `restore`.`promotion` (
  `idpromotion` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) UNIQUE NULL,
  `promo_desc` VARCHAR(65) NULL,
  `pointCost` INT NULL,
  `store_idstore` INT NOT NULL,
  `img` VARCHAR(45),
  PRIMARY KEY (`idpromotion`),
  INDEX `fk_promotion_store1_idx` (`store_idstore` ASC) ,
  CONSTRAINT `fk_promotion_store1`
    FOREIGN KEY (`store_idstore`)
    REFERENCES `restore`.`store` (`idstore`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restore`.`user_has_promotion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `restore`.`user_has_promotion` ;

CREATE TABLE IF NOT EXISTS `restore`.`user_has_promotion` (
  `user_userid` INT UNSIGNED NOT NULL,
  `promotion_idpromotion` INT NOT NULL,
  PRIMARY KEY (`user_userid`, `promotion_idpromotion`),
  INDEX `fk_user_has_promotion_promotion1_idx` (`promotion_idpromotion` ASC) ,
  INDEX `fk_user_has_promotion_user1_idx` (`user_userid` ASC) ,
  CONSTRAINT `fk_user_has_promotion_user1`
    FOREIGN KEY (`user_userid`)
    REFERENCES `restore`.`user` (`userid`)
     ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_user_has_promotion_promotion1`
    FOREIGN KEY (`promotion_idpromotion`)
    REFERENCES `restore`.`promotion` (`idpromotion`)
     ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

/*Inserts for testing*/

INSERT INTO user VALUES(null, "Alex", "1234pass", 1000, true, "alxcant@whatev.com");
INSERT INTO user VALUES(null, "Gaia", "1234pass", 300, true, "gaia@whatev.com");


INSERT INTO game VALUES(null, "Game1", 1000);
INSERT INTO game VALUES(null, "Game2", 1000);
INSERT INTO game VALUES(null, "Game3", 1000);
INSERT INTO game VALUES(null, "Game4", 1000);

/*ALEX*/
INSERT INTO user_plays_game values(1, 1, 1, 0);
INSERT INTO user_plays_game values(1, 2, 1, 0);
INSERT INTO user_plays_game values(1, 3, 0, 0);
INSERT INTO user_plays_game values(1, 4, 0, 0);

/*GAIA*/
INSERT INTO user_plays_game values(2, 1, 0, 0);
INSERT INTO user_plays_game values(2, 2, 0, 0);
INSERT INTO user_plays_game values(2, 3, 0, 0);
INSERT INTO user_plays_game values(2, 4, 0, 0);


INSERT INTO store VALUES(null, "Panes Juanito", "Panaderia del gótico");
INSERT INTO store VALUES(null, "Barna Records", "¡Nueva música disponible!");
INSERT INTO store VALUES(null, "Ca l'Antonia", "Comestibles de proximidad");
INSERT INTO store VALUES(null, "Mr. Enriquez", "¡Viste a la moda!");


INSERT INTO promotion VALUES(null, "¡PanaLocura!", "2ª barra de pan gratis", 200, 1, "/project1/media/promo_images/bakery1.jpg");
INSERT INTO promotion VALUES(null, "Navidad musical", "3x2 en CDs Navideños", 500, 2, "/project1/media/promo_images/cd3.jpg");
INSERT INTO promotion VALUES(null, "Cena fácil", "Botella de cava gratis con la compra de 2 unidades de galets", 1000, 3, "/project1/media/promo_images/groceries.jpg");
INSERT INTO promotion VALUES(null, "Locos por los CDs", "Compra 1 CD: 2ª y 3ª unidad al 50%", 600, 2, "/project1/media/promo_images/cd3.jpg");
INSERT INTO promotion VALUES(null, "CD extra", "CD gratis por una compra superior a 20€", 750, 2, "/project1/media/promo_images/cd3.jpg");
INSERT INTO promotion VALUES(null, "Dulce oferta", "4€ gratis en bolleria por una compra superior a 10€", 400, 1, "/project1/media/promo_images/bakery1.jpg");
INSERT INTO promotion VALUES(null, "Va de pan", "Cupón de bocadillo gratis a las 20 baguettes", 200, 1, "/project1/media/promo_images/bakery1.jpg");
INSERT INTO promotion VALUES(null, "Calzado variado", "2º par de zapatos al 60%", 300, 4, "/project1/media/promo_images/clothe_store.jpg");
INSERT INTO promotion VALUES(null, "Navidad Italiana", "2º Panettone al 50%", 250, 3, "/project1/media/promo_images/groceries.jpg");
INSERT INTO promotion VALUES(null, "Muito Abrigado", "2ª pieza de abrigo al 50%", 1500, 4, "/project1/media/promo_images/clothe_store.jpg");
INSERT INTO promotion VALUES(null, "¡Pies Calentitos!", "3x2 en calcetines", 150, 4, "/project1/media/promo_images/clothe_store.jpg");
INSERT INTO promotion VALUES(null, "SuperFruta", "250g de fruta gratis con la compra de 500g", 900, 3, "/project1/media/promo_images/groceries.jpg");

