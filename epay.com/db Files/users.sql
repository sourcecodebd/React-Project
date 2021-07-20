-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2021 at 06:58 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel7_login_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `admin_message` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_no` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `added` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfered` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loan` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loanreq` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loanpaid` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `balance` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_purchased` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile_recharge` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `electricity_bill` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `usertype` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `full_name`, `email`, `password`, `phone`, `message`, `admin_message`, `card_no`, `bank_name`, `added`, `transfered`, `loan`, `loanreq`, `loanpaid`, `balance`, `total_purchased`, `mobile_recharge`, `electricity_bill`, `img`, `usertype`, `created_at`, `updated_at`) VALUES
(27, 'Nafi', 'Mahmud', 'Nafi Mahmud Naim', 'nafi@aiub.edu', 'c20ad4d76fe97759aa27a0c99bff6710', '01869510882', 'hi', NULL, '65432', 'Axis Bank', '5000', NULL, '8000', '0', '2000', '78000', NULL, '0', '0', '1620507855.Leather-Bag-PNG-HD-Image.png', 'User', '2021-05-04 16:08:32', '2021-05-08 22:53:24'),
(53, NULL, NULL, 'Sadman Islam Jihad', 'sales@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-05-07 03:31:40', '2021-05-07 03:31:40'),
(58, NULL, NULL, 'Nafi Mahmud', 'uzugessy-7559@yopmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-05-07 03:55:35', '2021-05-07 03:55:35'),
(64, NULL, NULL, 'jiyan', 'jiyan@aiub.edu', 'c20ad4d76fe97759aa27a0c99bff6710', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, '', NULL, '2021-05-08 09:08:59', '2021-05-08 14:57:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
