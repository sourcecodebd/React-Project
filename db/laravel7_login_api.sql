-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2021 at 07:54 PM
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
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `first_name`, `last_name`, `full_name`, `email`, `password`, `phone`, `type`, `created_at`, `updated_at`) VALUES
(1, 'emon', 'hossin', 'emon alam', 'emon@gmail.com', '123', '01775468658', 'Admin', NULL, '2021-05-05 00:59:09'),
(4, 'sany', 'khann', 'sany khan', 'sany@gamil.com', '202cb962ac59075b964b07152d234b70', '01775465555', 'Admin', '2021-05-04 09:40:39', '2021-05-04 12:58:46'),
(5, 'Kamal', 'hossain', 'Kamal hossain', 'kamal@aiub.edu', '202cb962ac59075b964b07152d234b70', '01775463787', 'Customer', '2021-05-04 14:06:37', '2021-05-04 14:06:37'),
(7, 'kamal', 'khan', 'kamal khan', 'admin@gmail.com', '123', '01775465555', 'Admin', '2021-05-05 01:00:06', '2021-05-09 07:33:24');

-- --------------------------------------------------------

--
-- Table structure for table `customer_balance`
--

CREATE TABLE `customer_balance` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `card_no` int(50) NOT NULL,
  `bank_name` varchar(50) NOT NULL,
  `added` varchar(100) DEFAULT NULL,
  `transferred` varchar(100) DEFAULT NULL,
  `loan` varchar(100) DEFAULT NULL,
  `loanreq` varchar(100) DEFAULT NULL,
  `balance` varchar(100) NOT NULL,
  `total_purchased` varchar(100) DEFAULT NULL,
  `phone` int(50) NOT NULL,
  `mobile_recharge` int(100) DEFAULT NULL,
  `electricity_bill` varchar(100) DEFAULT NULL,
  `profile_img` varchar(100) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `comment` varchar(10000) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer_balance`
--

INSERT INTO `customer_balance` (`id`, `username`, `email`, `card_no`, `bank_name`, `added`, `transferred`, `loan`, `loanreq`, `balance`, `total_purchased`, `phone`, `mobile_recharge`, `electricity_bill`, `profile_img`, `status`, `comment`, `created_at`, `updated_at`) VALUES
(1, 'Nafi', 'nativetube71@gmail.com', 54321, 'Axis Bank', '50000', '4000', '15000', '10000', '35000', '15000', 1869510882, 1000, '14000', '1615751122.jpg', 'Pending', NULL, '2021-03-12 09:49:37', '2021-03-14 19:45:22'),
(7, 'Kamal', 'nativetube71@gmail.com', 23456, 'Janata Bank', '25000', NULL, NULL, '', '25000', NULL, 1869510882, NULL, NULL, '1615689928.png', '', NULL, '2021-03-14 02:45:28', '2021-03-14 02:45:28'),
(8, 'Rabbi', 'nativetube71@gmail.com', 65432, 'Janata Bank', '2000', NULL, NULL, '', '2000', NULL, 1869510882, NULL, NULL, '1615736925.jpg', 'Pending', NULL, '2021-03-14 15:48:45', '2021-03-14 15:48:45');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2021_05_03_210532_create_users_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `reviewId` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `profile_img` varchar(100) DEFAULT NULL,
  `reviewdate` date DEFAULT NULL,
  `review` varchar(100) DEFAULT NULL,
  `feedback` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`reviewId`, `username`, `profile_img`, `reviewdate`, `review`, `feedback`) VALUES
(2, 'Rafi', '1614362165.png', '2021-03-03', 'It\'s Okay', 'Appreciated it so much'),
(29, 'Sakib', '1617741675.jpg', '2021-03-12', 'Satisfactory', 'Need to Improve'),
(31, 'Nafi', '1615434638.jpg', '2021-03-11', 'Its Okay', 'Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it.'),
(34, 'Nafi', '1615508070.jpg', '2021-03-12', 'Its Okay', 'Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it.'),
(35, 'Sakib', '1615510895.png', '2021-03-12', 'Its Okay', 'Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it. Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it.'),
(36, 'Rakin', '1618213976.jpg', '2021-04-12', 'Satisfactory', 'Need to Improve, lots of features must be add. Please make it happen as soon as possible. Take care of it. Project should be well established. Please inform me further about it.'),
(37, 'Siam', '1618233568.png', '2021-04-12', 'Satisfactory', 'this is good');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `review` mediumtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `full_name`, `review`, `created_at`, `updated_at`) VALUES
(11, 'Nafi Mahmud', 'It\'s okay', '2021-05-04 16:19:35', '2021-05-05 05:41:23'),
(13, 'Nafi Mahmud', 'Not Good', '2021-05-04 23:40:41', '2021-05-04 23:40:41'),
(14, 'Nafi Mahmud', 'ok', '2021-05-05 00:52:21', '2021-05-05 00:52:21'),
(16, 'Nafi Mahmud', 'Impressive!', '2021-05-06 17:54:54', '2021-05-06 17:54:54'),
(17, 'Rakib Islam', 'Good', '2021-05-06 17:55:14', '2021-05-06 17:55:14'),
(20, 'Siam Hasan', 'hahaha ok', '2021-07-20 11:50:16', '2021-07-20 11:50:16');

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
(27, 'Nafi', 'Mahmud', 'Nafi Mahmud Naim', 'nafi@aiub.edu', 'c20ad4d76fe97759aa27a0c99bff6710', '01869510882', 'hi', NULL, '65432', 'Axis Bank', '5000', NULL, '8000', '0', '2000', '88000', NULL, '0', '0', '1620762898.Nafi2.jpg', 'User', '2021-05-04 16:08:32', '2021-05-24 13:54:55'),
(53, NULL, NULL, 'Sadman Islam Jihad', 'sales@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-05-07 03:31:40', '2021-05-07 03:31:40'),
(58, NULL, NULL, 'Nafi Mahmud', 'uzugessy-7559@yopmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-05-07 03:55:35', '2021-05-07 03:55:35'),
(64, NULL, NULL, 'jiyan', 'jiyan@aiub.edu', 'c20ad4d76fe97759aa27a0c99bff6710', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, '', NULL, '2021-05-08 09:08:59', '2021-05-08 14:57:58'),
(68, 'Rahatul', 'Islam', 'Rahatul Islam', 'rahat@aiub.com', 'c20ad4d76fe97759aa27a0c99bff6710', '01869510882', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'User', '2021-07-20 11:52:37', '2021-07-20 11:52:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `customer_balance`
--
ALTER TABLE `customer_balance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`reviewId`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `customer_balance`
--
ALTER TABLE `customer_balance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `reviewId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
