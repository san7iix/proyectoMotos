-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bikedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bikedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bikedb` DEFAULT CHARACTER SET utf8 ;
USE `bikedb` ;

-- -----------------------------------------------------
-- Table `bikedb`.`tipoBicicleta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bikedb`.`tipoBicicleta` (
  `idtipoBicicleta` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `tipoBicicletacol` VARCHAR(45) NULL,
  PRIMARY KEY (`idtipoBicicleta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bikedb`.`imagenesBicicleta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bikedb`.`imagenesBicicleta` (
  `idimagenesBicicleta` INT NOT NULL AUTO_INCREMENT,
  `rutaImagen` VARCHAR(255) NULL,
  `descripcion` TEXT NULL,
  PRIMARY KEY (`idimagenesBicicleta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bikedb`.`bicicleta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bikedb`.`bicicleta` (
  `idbicicleta` INT NOT NULL AUTO_INCREMENT,
  `modelo` VARCHAR(45) NOT NULL,
  `talla` VARCHAR(1) NOT NULL,
  `peso` INT NOT NULL,
  `precio` DOUBLE NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `tamRueda` FLOAT NOT NULL,
  `bicicletacol` VARCHAR(45) NOT NULL,
  `tipo_bicicleta` INT NOT NULL,
  `imagen` INT NOT NULL,
  PRIMARY KEY (`idbicicleta`),
  INDEX `fk_bicicleta_tipoBicicleta_idx` (`tipo_bicicleta` ASC) VISIBLE,
  INDEX `fk_bicicleta_imagenesBicicleta1_idx` (`imagen` ASC) VISIBLE,
  CONSTRAINT `fk_bicicleta_tipoBicicleta`
    FOREIGN KEY (`tipo_bicicleta`)
    REFERENCES `bikedb`.`tipoBicicleta` (`idtipoBicicleta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bicicleta_imagenesBicicleta1`
    FOREIGN KEY (`imagen`)
    REFERENCES `bikedb`.`imagenesBicicleta` (`idimagenesBicicleta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bikedb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bikedb`.`usuario` (
  `identificacion` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `direccion` VARCHAR(255) NOT NULL,
  `telefono` INT NULL,
  `imagen` VARCHAR(255) NULL,
  PRIMARY KEY (`identificacion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bikedb`.`reservaBici`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bikedb`.`reservaBici` (
  `idreservaBici` INT NOT NULL,
  `idBicicleta` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `horasContratadas` INT NOT NULL,
  `horaEntrega` TIME NOT NULL,
  `horaDevolucion` TIME NOT NULL,
  `estado` VARCHAR(1) NOT NULL,
  `bicicleta_idbicicleta` INT NOT NULL,
  `usuario_identificacion` INT NOT NULL,
  PRIMARY KEY (`idreservaBici`),
  INDEX `fk_reservaBici_bicicleta1_idx` (`bicicleta_idbicicleta` ASC) VISIBLE,
  INDEX `fk_reservaBici_usuario1_idx` (`usuario_identificacion` ASC) VISIBLE,
  CONSTRAINT `fk_reservaBici_bicicleta1`
    FOREIGN KEY (`bicicleta_idbicicleta`)
    REFERENCES `bikedb`.`bicicleta` (`idbicicleta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reservaBici_usuario1`
    FOREIGN KEY (`usuario_identificacion`)
    REFERENCES `bikedb`.`usuario` (`identificacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bikedb`.`ruta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bikedb`.`ruta` (
  `idruta` INT NOT NULL AUTO_INCREMENT,
  `origen` VARCHAR(255) NOT NULL,
  `destino` VARCHAR(255) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `tiempoEstimado` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `usuario_identificacion` INT NOT NULL,
  PRIMARY KEY (`idruta`),
  INDEX `fk_ruta_usuario1_idx` (`usuario_identificacion` ASC) VISIBLE,
  CONSTRAINT `fk_ruta_usuario1`
    FOREIGN KEY (`usuario_identificacion`)
    REFERENCES `bikedb`.`usuario` (`identificacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
