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
-- Table structure for table `division`
--

DROP TABLE IF EXISTS `division`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `division` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` varchar(45) DEFAULT NULL,
  `department_name` varchar(45) DEFAULT NULL,
  `department_responsible_person` varchar(45) DEFAULT NULL,
  `staff` varchar(45) DEFAULT NULL,
  `createdAt` varchar(45) DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `division`
--

LOCK TABLES `division` WRITE;
/*!40000 ALTER TABLE `division` DISABLE KEYS */;
INSERT INTO `division` VALUES (1,'5c9aa9ff539741efb6ec3bd536654c9a',NULL,NULL,NULL,'2024-01-09 00:53:01','2024-01-09 00:53:01'),(2,'5c9aa9ff539741efb6ec3bd536654c9a',NULL,NULL,NULL,'2024-01-09 00:53:01','2024-01-09 00:53:01'),(3,'906f0efc18f943f197600c58dc31461b','department 1',NULL,NULL,'2024-01-09 00:53:51','2024-01-09 00:53:51'),(4,'906f0efc18f943f197600c58dc31461b','department 2',NULL,NULL,'2024-01-09 00:53:51','2024-01-09 00:53:51'),(5,'3805c71d5a3c42769fee1465d1eda387','department 1',NULL,NULL,'2024-01-09 00:54:39','2024-01-09 00:54:39'),(6,'3805c71d5a3c42769fee1465d1eda387','department 2',NULL,NULL,'2024-01-09 00:54:39','2024-01-09 00:54:39'),(7,'204b98c5ab7e4a429d5c47ff53b42cc7','as','dasdasdasdas',NULL,'2024-01-09 00:57:12','2024-01-09 00:57:12'),(8,'380571444d594d2c92fcb8138da8d181','as','dasdasdasdas',NULL,'2024-01-09 00:57:29','2024-01-09 00:57:29'),(9,'169aa01e39224d5f8e16984a859fd650','asd','as',NULL,'2024-01-09 01:11:59','2024-01-09 01:11:59'),(10,'4d292f9ef00944e78dc690713c5b190c','asd','as',NULL,'2024-01-09 01:12:32','2024-01-09 01:12:32'),(11,'ebdc11e75bb14ecc9219cf7ef6da4b2c','asd','as',NULL,'2024-01-09 01:12:41','2024-01-09 01:12:41'),(12,'103b4caf18ff46e185566958cb29f01c','asd','as',NULL,'2024-01-09 01:12:48','2024-01-09 01:12:48'),(13,'f2cfaec11d22403c87473e05927265f9','asd','as',NULL,'2024-01-09 01:14:30','2024-01-09 01:14:30'),(14,'4e23be36942e4dcaaf14a85d67bf94d1','asd','as',NULL,'2024-01-09 01:17:34','2024-01-09 01:17:34'),(15,'ac3fd0a059a94e8089844e5625fbff34','asd','as',NULL,'2024-01-09 01:17:43','2024-01-09 01:17:43'),(16,'4d947b5cb97d4b9b9b494554d306cfff','asd','as',NULL,'2024-01-09 01:17:49','2024-01-09 01:17:49'),(17,'06417ea5d4d9464683f80af401577666','asd','as',NULL,'2024-01-09 01:18:55','2024-01-09 01:18:55'),(18,'4c8dd58311f04427bda0252449ccc6b7','asd','asdf',NULL,'2024-01-09 01:20:41','2024-01-09 01:20:41'),(19,'85f93386437e444083ec7322a0b53505','jaskdj','kjkjaks',NULL,'2024-01-09 01:21:54','2024-01-09 01:21:54'),(20,'331d3d5a1d554f35a7b2b21fad3c220a','asd','as',NULL,'2024-01-09 01:24:14','2024-01-09 01:24:14'),(21,'5d7d017201f043979f5ed1e6a5eadb1c','fasdf','asd',NULL,'2024-01-09 01:25:29','2024-01-09 01:25:29'),(22,'2ec80ae3d28d4f58933f1cf63f025829','fasdf','asd',NULL,'2024-01-09 01:26:10','2024-01-09 01:26:10'),(23,'b4ecc03c67b344209068095a2836dbfc','fasdf','asd',NULL,'2024-01-09 01:26:27','2024-01-09 01:26:27'),(24,'23f30fbb7e7342c5b0afadeb9e2583c7','fasdf','asd',NULL,'2024-01-09 01:29:20','2024-01-09 01:29:20'),(25,'6e52fbf30b0f48f1aa9361591862c3ff','fasdf','asd',NULL,'2024-01-09 01:30:06','2024-01-09 01:30:06'),(26,'ec360ccd7de74d9dbc8bad6366da2dcc','asd','a',NULL,'2024-01-09 01:43:10','2024-01-09 01:43:10'),(27,'798732f4e2844ba2a5209c8ea0ea32a9','asd','as',NULL,'2024-01-09 01:43:54','2024-01-09 01:43:54'),(28,'c7f2170cb6164119ba9909a3ca2f82d2','asd','as',NULL,'2024-01-09 01:49:29','2024-01-09 01:49:29'),(29,'8245817539534b51989241932717e6fb','hdjfk','hkksd',NULL,'2024-01-09 03:15:24','2024-01-09 03:15:24'),(30,'d4b052ca451c41e3ae2901341f2ed399','hdsfj','hjsdh',NULL,'2024-01-09 03:27:33','2024-01-09 03:27:33'),(31,'10d1e406aea14803b51f503c058b232a','ahsjd','jhjas',NULL,'2024-01-09 03:33:50','2024-01-09 03:33:50'),(32,'8861f4905f824896a62389874b8ae0aa','sadf','asd',NULL,'2024-01-09 03:36:20','2024-01-09 03:36:20'),(33,'bc8417f3d4bf4ce9b8c7df994f0fc65c','hkh','hjsdh',NULL,'2024-01-09 03:38:16','2024-01-09 03:38:16'),(34,'a4af773074c74a86be79abfe2c2dab71','asdf','as',NULL,'2024-01-09 03:40:33','2024-01-09 03:40:33'),(35,'f25e2baa2e3947ad8abeed4c748f281f','hajsdh','jhjahsdjk',NULL,'2024-01-09 09:18:45','2024-01-09 09:18:45'),(36,'56e2ce6044354d3ba7c6f86cd5d56468','aghsd','jgjahsgd',NULL,'2024-01-09 10:22:28','2024-01-09 10:22:28'),(37,'f4fa4b97adb34e78aef04cd4cb1bfc72','asjd','asd',NULL,'2024-01-09 10:25:43','2024-01-09 10:25:43'),(38,'dde840a3ba514b368e3057777b3794b6','asd','as',NULL,'2024-01-09 10:35:56','2024-01-09 10:35:56'),(39,'473f2acda5ca41f8ad5f3e2224ac3ae6','ahsdj','hasj',NULL,'2024-01-09 10:38:52','2024-01-09 10:38:52'),(40,'a110d65c5e954bfdbfd5918b1fd7da2c','ashd','jhahsd',NULL,'2024-01-09 10:40:23','2024-01-09 10:40:23'),(41,'93568d3ffdfc43a7a7eb4422d7c0ebfc','ajsdk','jkkasdj',NULL,'2024-01-09 10:45:53','2024-01-09 10:45:53'),(42,'16b3375260a841a99f0fc3aedae9ce2d','hajsdh','hjahskd',NULL,'2024-01-09 10:49:21','2024-01-09 10:49:21'),(43,'0ba1a579a65543c08eba71dca2b80f21','ashd','agsh',NULL,'2024-01-09 10:51:49','2024-01-09 10:51:49'),(44,'e0c4b8fefaf04e31831af6a84d8c6039','asd','a',NULL,'2024-01-09 10:55:57','2024-01-09 10:55:57'),(45,'018c058c449f444aa719772ad7ec03f8','as','ja',NULL,'2024-01-09 10:59:04','2024-01-09 10:59:04'),(46,'14ec64c7591e43629f0af24ea81bd6c0','ahsjdk','hjashd',NULL,'2024-01-09 10:59:51','2024-01-09 10:59:51'),(47,'ab688a99e8a94e7296c3b70d66f8dbb9','asdfas','sdf',NULL,'2024-01-10 16:11:52','2024-01-10 16:11:52'),(48,'ab688a99e8a94e7296c3b70d66f8dbb9','asdfh','jhjasdhkj',NULL,'2024-01-10 16:11:52','2024-01-10 16:11:52'),(49,'ab688a99e8a94e7296c3b70d66f8dbb9','ahsdjhk','ashd',NULL,'2024-01-10 16:11:52','2024-01-10 16:11:52'),(50,'d245f6c9cb9242b9a474f0d00cf35ce3','gafsgdf','fagsdfhfhgas',NULL,'2024-01-10 16:41:07','2024-01-10 16:41:07'),(51,'38940c0460ee42218eaca243bab9c825','asdfdsaaaasdf','asdas','3','2024-01-10 16:48:06','2024-01-10 16:48:06'),(52,'38940c0460ee42218eaca243bab9c825','asdf','asd','1','2024-01-10 16:48:06','2024-01-10 16:48:06');
/*!40000 ALTER TABLE `division` ENABLE KEYS */;
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