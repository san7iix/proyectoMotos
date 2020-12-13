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
  PRIMARY KEY (`idreservaBici`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruta`
--

LOCK TABLES `ruta` WRITE;
/*!40000 ALTER TABLE `ruta` DISABLE KEYS */;
INSERT INTO `ruta` VALUES (26,'Id reprehenderit f','Praesentium ullam ut','Maiores reiciendis e',11,'1979-01-02','00:58:00'),(28,'Aut rerum quis et re','Animi dolore ex eum','Sed dignissimos dolo',4,'2013-11-10','19:11:00'),(29,'Distinctio Quidem n','Excepturi Nam qui so','Voluptatibus nihil e',5,'1986-09-01','04:05:00');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipobicicleta`
--

LOCK TABLES `tipobicicleta` WRITE;
/*!40000 ALTER TABLE `tipobicicleta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipobicicleta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `identificacion` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` int DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `rol` int DEFAULT '0',
  PRIMARY KEY (`identificacion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (2,'Jose','De La Valle','demo@user.com','$2a$10$jVLLrNjWm3SuNJeX5gEWQeIoYnr5fv3XZUkyM9RaLWcT3Tl/elpAS','Calle 44B ',12324,NULL,0),(3,'Admi','Nistrador','admin1@user.com','$2a$10$4F0eBTH0.NlVadyCQiw9euNKPv3uhsS8bbu67/cCiC/7qM2L1seYW','Calle 44B ',12324,NULL,1);
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

-- Dump completed on 2020-12-13 10:24:47
