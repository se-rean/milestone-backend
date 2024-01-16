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
-- Table structure for table `site_v2`
--

DROP TABLE IF EXISTS `site_v2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_v2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` varchar(45) DEFAULT NULL,
  `site_address` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `site_state` varchar(45) DEFAULT NULL,
  `site_suburb` varchar(45) DEFAULT NULL,
  `site_contact_person` varchar(45) DEFAULT NULL,
  `site_person_mobile` varchar(45) DEFAULT NULL,
  `site_status` varchar(45) DEFAULT NULL,
  `site_person_email` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_v2`
--

LOCK TABLES `site_v2` WRITE;
/*!40000 ALTER TABLE `site_v2` DISABLE KEYS */;
INSERT INTO `site_v2` VALUES (1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-08 15:35:31','2024-01-08 15:35:31'),(2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-08 15:36:07','2024-01-08 15:36:07'),(3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-08 15:36:36','2024-01-08 15:36:36'),(4,'4300460fcfc54599a8e02e0c444c2d54',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-08 15:37:17','2024-01-08 15:37:17'),(5,'a9dcf12aa17d4f298cecdf1c6a8ec6e0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-08 15:37:34','2024-01-08 15:37:34'),(6,'711957812d0d484e86a4f06def840eee','ahsjdhk','hjashdkh','khashdk','hkhakshdk','hkhasdhk','hkhaskdjhk','Inactive','hahsdjh','2024-01-08 15:42:20','2024-01-08 15:42:20'),(7,'4b6ea4d07be946e6aa0e14baf87244c0','ahsjdhk','hjashdkh','khashdk','hkhakshdk','hkhasdhk','hkhaskdjhk','Inactive','hahsdjhk','2024-01-08 15:42:55','2024-01-08 15:42:55'),(8,'4b6ea4d07be946e6aa0e14baf87244c0','asdfkj','kjajsdkj','ljlkajsdlkj','ljlkajsdlj','ljlakjsdlj','ljlkajsdjl','Inactive','asdas','2024-01-08 15:42:55','2024-01-08 15:42:55'),(9,'03b3e2cff0294a7da89163e93d3953b0','ahsjdhk','hjashdkh','khashdk','hkhakshdk','hkhasdhk','hkhaskdjhk','Inactive','hahsdjhk','2024-01-08 15:43:24','2024-01-08 15:43:24'),(10,'03b3e2cff0294a7da89163e93d3953b0','asdfkj','kjajsdkj','ljlkajsdlkj','ljlkajsdlj','ljlakjsdlj','ljlkajsdjl','Active','asdasd','2024-01-08 15:43:24','2024-01-08 15:43:24'),(11,'03b3e2cff0294a7da89163e93d3953b0','asd','jkkjadshkh','khkashdh','khkajshdkh','khakshdkh','khajshdkh','Inactive','khkas','2024-01-08 15:43:24','2024-01-08 15:43:24'),(120,'0ba1a579a65543c08eba71dca2b80f21','jashdj','hajsdhk','hjasjdk','hkjasdkj','khaksdhk','hkaksdk','Inactive','dshak','2024-01-09 02:51:49','2024-01-09 02:51:49'),(121,'0ba1a579a65543c08eba71dca2b80f21','asjdk','ajksdhksh','jaskd','hjasjkdj','asjdh','ashdgj','Inactive','dshad','2024-01-09 02:51:49','2024-01-09 02:51:49'),(122,'0ba1a579a65543c08eba71dca2b80f21','ashdgj','asdjh','hasjd','jhasdhj','hasdh','ashd','Inactive','gdhas','2024-01-09 02:51:49','2024-01-09 02:51:49'),(123,'e0c4b8fefaf04e31831af6a84d8c6039','asd','asd','asd','asd','asd','asd','Inactive','as','2024-01-09 02:55:57','2024-01-09 02:55:57'),(124,'018c058c449f444aa719772ad7ec03f8','kjlkajsdlkj','lkjalskdjl','kjkajsdklj','ljlaksdjlk','jlkajsdlkj','lkjlaksjdlk','Inactive','jlkjaslkdj','2024-01-09 02:59:04','2024-01-09 02:59:04'),(125,'14ec64c7591e43629f0af24ea81bd6c0','hasjdhk','hjahskdh','khkjashdkh','kjhaksdhk','hkjahsdkhk','hkjashdk','Inactive','asjhd','2024-01-09 02:59:51','2024-01-09 02:59:51'),(126,'ab688a99e8a94e7296c3b70d66f8dbb9','asudi','iuaysuidyi','uyuiasydy','iuausdy','yuy','iuyusdyuiy','Inactive','iuaiusdi','2024-01-10 08:11:52','2024-01-10 08:11:52'),(127,'d245f6c9cb9242b9a474f0d00cf35ce3','hgahsdgh','ghagsjdgjh','gjhgasdgf','gfaghsdfh','fhghasdfhg','hgfashgdhg','Inactive','fhgfshgdf','2024-01-10 08:41:07','2024-01-10 08:41:07'),(128,'38940c0460ee42218eaca243bab9c825','asdf','asdfda','asdda','asddsa','asdaa','asdads','Inactive','asddsa','2024-01-10 08:48:06','2024-01-10 08:48:06');
/*!40000 ALTER TABLE `site_v2` ENABLE KEYS */;
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
