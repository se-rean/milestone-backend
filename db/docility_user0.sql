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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `createdAt` varchar(45) DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `phone_no` varchar(45) DEFAULT NULL,
  `site_address` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `suburb` varchar(45) DEFAULT NULL,
  `expiration_date` varchar(45) DEFAULT NULL,
  `MFA` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (53,'Test Account','test123','sample@gmail',NULL,NULL,'Guest','2023-12-30 13:17:34','2023-12-30 13:17:34','sample fname','test lname','test department','test position','test phone','test site','test country','test state','test sub urb','test expiration','true'),(55,'Mahen',NULL,'mahen1581@gmail.com',NULL,'110.174.225.220','Guest','2023-12-31 20:43:30','2023-12-31 20:43:30','Mahendra','Verma','IT','CTO','0415768466','Sydney','Australia','NSW','Sydney','31/12/99','No'),(58,'Mahen',NULL,'mahen1581@gmail.com',NULL,'175.176.84.41','Guest','2024-01-03 14:39:09','2024-01-03 14:39:09','Mahendra','Verma','IT','CTO','0415768466','Sydney','Australia','NSW','Sydney','31/12/99','Yes'),(59,'Test Account',NULL,'sample@gmail',NULL,'::1','Guest','2024-01-10 21:28:20','2024-01-10 21:28:20','sample fname','test lnamea','test department','test position','test phone','test site','test country','test state','test sub urb','test expiration','true'),(60,'asdf',NULL,'jkajsdj',NULL,'::1','Auditor','2024-01-10 23:04:23','2024-01-10 23:04:23','ljlasjdlkj','lkjaslkdjl','kjklajsdkj','kjkljasdjh','jhasjdhk','hkjahsdkh','kjhakjsdhk','hkjahsdkjh','kjhakjsakkjh','kskjdhkdjkahsdkjh','Yes'),(61,'andoy',NULL,'andoyandoy5@gmail.com',NULL,'::1','Auditor','2024-01-10 23:06:45','2024-01-10 23:06:45','ljlasjdlkj','lkjaslkdjl','kjklajsdkj','kjkljasdjh','jhasjdhk','hkjahsdkh','kjhakjsdhk','hkjahsdkjh','kjhakjsakkjh','kskjdhkdjkahsdkjh','Yes');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-10 23:24:30
