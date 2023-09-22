-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.26 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for hackathon
CREATE DATABASE IF NOT EXISTS `hackathon` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hackathon`;

-- Dumping structure for table hackathon.cabin
CREATE TABLE IF NOT EXISTS `cabin` (
  `id` varchar(25) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `location` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `time` varchar(150) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `status` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hackathon.cabin: ~29 rows (approximately)
/*!40000 ALTER TABLE `cabin` DISABLE KEYS */;
INSERT INTO `cabin` (`id`, `name`, `location`, `time`, `date`, `status`) VALUES
	('1', 'Eunice Carter', 'Denton', '9am-10am', '2022-04-24', 'Vacant'),
	('10', 'Charlie Lofland', 'Dallas', '1pm-2pm', '2022-04-19', 'Vacant'),
	('11', 'Richard Jones\r\n', 'Arkansas', '1pm-2pm', '2022-04-14', 'Filled'),
	('12', 'Kelly Sturgis', 'Alaska', '11am-12am', '2022-04-12', 'Filled'),
	('13', 'Jessica Wagner', 'Kansas', '1pm-2pm', '2022-04-21', 'Vacant'),
	('14', 'Wendy Armstrong', 'Buffalo', '1pm-2pm', '2022-04-20', 'Vacant'),
	('15', 'Darrell  Stanley', 'Dallas', '10am-12pm', '2022-04-16', 'Filled'),
	('16', 'Kristen Stevenson/Baker', 'Arkansas', '1pm-2pm', '2022-04-14', 'Filled'),
	('17', 'James  Fisher', 'Austin', '5pm-7pm', '2022-04-12', 'Filled'),
	('18', 'Kevin  Roberts', 'District of Columbia', '7pm-8pm', '2022-04-13', 'Filled'),
	('19', 'Darrie Bryant ', 'Denton', '9am-11am', '2022-04-19', 'Vacant'),
	('2', 'Wendy Bowen', 'Dallas', '9pm-10pm', '2022-04-15', 'Filled'),
	('20', 'Jenniffier McErlane', 'Arizona', '8am-10am', '2022-04-19', 'Vacant'),
	('22', 'John Belfield', 'florida', '7pm-8pm', '2022-04-23', 'Vacant'),
	('23', 'Jeffrey Botts', 'texas', '4pm-5pm', '2022-04-25', 'Vacant'),
	('24', 'Freddie Carswel', 'Austin', '1pm-2pm', '2022-04-27', 'Vacant'),
	('25', 'Luis Gibbs', 'arkansas', '', '2022-04-27', 'Vacant'),
	('26', 'Jacob (Wes) Morris', 'connecticut', '10am-11am', '2022-04-19', 'Vacant'),
	('27', 'Kathleen Baker\r\n', 'connecticut', '10am-11am', '2022-04-27', 'Vacant'),
	('28', 'Joyce Freck', 'connecticut', '1pm-2pm', '2022-04-20', 'Vacant'),
	('29', 'Joy Warner', 'colorado', '4pm-5pm', '2022-04-13', 'Filled'),
	('3', 'Becky Smith', 'Frisco', '2pm-3pm', '2022-04-23', 'Vacant'),
	('30', 'Bobby Terry', 'delaware', '4pm-5pm', '2022-04-17', 'Filled'),
	('4', 'Clyde  Parker', 'Little Elm', '1pm-3pm', '2022-04-16', 'Filled'),
	('5', 'Anner Perez', 'San Fransisco', '12pm-2pm', '2022-04-22', 'Vacant'),
	('6', 'Rebecca Lyons', 'New York', '9am-11am', '2022-04-18', 'Vacant'),
	('7', 'Margaret Carter', 'Atlanta', '9am-10am', '2022-04-14', 'Filled'),
	('8', 'Jacqueline Tolbert', 'Austin', '5pm-7pm', '2022-04-17', 'Vacant'),
	('9', 'Fracyne Morton', 'Plano', '9pm-11pm', '2022-04-25', 'Vacant');
/*!40000 ALTER TABLE `cabin` ENABLE KEYS */;

-- Dumping structure for table hackathon.message
CREATE TABLE IF NOT EXISTS `message` (
  `id` varchar(25) NOT NULL,
  `text` varchar(1000) DEFAULT NULL,
  `user_id` varchar(25) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `message_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hackathon.message: ~2 rows (approximately)
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` (`id`, `text`, `user_id`, `time`) VALUES
	('12', '<p>Hello, I am looking for mental support</p>', '15', '2023-09-20T23:26:00.000Z'),
	('13', '<p>Hello, I am looking for mental support</p>', '15', '2023-09-21T00:23:02.000Z');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;

-- Dumping structure for table hackathon.provider
CREATE TABLE IF NOT EXISTS `provider` (
  `id` varchar(25) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `event_id` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `event_id` (`event_id`),
  CONSTRAINT `provider_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `cabin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hackathon.provider: ~19 rows (approximately)
/*!40000 ALTER TABLE `provider` DISABLE KEYS */;
INSERT INTO `provider` (`id`, `name`, `event_id`) VALUES
	('10', 'La Red health care centre', '11'),
	('101', 'Brindy counselling community services', '2'),
	('102', 'La Red health care centre', '9'),
	('103', 'Brindy counselling community services', '3'),
	('104', 'Brindy counselling community services', '15'),
	('105', 'Brindy counselling community services', '20'),
	('106', 'Brindy counselling community services', '19'),
	('107', 'La Red health care centre', '11'),
	('108', 'La Red health care centre', '11'),
	('11', 'La Red health care centre', '11'),
	('12', 'La Red health care centre', '1'),
	('13', 'Brindy counselling community services', '10'),
	('14', 'Brindy counselling community services', '12'),
	('15', 'Brindy counselling community services', '25'),
	('16', 'Brindy counselling community services', '13'),
	('17', 'Brindy counselling community services', '17'),
	('18', 'Brindy counselling community services', '28'),
	('19', 'Brindy counselling community services', '18'),
	('9', 'La Red health care centre', '11');
/*!40000 ALTER TABLE `provider` ENABLE KEYS */;

-- Dumping structure for table hackathon.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` varchar(25) NOT NULL,
  `username` varchar(150) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hackathon.user: ~2 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `password`, `email`, `phone`) VALUES
	('15', 'john', 'john', 'john@gmail.com', '9999999999'),
	('16', 'paul', 'paul', 'paul@gmail.com', '9848022337');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
