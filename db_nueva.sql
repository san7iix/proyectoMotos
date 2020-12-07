CREATE DATABASE  IF NOT EXISTS `bikedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bikedb`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: bikedb
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `idadministradores` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`idadministradores`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bicicleta`
--

DROP TABLE IF EXISTS `bicicleta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bicicleta` (
  `idbicicleta` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(45) NOT NULL,
  `talla` varchar(1) NOT NULL,
  `peso` int NOT NULL,
  `precio` double NOT NULL,
  `marca` varchar(45) NOT NULL,
  `descripcion` text NOT NULL,
  `tamRueda` float NOT NULL,
  `tipo_bicicleta` int NOT NULL,
  `estado` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`idbicicleta`),
  KEY `fk_bicicleta_tipoBicicleta_idx` (`tipo_bicicleta`),
  CONSTRAINT `fk_bicicleta_tipoBicicleta` FOREIGN KEY (`tipo_bicicleta`) REFERENCES `tipobicicleta` (`idtipoBicicleta`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bicicleta`
--

LOCK TABLES `bicicleta` WRITE;
/*!40000 ALTER TABLE `bicicleta` DISABLE KEYS */;
INSERT INTO `bicicleta` VALUES (11,'2010','S',10,10000,'patico','Esto es una descripcion random de la bicicleta en cuestión',10,2,0),(12,'2012','S',10,10000,'patico','Esto es una descripcion random de la bicicleta en cuestión',10,2,0),(13,'2012','S',10,10000,'patico','Esto es una descripcion random de la bicicleta en cuestión',10,2,0),(14,'2012','S',10,10000,'patico','Esto es una descripcion random de la bicicleta en cuestión',10,2,0);
/*!40000 ALTER TABLE `bicicleta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenesbicicleta`
--

DROP TABLE IF EXISTS `imagenesbicicleta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenesbicicleta` (
  `idimagenesBicicleta` int NOT NULL AUTO_INCREMENT,
  `rutaImagen` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `bicicleta_idbicicleta` int NOT NULL,
  PRIMARY KEY (`idimagenesBicicleta`),
  KEY `fk_imagenesbicicleta_bicicleta1_idx` (`bicicleta_idbicicleta`),
  CONSTRAINT `fk_imagenesbicicleta_bicicleta1` FOREIGN KEY (`bicicleta_idbicicleta`) REFERENCES `bicicleta` (`idbicicleta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenesbicicleta`
--

LOCK TABLES `imagenesbicicleta` WRITE;
/*!40000 ALTER TABLE `imagenesbicicleta` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenesbicicleta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservabici`
--

DROP TABLE IF EXISTS `reservabici`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservabici` (
  `idreservaBici` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL DEFAULT (curdate()),
  `horasContratadas` int NOT NULL,
  `horaEntrega` time NOT NULL DEFAULT (curtime()),
  `horaDevolucion` time DEFAULT NULL,
  `estado` varchar(1) NOT NULL DEFAULT 'A',
  `idbicicleta` int NOT NULL,
  `usuario_identificacion` int NOT NULL,
  PRIMARY KEY (`idreservaBici`),
  KEY `fk_reservaBici_bicicleta1_idx` (`idbicicleta`),
  KEY `fk_reservaBici_usuario1_idx` (`usuario_identificacion`),
  CONSTRAINT `fk_reservaBici_bicicleta1` FOREIGN KEY (`idbicicleta`) REFERENCES `bicicleta` (`idbicicleta`),
  CONSTRAINT `fk_reservaBici_usuario1` FOREIGN KEY (`usuario_identificacion`) REFERENCES `usuario` (`identificacion`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservabici`
--

LOCK TABLES `reservabici` WRITE;
/*!40000 ALTER TABLE `reservabici` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservabici` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruta`
--

DROP TABLE IF EXISTS `ruta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ruta` (
  `idruta` int NOT NULL AUTO_INCREMENT,
  `origen` varchar(255) NOT NULL,
  `destino` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `tiempoEstimado` int NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  PRIMARY KEY (`idruta`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruta`
--

LOCK TABLES `ruta` WRITE;
/*!40000 ALTER TABLE `ruta` DISABLE KEYS */;
INSERT INTO `ruta` VALUES (5,'Ziruma','La playa','Lorem ipsum',10,'2020-04-12','15:19:00'),(6,'Ziruma2','La playa2','is simply dummy text of the printing and typesetting industry.',10,'2020-04-12','15:19:00');
/*!40000 ALTER TABLE `ruta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipobicicleta`
--

DROP TABLE IF EXISTS `tipobicicleta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipobicicleta` (
  `idtipoBicicleta` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` text NOT NULL,
  PRIMARY KEY (`idtipoBicicleta`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipobicicleta`
--

LOCK TABLES `tipobicicleta` WRITE;
/*!40000 ALTER TABLE `tipobicicleta` DISABLE KEYS */;
INSERT INTO `tipobicicleta` VALUES (2,'Tipo1','Este es un tipo random de bicicleta');
/*!40000 ALTER TABLE `tipobicicleta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `identificacion` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` int DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`identificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (2,'Jose','De la Valle','demo@user.com','$2a$10$WdFRm62v3F79bO3ewoFB5OaNqDhSu.Xp.EYriII/0I5dlapqZUGjO','Calle 44B ',12324,'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-07  8:37:52
