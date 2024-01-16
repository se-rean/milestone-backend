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
-- Table structure for table `company_v2`
--

DROP TABLE IF EXISTS `company_v2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_v2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` varchar(45) DEFAULT NULL,
  `company_organization` varchar(45) DEFAULT NULL,
  `company_type_of_business` varchar(45) DEFAULT NULL,
  `company_text_file_number` varchar(45) DEFAULT NULL,
  `company_acn_number` varchar(45) DEFAULT NULL,
  `company_communication_address` varchar(45) DEFAULT NULL,
  `company_country` varchar(45) DEFAULT NULL,
  `company_state` varchar(45) DEFAULT NULL,
  `company_suburb` varchar(45) DEFAULT NULL,
  `contact_person_name` varchar(45) DEFAULT NULL,
  `contact_person_mobile_no` varchar(45) DEFAULT NULL,
  `contact_person_email` varchar(45) DEFAULT NULL,
  `timezone` varchar(45) DEFAULT NULL,
  `domain` varchar(45) DEFAULT NULL,
  `account_creation_date` varchar(45) DEFAULT NULL,
  `account_expiry_date` varchar(45) DEFAULT NULL,
  `information_security_framework` varchar(45) DEFAULT NULL,
  `license_allocated` varchar(45) DEFAULT NULL,
  `organisation_structure` varchar(45) DEFAULT NULL,
  `company_file` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_v2`
--

LOCK TABLES `company_v2` WRITE;
/*!40000 ALTER TABLE `company_v2` DISABLE KEYS */;
INSERT INTO `company_v2` VALUES (62,'0ba1a579a65543c08eba71dca2b80f21','ajskdfj','jkjaksdj','jljalsdjl','jljaskdjlk','jkjasjkdhjh','ghkjhajskdhk','hkjhaksjdhk','hjkahsdkjh','kjhkjashdkj','hkjhajkdhk','jhkjashdkjh','kjhakjsdh','No','ahsdjh','ahsj','ISO/IEC 27001','No license',NULL,'1704768709864.pdf','2024-01-09 02:51:49','2024-01-09 02:51:49'),(63,'e0c4b8fefaf04e31831af6a84d8c6039','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','No','asd','as','ISO/IEC 27001','No license',NULL,'1704768957634.pdf','2024-01-09 02:55:57','2024-01-09 02:55:57'),(64,'018c058c449f444aa719772ad7ec03f8','askdfjl','jkjalskdjlk','jlkjasldkjl','jlkjasdlkj','ljlkajsdlkj','lkjalksjdlk','jlkjaslkdjl','jlkajsdlkj','lkjlkajsdlkj','lkjlaksdjlk','jlkjasldkjl','klkjaslkdjl','No','ljlaksdjlk','jlkjalskdj','ISO/IEC 27001','No license','1704769144418.pdf','1704769144420.pdf','2024-01-09 02:59:04','2024-01-09 02:59:04'),(65,'14ec64c7591e43629f0af24ea81bd6c0','asdf','kkahsdkjh','hkjhaskjdhkj','hkjhaskjdhk','jhkjahsdkjh','kjhkajsdhkj','hkjhaskdjh','kjhkjashdkj','hkjahsdkjh','kjhakjsdhkj','hkjhaskjdh','kjhkjasdhkj','No','ahsjdh','kahsd','ISO/IEC 27001','No license','1704769191535.pdf','1704769191520.pdf','2024-01-09 02:59:51','2024-01-09 02:59:51'),(66,'ab688a99e8a94e7296c3b70d66f8dbb9','asdu','uaysudui','iydiyiu','yuaysuidyi','uyuayduyi','uyiuaysduiy','iuyiausdi','iuaiusdyiu','yiuaysuidyi','uyuaysduy','iiuasdiu','yuiaysdu','No','ausdyiu','asud','ISO/IEC 27001','No license','1704874312000.docx',NULL,'2024-01-10 08:11:52','2024-01-10 08:11:52'),(67,'d245f6c9cb9242b9a474f0d00cf35ce3','asdf','jkhajsdhk','hkjhaksjdhjh','gjhgasdhgjh','gjhagsdjhg','jhgjhasgdjhg','jhgajshdgjh','gjhgasjdhgj','hgjhasgdjhg','jhgajshdgjh','ghjgasdhgjh','gjhagsdhg','No','ashdh','ghagsdh','ISO/IEC 27001','No license','1704876067644.pdf',NULL,'2024-01-10 08:41:07','2024-01-10 08:41:07'),(68,'38940c0460ee42218eaca243bab9c825','asjdfikj','jkasdkj','kjajbnmabsjhg','hgjhagsdjhg','jhghadsgjh','gjhgajsdhgjh','gjhagsdg','jhgjhasgdhg','jhgasdhgjh','gjhagsdhg','jgjahsgdjg','jhgahsgd','No','agshdgj','asd','ISO/IEC 27001','No license','1704876486079.pdf','1704876486057.pdf','2024-01-10 08:48:06','2024-01-10 08:48:06');
/*!40000 ALTER TABLE `company_v2` ENABLE KEYS */;
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
