-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: docility
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `log_trail`
--

DROP TABLE IF EXISTS `log_trail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log_trail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ip` varchar(45) DEFAULT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  `device` varchar(45) DEFAULT NULL,
  `action` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `createdAt` varchar(45) DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_trail`
--

LOCK TABLES `log_trail` WRITE;
/*!40000 ALTER TABLE `log_trail` DISABLE KEYS */;
INSERT INTO `log_trail` VALUES (1,'localhost','53','WEb','Login','Login','successfully logged in','2023-12-30 22:08:30','2023-12-30 22:08:30'),(2,'localhost','53','WEb','Login','Login','successfully logged in','2023-12-30 22:10:05','2023-12-30 22:10:05'),(3,'::1','53','WEb','Login','Login','successfully logged in','2023-12-30 22:10:38','2023-12-30 22:10:38'),(4,'::1','53','WEb','Login','Login','successfully logged in','2023-12-30 22:11:00','2023-12-30 22:11:00'),(5,'::1','53','WEb','Login','Login','successfully logged in','2023-12-30 22:12:36','2023-12-30 22:12:36'),(6,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:20:10','2023-12-31 00:20:10'),(7,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:31:07','2023-12-31 00:31:07'),(8,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:31:45','2023-12-31 00:31:45'),(9,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:33:24','2023-12-31 00:33:24'),(10,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:33:31','2023-12-31 00:33:31'),(11,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:35:29','2023-12-31 00:35:29'),(12,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:36:11','2023-12-31 00:36:11'),(13,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:38:25','2023-12-31 00:38:25'),(14,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:45:36','2023-12-31 00:45:36'),(15,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:46:14','2023-12-31 00:46:14'),(16,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:46:23','2023-12-31 00:46:23'),(17,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:47:24','2023-12-31 00:47:24'),(18,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:47:28','2023-12-31 00:47:28'),(19,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:47:41','2023-12-31 00:47:41'),(20,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:52:55','2023-12-31 00:52:55'),(21,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:53:09','2023-12-31 00:53:09'),(22,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:57:02','2023-12-31 00:57:02'),(23,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:58:33','2023-12-31 00:58:33'),(24,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:59:17','2023-12-31 00:59:17'),(25,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 00:59:34','2023-12-31 00:59:34'),(26,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 01:00:18','2023-12-31 01:00:18'),(27,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 01:00:59','2023-12-31 01:00:59'),(28,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 01:01:52','2023-12-31 01:01:52'),(29,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 01:02:58','2023-12-31 01:02:58'),(30,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 01:04:26','2023-12-31 01:04:26'),(31,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 01:11:15','2023-12-31 01:11:15'),(32,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 01:28:24','2023-12-31 01:28:24'),(33,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 01:29:32','2023-12-31 01:29:32'),(34,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 01:29:45','2023-12-31 01:29:45'),(35,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 01:50:58','2023-12-31 01:50:58'),(36,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:08:31','2023-12-31 08:08:31'),(37,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:02','2023-12-31 08:18:02'),(38,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:06','2023-12-31 08:18:06'),(39,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:09','2023-12-31 08:18:09'),(40,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:19','2023-12-31 08:18:19'),(41,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:20','2023-12-31 08:18:20'),(42,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:20','2023-12-31 08:18:20'),(43,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:21','2023-12-31 08:18:21'),(44,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:21','2023-12-31 08:18:21'),(45,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:21','2023-12-31 08:18:21'),(46,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:28','2023-12-31 08:18:28'),(47,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:18:30','2023-12-31 08:18:30'),(48,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:19:02','2023-12-31 08:19:02'),(49,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:19:03','2023-12-31 08:19:03'),(50,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:19:07','2023-12-31 08:19:07'),(51,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:19:52','2023-12-31 08:19:52'),(52,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:19:54','2023-12-31 08:19:54'),(53,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:19:56','2023-12-31 08:19:56'),(54,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:20:01','2023-12-31 08:20:01'),(55,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 08:23:14','2023-12-31 08:23:14'),(56,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 17:13:31','2023-12-31 17:13:31'),(57,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 17:23:42','2023-12-31 17:23:42'),(58,'::1','53','WEb','Login','Login','successfully logged in','2023-12-31 17:23:43','2023-12-31 17:23:43'),(59,'175.176.87.18','53','WEb','Login','Login','successfully logged in','2023-12-31 19:29:51','2023-12-31 19:29:51'),(60,'175.176.87.18','53','WEb','Login','Login','successfully logged in','2023-12-31 19:32:09','2023-12-31 19:32:09'),(61,'175.176.87.18','53','WEb','Login','Login','successfully logged in','2023-12-31 19:32:12','2023-12-31 19:32:12'),(62,'110.174.225.220','53','WEb','Login','Login','successfully logged in','2023-12-31 20:38:54','2023-12-31 20:38:54'),(63,'175.176.84.55','53','WEb','Login','Login','successfully logged in','2023-12-31 21:17:42','2023-12-31 21:17:42'),(64,'175.176.87.45','53','WEb','Login','Login','successfully logged in','2024-01-02 08:58:07','2024-01-02 08:58:07'),(65,'::1','53','WEb','Login','Login','successfully logged in','2024-01-02 22:36:25','2024-01-02 22:36:25'),(66,'175.176.84.41','53','WEb','Login','Login','successfully logged in','2024-01-03 13:04:10','2024-01-03 13:04:10'),(67,'175.176.84.41','53','WEb','Login','Login','successfully logged in','2024-01-03 14:28:53','2024-01-03 14:28:53'),(68,'175.176.84.41','53','WEb','Login','Login','successfully logged in','2024-01-03 14:48:34','2024-01-03 14:48:34'),(69,'175.176.84.139','53','WEb','Login','Login','successfully logged in','2024-01-05 12:08:27','2024-01-05 12:08:27'),(70,'175.176.84.139','53','WEb','Login','Login','successfully logged in','2024-01-05 12:49:12','2024-01-05 12:49:12'),(71,'175.176.84.139','53','WEb','Login','Login','successfully logged in','2024-01-05 13:09:46','2024-01-05 13:09:46'),(72,'175.176.84.139','53','WEb','Login','Login','successfully logged in','2024-01-05 13:29:46','2024-01-05 13:29:46'),(73,'175.176.84.139','53','WEb','Login','Login','successfully logged in','2024-01-05 13:33:38','2024-01-05 13:33:38'),(74,'175.176.87.61','53','WEb','Login','Login','successfully logged in','2024-01-05 16:51:23','2024-01-05 16:51:23'),(75,'175.176.87.61','53','WEb','Login','Login','successfully logged in','2024-01-05 17:08:55','2024-01-05 17:08:55'),(76,'175.176.87.61','53','WEb','Login','Login','successfully logged in','2024-01-05 17:36:29','2024-01-05 17:36:29'),(77,'175.176.84.222','53','WEb','Login','Login','successfully logged in','2024-01-06 00:45:51','2024-01-06 00:45:51'),(78,'::1','53','WEb','Login','Login','successfully logged in','2024-01-08 11:46:58','2024-01-08 11:46:58'),(79,'::1','53','WEb','Login','Login','successfully logged in','2024-01-08 11:49:21','2024-01-08 11:49:21'),(80,'::1','53','WEb','Login','Login','successfully logged in','2024-01-08 13:21:01','2024-01-08 13:21:01'),(81,'::1','53','WEb','Login','Login','successfully logged in','2024-01-09 00:00:31','2024-01-09 00:00:31'),(82,'::1','53','WEb','Login','Login','successfully logged in','2024-01-10 11:52:24','2024-01-10 11:52:24'),(83,'::1','53','WEb','Login','Login','successfully logged in','2024-01-10 21:28:01','2024-01-10 21:28:01'),(84,'::1','53','WEb','Login','Login','successfully logged in','2024-01-10 23:03:50','2024-01-10 23:03:50');
/*!40000 ALTER TABLE `log_trail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-10 23:24:29
