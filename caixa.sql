-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: 10/12/2012 às 23h04min
-- Versão do Servidor: 5.5.28
-- Versão do PHP: 5.3.10-1ubuntu3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `caixa`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `teContas`
--

CREATE TABLE IF NOT EXISTS `teContas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `conta_id` int(11) DEFAULT NULL,
  `NmConta` varchar(100) COLLATE utf8_bin NOT NULL,
  `FgTipo` smallint(1) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teContas_FKIndex1` (`conta_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `teFluxo`
--

CREATE TABLE IF NOT EXISTS `teFluxo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `conta_id` int(11) NOT NULL,
  `DsDescricao` varchar(255) COLLATE utf8_bin NOT NULL,
  `DtFluxo` date NOT NULL,
  `NuValor` float(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teFluxo_FKIndex1` (`conta_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `teUsuario`
--

CREATE TABLE IF NOT EXISTS `teUsuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `NmUsuario` varchar(255) COLLATE utf8_bin NOT NULL,
  `DsEmail` varchar(25) COLLATE utf8_bin NOT NULL,
  `DsSenha` varchar(100) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `teUsuario`
--

INSERT INTO `teUsuario` (`id`, `NmUsuario`, `DsEmail`, `DsSenha`) VALUES
(1, 'Davi', 'davibusanello@gmail.com', 'teste');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
