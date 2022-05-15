
--  SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- create table ItemMappingItemLine(
--     Mapping_Id int PRIMARY KEY IDENTITY(1,1) NOT NULL,
--     Item_Id int not null,
--     Line_Id int not null,
--     FOREIGN KEY (Item_Id) REFERENCES Items(Item_Id),
--     FOREIGN KEY (Line_Id) REFERENCES ItemLine(Line_Id),
--     UNIQUE (Item_Id, Line_Id)
--     )
-- GO
-- create table MachineLineMapping(
--     Mapping_Id int PRIMARY KEY IDENTITY(1,1) NOT NULL,
--     Machine_Id int NOT NULL,
--     Line_Id int NOT NULL,
--     FOREIGN KEY (Machine_Id) REFERENCES Machines(Machine_Id),
--     FOREIGN KEY (Line_Id) REFERENCES ItemLine(Line_Id),
--     UNIQUE (Machine_Id, Line_Id)
-- )
-- create table ItemLine(
--     Id int UNIQUE IDENTITY(1,1) NOT NULL,
--     Line_Id int PRIMARY KEY NOT NULL,
--     Line_Name varchar(100) UNIQUE NOT NULL,
--     [CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL
-- )
-- /*Item table*/
-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[Items](
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[Item_Id] [int] NOT NULL UNIQUE,
-- 	[Item] [NVarChar](255) NOT NULL,
--     [CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL
-- ) ON [PRIMARY]
-- GO
-- -- /*Status Table*/
-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[AllStatus](
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[Status_Id] [int] NOT NULL UNIQUE,
-- 	[Status] [NVarChar](50) NOT NULL,
--     [CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL
-- ) ON [PRIMARY]
-- GO
-- -- /*Machines Table*/
-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[Machines](
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[Machine_Id] [int] NOT NULL UNIQUE,
-- 	[MachineName] [NVarChar](255) NOT NULL,
--     [CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL
-- ) ON [PRIMARY]
-- GO
-- -- /*POType Table*/
-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[POType](
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[POTYPE_Id] [int] NOT NULL UNIQUE,
-- 	[PO_Type] [NVarChar](50) NOT NULL,
--     [CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL
-- ) ON [PRIMARY]
-- GO

-- -- /*SKU Table*/
-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[SKU](
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[SKU_Id] [int] NOT NULL,
-- 	[SKU] [nvarchar] (50) NOT NULL,
-- 	[SKU_Description] [nvarchar](255) NOT NULL,
-- 	[CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL
-- ) ON [PRIMARY]

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[Bays](
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[Bay_ID] [int] NOT NULL,
-- 	[Bay] [nvarchar](50) NOT NULL,
-- 	[CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL
-- ) ON [PRIMARY]
-- GO


-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[DISPProcessOrder](
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[PO_Number] [int] UNIQUE NOT NULL,
-- 	[Item_Id] [int] NOT NULL,
-- 	[SKU_Id] [int] NOT NULL,
-- 	[Dispatch_Quantity] [bigint] NOT NULL,
--     [Party] [nvarchar] (255) NOT NULL,
--     [Truck_Number] [nvarchar] (50) NOT NULL,
--     [Bay_ID] [int] NOT NULL,
-- 	[Status_Id] [int] default 1 NOT NULL,
-- 	[active] [bit] DEFAULT 0 NOT NULL,
-- 	[CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL,
-- 	[ConfirmationTime] [datetime] NULL,
-- ) ON [PRIMARY]
-- GO

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[INWDProcessOrder](
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[PO_Number] [int] UNIQUE NOT NULL,
-- 	[Item_Id] [int] NOT NULL,
-- 	[SKU_Id] [int] NOT NULL,
-- 	[Inward_Quantity] [bigint] NOT NULL,
-- 	[Status_Id] [int] default 1 NOT NULL,
-- 	[active] [bit] DEFAULT 0 NOT NULL,
-- 	[CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL,
-- 	[ConfirmationTime] [datetime] NULL,
-- ) ON [PRIMARY]
-- GO

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[PRODProcessOrder]
-- (
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[PO_Number] [int] UNIQUE NOT NULL,
-- 	[Item_Id] [int] NOT NULL,
-- 	[SKU_Id] [int] NOT NULL,
-- 	[Output_Quantity] [bigint] NOT NULL,
-- 	[Status_Id] [int] default 1 NOT NULL,
--     [active] [bit] DEFAULT 0 NOT NULL,
-- 	[CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL,
-- 	[ConfirmationTime] [datetime] NULL,
-- ) ON [PRIMARY]
-- GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WheatSilos](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[WheatSilo_Id] [nvarchar](50) NOT NULL,
	[Machine_Id] [int] NOT NULL,
	[TotalCapacity] [bigint] NOT NULL,
	[CurrentLoad] [bigint] NULL,
	[Status_Id] [int] DEFAULT 6 NOT NULL,
	[DischargeValve] [nvarchar](50) NOT NULL,
	[Valve_StatusId] [int] DEFAULT 9 NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL
)
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pipeline](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[PipeLine_Id] [nvarchar](50) NOT NULL,
	[Machine_Id] [int] NOT NULL,
	[Status_Id] [int] DEFAULT 6 NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL
)
GO


-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[PackingMachine](
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[PackingMC_Id] [nvarchar] (50) NOT NULL,
-- 	[Machine_Id] [int] NOT NULL,
--     [Status_Id] int DEFAULT 6 NOT NULL,
--     [PO_Number] int NULL,
-- 	[CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL
-- ) ON [PRIMARY]
-- GO

-SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GrinderStorage](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[GStorage_Id] [nvarchar](50) NOT NULL,
	[Machine_Id] [int] NOT NULL,
	[Status_Id] [int] DEFAULT 6 NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL
)
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Grinder](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Grinder_Id] [nvarchar] (50) NOT NULL,
	[Machine_Id] [int] NOT NULL,
	[GrindingCapacity] bigint NOT NULL,
    [Status_Id] int DEFAULT 6 NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FillingSilos](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[FillingSilo_Id] [nvarchar] (50) NOT NULL,
	[Machine_Id] [int] NOT NULL,
	[TotalCapacity] bigint NOT NULL,
    [CurrentLoad] bigint NOT NULL,
	[Status_Id] [int] DEFAULT 6 NOT NULL,
    [DischargeValve] [nvarchar](50) NOT NULL,
	[ValveStatus_Id] [int] DEFAULT 9 NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL
)
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Conveyors](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[Conveyor_Id] [nvarchar](50) NOT NULL,
	[Machine_Id] [int] NOT NULL,
	[ConveyorDesc] [nvarchar](255) NULL,
	[Status_Id] [int] DEFAULT 6 NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL
)
GO

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE TABLE [dbo].[Palletizers](
-- 	[Id] [int] IDENTITY(1,1) NOT NULL,
-- 	[Palletizer_Id] [nvarchar] (50) NOT NULL,
-- 	[Machine_Id] [int] NOT NULL,
--     [Status_Id] int DEFAULT 6 NOT NULL,
--     [PO_Number] int NULL,
-- 	[CreatedDate] [datetime] NOT NULL,
-- 	[LastModifiedDate] [datetime] NULL
-- ) ON [PRIMARY]
-- GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
BEGIN
SET NOCOUNT ON
INSERT [dbo].[Items] ([Item_Id],[Item],[CreatedDate]) VALUES (1,'Wheat',getdate())
INSERT [dbo].[Items] ([Item_Id],[Item],[CreatedDate]) VALUES (2,'Aata',getdate())
INSERT [dbo].[Items] ([Item_Id],[Item],[CreatedDate]) VALUES (3,'Dal1',getdate())
INSERT [dbo].[Items] ([Item_Id],[Item],[CreatedDate]) VALUES (4,'Maida',getdate())
INSERT [dbo].[Items] ([Item_Id],[Item],[CreatedDate]) VALUES (5,'Poha',getdate())
INSERT [dbo].[Items] ([Item_Id],[Item],[CreatedDate]) VALUES (6,'Dal2',getdate())
INSERT [dbo].[Items] ([Item_Id],[Item],[CreatedDate]) VALUES (7,'Chana',getdate())
INSERT [dbo].[Items] ([Item_Id],[Item],[CreatedDate]) VALUES (8,'Dal3',getdate())
END
-- /*Insert into Machines*/
-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- BEGIN
-- SET NOCOUNT ON;
-- INSERT [dbo].[Machines] ([Machine_Id],[MachineName],[CreatedDate]) VALUES (1,'Wheat Silos',getdate())
-- INSERT [dbo].[Machines] ([Machine_Id],[MachineName],[CreatedDate]) VALUES (2,'Pipeline',getdate())
-- INSERT [dbo].[Machines] ([Machine_Id],[MachineName],[CreatedDate]) VALUES (3,'Grinder Storage',getdate())
-- INSERT [dbo].[Machines] ([Machine_Id],[MachineName],[CreatedDate]) VALUES (4,'Grinder',getdate())
-- INSERT [dbo].[Machines] ([Machine_Id],[MachineName],[CreatedDate]) VALUES (5,'Filling Silo',getdate())
-- INSERT [dbo].[Machines] ([Machine_Id],[MachineName],[CreatedDate]) VALUES (6,'Conveyor',getdate())
-- INSERT [dbo].[Machines] ([Machine_Id],[MachineName],[CreatedDate]) VALUES (7,'Packing M/C',getdate())
-- INSERT [dbo].[Machines] ([Machine_Id],[MachineName],[CreatedDate]) VALUES (8,'Palletizer',getdate())
-- END
-- /*Insert into PO Type*/
-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- BEGIN
-- SET NOCOUNT ON;
-- INSERT [dbo].[POType] ([POTYPE_Id],[PO_Type],[CreatedDate]) VALUES (1,'PROD',getdate())
-- INSERT [dbo].[POType] ([POTYPE_Id],[PO_Type],[CreatedDate]) VALUES (2,'INWD',getdate())
-- INSERT [dbo].[POType] ([POTYPE_Id],[PO_Type],[CreatedDate]) VALUES (3,'DISP',getdate())
-- END
-- /*Insert into SKU*/
-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- BEGIN
-- SET NOCOUNT ON;
-- INSERT [dbo].[SKU] ([SKU_Id],[SKU],[SKU_Description],[CreatedDate]) VALUES ('1','SKU1','DD1',getdate())
-- INSERT [dbo].[SKU] ([SKU_Id],[SKU],[SKU_Description],[CreatedDate]) VALUES ('2','SKU2','DD2',getdate())
-- INSERT [dbo].[SKU] ([SKU_Id],[SKU],[SKU_Description],[CreatedDate]) VALUES ('3','SKU3','DD3',getdate())
-- INSERT [dbo].[SKU] ([SKU_Id],[SKU],[SKU_Description],[CreatedDate]) VALUES ('4','SKU4','DD4',getdate())
-- INSERT [dbo].[SKU] ([SKU_Id],[SKU],[SKU_Description],[CreatedDate]) VALUES ('5','SKU5','DD5',getdate())
-- END
-- /*Insert into All Status*/
-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- BEGIN
-- SET NOCOUNT ON;
-- INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate]) VALUES (1,'Open',getdate())
-- INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate]) VALUES (2,'Released',getdate())
-- INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate]) VALUES (3,'Waiting',getdate())
-- INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate]) VALUES (4,'Running',getdate())
-- INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate]) VALUES (5,'On Hold',getdate())
-- INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate]) VALUES (6,'Free',getdate())
-- INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate]) VALUES (7,'Occupied',getdate())
-- INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate])VALUES  (8,'Force Stopped',getdate())
-- END



-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- BEGIN
-- SET NOCOUNT ON;
-- INSERT [dbo].[Bays] ([Bay_Id],[Bay],[CreatedDate]) VALUES (1,'Bay1',getdate())
-- INSERT [dbo].[Bays] ([Bay_Id],[Bay],[CreatedDate]) VALUES (2,'Bay2',getdate())
-- INSERT [dbo].[Bays] ([Bay_Id],[Bay],[CreatedDate]) VALUES (3,'Bay3',getdate())
-- INSERT [dbo].[Bays] ([Bay_Id],[Bay],[CreatedDate]) VALUES (4,'Bay4',getdate())
-- INSERT [dbo].[Bays] ([Bay_Id],[Bay],[CreatedDate]) VALUES (5,'Bay5',getdate())
-- END

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
BEGIN
SET NOCOUNT ON;
INSERT [dbo].[GrinderStorage] ([GStorage_Id],[Machine_Id],[CreatedDate]) VALUES ('GS1',3,getdate())
INSERT [dbo].[GrinderStorage] ([GStorage_Id],[Machine_Id],[CreatedDate]) VALUES ('GS2',3,getdate())
INSERT [dbo].[GrinderStorage] ([GStorage_Id],[Machine_Id],[CreatedDate]) VALUES ('GS3',3,getdate())
INSERT [dbo].[GrinderStorage] ([GStorage_Id],[Machine_Id],[CreatedDate]) VALUES ('GS4',3,getdate())
INSERT [dbo].[GrinderStorage] ([GStorage_Id],[Machine_Id],[CreatedDate]) VALUES ('GS5',3,getdate())
END

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
BEGIN
SET NOCOUNT ON;
INSERT [dbo].[Conveyors] ([Conveyor_Id],[Machine_Id],[ConveyorDesc],[CreatedDate]) VALUES ('C1',6,'CB1',getdate())
INSERT [dbo].[Conveyors] ([Conveyor_Id],[Machine_Id],[ConveyorDesc],[CreatedDate]) VALUES ('C2',6,'CB2',getdate())
INSERT [dbo].[Conveyors] ([Conveyor_Id],[Machine_Id],[ConveyorDesc],[CreatedDate]) VALUES ('C3',6,'CB3',getdate())
INSERT [dbo].[Conveyors] ([Conveyor_Id],[Machine_Id],[ConveyorDesc],[CreatedDate]) VALUES ('C4',6,'CB4',getdate())
INSERT [dbo].[Conveyors] ([Conveyor_Id],[Machine_Id],[ConveyorDesc],[CreatedDate]) VALUES ('C5',6,'CB5',getdate())
END

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
BEGIN
SET NOCOUNT ON;
INSERT [dbo].[Grinder] ([Grinder_Id],[Machine_Id],[GrindingCapacity],[CreatedDate]) VALUES ('G1',4,1000,getdate())
INSERT [dbo].[Grinder] ([Grinder_Id],[Machine_Id],[GrindingCapacity],[CreatedDate]) VALUES ('G2',4,1200,getdate())
INSERT [dbo].[Grinder] ([Grinder_Id],[Machine_Id],[GrindingCapacity],[CreatedDate]) VALUES ('G3',4,1500,getdate())
INSERT [dbo].[Grinder] ([Grinder_Id],[Machine_Id],[GrindingCapacity],[CreatedDate]) VALUES ('G4',4,2000,getdate())
INSERT [dbo].[Grinder] ([Grinder_Id],[Machine_Id],[GrindingCapacity],[CreatedDate]) VALUES ('G5',4,1500,getdate())
END

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- BEGIN
-- SET NOCOUNT ON;
-- INSERT [dbo].[PackingMachine] ([PackingMC_Id],[Machine_Id],[CreatedDate]) VALUES ('MC1',7,getdate())
-- INSERT [dbo].[PackingMachine] ([PackingMC_Id],[Machine_Id],[CreatedDate]) VALUES ('MC2',7,getdate())
-- INSERT [dbo].[PackingMachine] ([PackingMC_Id],[Machine_Id],[CreatedDate]) VALUES ('MC3',7,getdate())
-- INSERT [dbo].[PackingMachine] ([PackingMC_Id],[Machine_Id],[CreatedDate]) VALUES ('MC4',7,getdate())
-- INSERT [dbo].[PackingMachine] ([PackingMC_Id],[Machine_Id],[CreatedDate]) VALUES ('MC5',7,getdate())
-- END

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- BEGIN
-- SET NOCOUNT ON;
-- INSERT [dbo].[Palletizers] ([Palletizer_Id],[Machine_Id],[CreatedDate]) VALUES ('P1',8,getdate())
-- INSERT [dbo].[Palletizers] ([Palletizer_Id],[Machine_Id],[CreatedDate]) VALUES ('P2',8,getdate())
-- INSERT [dbo].[Palletizers] ([Palletizer_Id],[Machine_Id],[CreatedDate]) VALUES ('P3',8,getdate())
-- INSERT [dbo].[Palletizers] ([Palletizer_Id],[Machine_Id],[CreatedDate]) VALUES ('P4',8,getdate())
-- INSERT [dbo].[Palletizers] ([Palletizer_Id],[Machine_Id],[CreatedDate]) VALUES ('P5',8,getdate())
-- END

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
BEGIN
SET NOCOUNT ON;
INSERT [dbo].[WheatSilos] ([WheatSilo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('S1',1,10000,10000,'V1',getdate())
INSERT [dbo].[WheatSilos] ([WheatSilo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('S2',1,13000,6000,'V2',getdate())
INSERT [dbo].[WheatSilos] ([WheatSilo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('S3',1,12000,1000,'V3',getdate())
INSERT [dbo].[WheatSilos] ([WheatSilo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('S4',1,14000,14000,'V4',getdate())
INSERT [dbo].[WheatSilos] ([WheatSilo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('S5',1,10500,1500,'V5',getdate())
END




SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
BEGIN
SET NOCOUNT ON;
INSERT [dbo].[Pipeline] ([PipeLine_Id],[Machine_Id],[CreatedDate]) VALUES ('P1',2,getdate())
INSERT [dbo].[Pipeline] ([PipeLine_Id],[Machine_Id],[CreatedDate]) VALUES ('P2',2,getdate())
INSERT [dbo].[Pipeline] ([PipeLine_Id],[Machine_Id],[CreatedDate]) VALUES ('P3',2,getdate())
INSERT [dbo].[Pipeline] ([PipeLine_Id],[Machine_Id],[CreatedDate]) VALUES ('P4',2,getdate())
INSERT [dbo].[Pipeline] ([PipeLine_Id],[Machine_Id],[CreatedDate]) VALUES ('P5',2,getdate())
END

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
BEGIN
SET NOCOUNT ON;
INSERT [dbo].[FillingSilos] ([FillingSilo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('S1',5,20000,5000,'V1',getdate())
INSERT [dbo].[FillingSilos] ([FillingSilo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('S2',5,12000,4000,'V2',getdate())
INSERT [dbo].[FillingSilos] ([FillingSilo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('S3',5,45000,6000,'V3',getdate())
INSERT [dbo].[FillingSilos] ([FillingSilo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('S4',5,60000,3000,'V4',getdate())
INSERT [dbo].[FillingSilos] ([FillingSilo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('S5',5,23000,5500,'V5',getdate())
END


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER view [dbo].[vw_WheatSilos]
AS
SELECT A.Id,A.WheatSilo_Id,A.Machine_Id,A.TotalCapacity,A.CurrentLoad,A.DischargeValve,A.PO_Number,B.Status
FROM WheatSilos A INNER JOIN AllStatus B
ON A.Status_Id=B.Status_Id
GO


-- CREATE view vw_GrinderStorage
-- AS
-- SELECT A.Id,A.GStorage_Id,A.Machine_Id,A.PO_Number,B.Status
-- FROM GrinderStorage A INNER JOIN AllStatus B
-- ON A.Status_Id=B.Status_Id
-- Go
-- CREATE view vw_Grinder
-- AS
-- SELECT A.Id,A.Grinder_Id,A.Machine_Id,A.GrindingCapacity,A.PO_Number,B.Status
-- FROM Grinder A INNER JOIN AllStatus B
-- ON A.Status_Id=B.Status_Id
-- Go
-- CREATE view vw_Conveyors
-- AS
-- SELECT A.Id,A.Conveyor_Id,A.Machine_Id,A.ConveyorDesc,A.PO_Number,B.Status
-- FROM Conveyors A INNER JOIN AllStatus B
-- ON A.Status_Id=B.Status_Id
-- Go
-- CREATE view vw_PackingMC
-- AS
-- SELECT A.Id,A.PackingMC_Id,A.Machine_Id,A.PO_Number,B.Status
-- FROM PackingMachine A INNER JOIN AllStatus B
-- ON A.Status_Id=B.Status_Id
-- Go
-- CREATE view vw_FillingSilo
-- AS
-- SELECT A.Id,A.FillingSilo_Id,A.Machine_Id,A.TotalCapacity,A.CurrentLoad,A.PO_Number,B.Status
-- FROM FillingSilos A INNER JOIN AllStatus B
-- ON A.Status_Id=B.Status_Id
-- Go

-- CREATE view vw_Palletizer
-- AS
-- SELECT A.Id,A.Palletizer_Id,A.Machine_Id,A.PO_Number,B.Status
-- FROM Palletizers A INNER JOIN AllStatus B
-- ON A.Status_Id=B.Status_Id
-- GO

-- CREATE view [dbo].[vw_Pipeline]
-- AS
-- SELECT A.Id,A.PipeLine_Id,A.Machine_Id,A.PO_Number,B.Status
-- FROM Pipeline A INNER JOIN AllStatus B
-- ON A.Status_Id=B.Status_Id
-- GO

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- create view [dbo].[vw_PoType]
-- AS
-- SELECT A.Id,A.POTYPE_Id,A.PO_Type
-- FROM POType A
-- GO

-- insert into ItemMappingItemLine(Item_Id,Line_Id) values (1,2),(2,1),(4,4)

-- CREATE view vw_MachineLineMapping
-- AS
-- SELECT A.Mapping_Id,B.MachineName,C.Line_Name
-- FROM MachineLineMapping A INNER JOIN Machines B 
-- ON A.Machine_Id=B.Machine_Id
-- INNER JOIN ItemLine C
-- ON A.Line_Id=C.Line_Id 
-- END

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO
-- CREATE view [dbo].[vw_ItemMachineItemLine]
-- AS
-- SELECT A.Item_Id,B.Machine_Id,C.Item,D.MachineName
-- FROM ItemMappingItemLine A INNER JOIN MachineLineMapping B 
-- ON A.Line_Id=B.Line_Id
-- Inner Join Items C
-- on A.Item_Id=C.Item_Id
-- INNER JOIN Machines D
-- ON B.Machine_Id=D.Machine_Id

-- insert into MachineLineMapping (Machine_Id,Line_Id) Values (1,1),(2,1),(3,1),(4,5),(5,3),(6,1),(4,1),(5,1)
-- insert into ItemLine (Line_Id,Line_Name,CreatedDate) Values (1,'Aata Line',getdate()),(2,'Wheat Line',getdate()),(3,'Suji Line',getdate()),(4,'Maida Line',getdate()),(5,'Besan Line',getdate())

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO

-- CREATE PROCEDURE [dbo].[sp_InsertPRODProcessOrder]
-- @PO_Number INT,
-- @Item NVARCHAR (255),
-- @SKU NVARCHAR (50),
-- @Output_Quantity BIGINT
-- AS
-- BEGIN
-- -- SET NOCOUNT ON added to prevent extra result sets from
-- -- interfering with SELECT statements.
-- SET NOCOUNT ON;
-- INSERT INTO [dbo].[PRODProcessOrder](PO_Number,Item_Id,SKU_Id,Output_Quantity,CreatedDate)
-- VALUES (@PO_Number,(SELECT  Item_Id FROM Items WHERE Item=@Item),(SELECT SKU_Id FROM SKU WHERE SKU=@SKU),@Output_Quantity,getdate())
-- END
-- GO

-- DECLARE @RC int
-- DECLARE @PO_Number int
-- DECLARE @Item nvarchar(255)
-- DECLARE @SKU nvarchar(50)
-- DECLARE @Output_Quantity bigint

-- -- TODO: Set parameter values here.
-- EXECUTE @RC = [dbo].[sp_InsertPRODProcessOrder] 
--    @PO_Number=101
--   ,@Item='Aata'
--   ,@SKU='SKU1'
--   ,@Output_Quantity=2000
-- GO

-- DECLARE @RC int
-- DECLARE @PO_Number int
-- DECLARE @Item nvarchar(255)
-- DECLARE @SKU nvarchar(50)
-- DECLARE @Output_Quantity bigint

-- -- TODO: Set parameter values here.
-- EXECUTE @RC = [dbo].[sp_InsertPRODProcessOrder] 
--    @PO_Number=102
--   ,@Item='Maida'
--   ,@SKU='SKU2'
--   ,@Output_Quantity=1400
-- GO

-- DECLARE @RC int
-- DECLARE @PO_Number int
-- DECLARE @Item nvarchar(255)
-- DECLARE @SKU nvarchar(50)
-- DECLARE @Output_Quantity bigint

-- -- TODO: Set parameter values here.
-- EXECUTE @RC = [dbo].[sp_InsertPRODProcessOrder] 
--    @PO_Number=103
--   ,@Item='Aata'
--   ,@SKU='SKU3'
--   ,@Output_Quantity=5000
-- GO

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER view [dbo].[vw_PRODProcessOrder]
AS 
SELECT A.Id, CONVERT(varchar,A.CreatedDate,100) as Date,A.PO_Number,B.[Item],C.[SKU],C.[SKU_Description],A.Output_Quantity,D.[Status],A.[active]
,CONVERT(varchar,A.ConfirmationTime,100) as ConfirmationTIme
FROM [dbo].[PRODProcessOrder] A INNER JOIN [dbo].[Items] B
ON A.[Item_Id]= B.[Item_Id]
INNER JOIN [dbo].[SKU] C 
ON A.[SKU_Id]= C.[SKU_Id]
INNER JOIN [dbo].[AllStatus] D
ON A.[Status_Id] = D.[Status_Id]
GO

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO

-- CREATE view [dbo].[vw_ItemMappingItemLine]
-- AS
-- SELECT A.Mapping_Id,B.Item,C.Line_Name
-- FROM ItemMappingItemLine A INNER JOIN Items B 
-- ON A.Item_Id=B.Item_Id
-- INNER JOIN ItemLine C
-- ON A.Line_Id=C.Line_Id 
-- GO

-- SET ANSI_NULLS ON
-- GO
-- SET QUOTED_IDENTIFIER ON
-- GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_InsertINWDProcessOrder]
@PO_Number INT,
@Item NVARCHAR (255),
@SKU NVARCHAR (50),
@Inward_Quantity BIGINT
AS
BEGIN
-- SET NOCOUNT ON added to prevent extra result sets from
-- interfering with SELECT statements.
SET NOCOUNT ON;
INSERT INTO [dbo].[INWDProcessOrder](PO_Number,Item_Id,SKU_Id,Inward_Quantity,CreatedDate)
VALUES (@PO_Number,(SELECT  Item_Id FROM Items WHERE Item=@Item),(SELECT SKU_Id FROM SKU WHERE SKU=@SKU),@Inward_Quantity,getdate())
END
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER view [dbo].[vw_INWDProcessOrder]
AS 
SELECT A.Id, CONVERT(varchar,A.CreatedDate,100) as Date,A.PO_Number,B.[Item],C.[SKU],C.[SKU_Description],A.Inward_Quantity,D.[Status],A.[active],
CONVERT(varchar,A.ConfirmationTime,100) as ConfirmationTime
FROM [dbo].[INWDProcessOrder] A INNER JOIN [dbo].[Items] B
ON A.[Item_Id]= B.[Item_Id]
INNER JOIN [dbo].[SKU] C 
ON A.[SKU_Id]= C.[SKU_Id]
INNER JOIN [dbo].[AllStatus] D
ON A.[Status_Id] = D.[Status_Id]
GO



SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[sp_updateAataLineMachineAllocation]
	@WheatSilo_Id NVARCHAR(50),@PipeLine_Id NVARCHAR(50),@GStorage_Id NVARCHAR(50),@Grinder_Id NVARCHAR(50),@FillingSilo_Id NVARCHAR(50),
    @Conveyor_Id NVARCHAR(50),@Status NVARCHAR(50),@StatusPO NVARCHAR(50),@PO_Number int,@Quant BIGINT
AS
BEGIN

	SET NOCOUNT ON;
	update A 
	Set A.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@Status),A.PO_Number=@PO_Number,A.CurrentLoad=
    (SELECT [CurrentLoad] FROM [dbo].[WheatSilos] WHERE [WheatSilo_Id]=@WheatSilo_Id)-@Quant
	from dbo.WheatSilos A
	where WheatSilo_Id = @WheatSilo_Id
    update B
    SET B.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@Status),B.PO_Number=@PO_Number
    FROM dbo.Pipeline B
    where PipeLine_Id=@PipeLine_Id
	update C
    SET C.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@Status),C.PO_Number=@PO_Number
    FROM dbo.Grinder C
    where Grinder_Id=@Grinder_Id
	update D
    SET D.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@Status),D.PO_Number=@PO_Number
    FROM dbo.GrinderStorage D
    where GStorage_Id=@GStorage_Id
	update E
    SET E.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@Status),E.PO_Number=@PO_Number
    FROM dbo.Conveyors E
    where Conveyor_Id=@Conveyor_Id
	update F
    SET F.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@Status),F.PO_Number=@PO_Number
    FROM dbo.FillingSilos F
    where FillingSilo_Id=@FillingSilo_Id
    update G
    SET G.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@StatusPO)
    FROM dbo.PRODProcessOrder G
    WHERE PO_Number=@PO_Number
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_InsertExecutedPRODPO]
@PO_Number int
AS
BEGIN
-- SET NOCOUNT ON added to prevent extra result sets from
-- interfering with SELECT statements.
SET NOCOUNT ON;
UPDATE [dbo].[PRODProcessOrder] SET active=1,ConfirmationTime=GETDATE() where PO_Number=@PO_Number
END
GO

INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate])VALUES (8,'Force Stopped',getdate()),(9,'Closed',getdate())




SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ChangePRODPOStatus]
@PO_Number int,
@Status NVARCHAR(50)
AS
BEGIN
-- SET NOCOUNT ON added to prevent extra result sets from
-- interfering with SELECT statements.
SET NOCOUNT ON;
UPDATE [dbo].[PRODProcessOrder] SET Status_Id=(Select Status_Id from AllStatus where [Status]=@Status), active=0,ConfirmationTime=NULL where PO_Number=@PO_Number
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_InwdWheatSilo]
	@WheatSilo_Id NVARCHAR(50),@Status NVARCHAR(50),@StatusPO NVARCHAR(50),@PO_Number int,@Quant BIGINT
AS
BEGIN

	SET NOCOUNT ON;
	update A 
	Set A.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@Status),A.PO_Number=@PO_Number,A.CurrentLoad=
    (SELECT [CurrentLoad] FROM [dbo].[WheatSilos] WHERE [WheatSilo_Id]=@WheatSilo_Id)+@Quant
	from dbo.WheatSilos A
	where WheatSilo_Id = @WheatSilo_Id
    update G
    SET G.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@StatusPO)
    FROM dbo.INWDProcessOrder G
    WHERE PO_Number=@PO_Number
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE view [dbo].[vw_DISPProcessOrder]
AS 
SELECT A.Id, CONVERT(varchar,A.CreatedDate,100) as Date,A.PO_Number,B.[Item],C.[SKU],C.[SKU_Description],A.[Dispatch_Quantity],A.[Party],A.[Truck_Number],
E.[Bay],D.[Status],A.[active],CONVERT(varchar,A.ConfirmationTime,100) as ConfirmationTime
FROM [dbo].[DISPProcessOrder] A INNER JOIN [dbo].[Items] B
ON A.[Item_Id]= B.[Item_Id]
INNER JOIN [dbo].[SKU] C 
ON A.[SKU_Id]= C.[SKU_Id]
INNER JOIN [dbo].[AllStatus] D
ON A.[Status_Id] = D.[Status_Id]
INNER JOIN [dbo].[Bays] E 
ON A.[Bay_ID]=E.[Bay_ID]
GO


DECLARE @RC int
DECLARE @PO_Number int
DECLARE @Item nvarchar(255)
DECLARE @SKU nvarchar(50)
DECLARE @Inward_Quantity bigint

-- TODO: Set parameter values here.

EXECUTE @RC = [dbo].[sp_InsertINWDProcessOrder] 
   @PO_Number=200
  ,@Item='Dal1'
  ,@SKU='SKU1'
  ,@Inward_Quantity=4000
GO
DECLARE @RC int
DECLARE @PO_Number int
DECLARE @Item nvarchar(255)
DECLARE @SKU nvarchar(50)
DECLARE @Inward_Quantity bigint

-- TODO: Set parameter values here.

EXECUTE @RC = [dbo].[sp_InsertINWDProcessOrder] 
   @PO_Number=201
  ,@Item="Dal2"
  ,@SKU='SKU2'
  ,@Inward_Quantity=3000
GO
DECLARE @RC int
DECLARE @PO_Number int
DECLARE @Item nvarchar(255)
DECLARE @SKU nvarchar(50)
DECLARE @Inward_Quantity bigint

-- TODO: Set parameter values here.

EXECUTE @RC = [dbo].[sp_InsertINWDProcessOrder] 
   @PO_Number=203
  ,@Item='Wheat'
  ,@SKU='SKU3'
  ,@Inward_Quantity=5000
GO
DECLARE @RC int
DECLARE @PO_Number int
DECLARE @Item nvarchar(255)
DECLARE @SKU nvarchar(50)
DECLARE @Inward_Quantity bigint

-- TODO: Set parameter values here.

EXECUTE @RC = [dbo].[sp_InsertINWDProcessOrder] 
   @PO_Number=204
  ,@Item='Chana'
  ,@SKU='SKU4'
  ,@Inward_Quantity=2500
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ChangeINWDPOStatus]
@PO_Number int,
@Status NVARCHAR(50)
AS
BEGIN
-- SET NOCOUNT ON added to prevent extra result sets from
-- interfering with SELECT statements.
SET NOCOUNT ON;
UPDATE [dbo].[INWDProcessOrder] SET Status_Id=(Select Status_Id from AllStatus where [Status]=@Status), active=0,ConfirmationTime=NULL where PO_Number=@PO_Number
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_InsertExecutedINWDPO]
@PO_Number int
AS
BEGIN
-- SET NOCOUNT ON added to prevent extra result sets from
-- interfering with SELECT statements.
SET NOCOUNT ON;
UPDATE [dbo].[INWDProcessOrder] SET Status_Id=2,active=1,ConfirmationTime=GETDATE() where PO_Number=@PO_Number
END
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AATAPRODPOMapping](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[PO_Number] INT NOT NULL,
	[WheatSilo_Id] [nvarchar](50) NOT NULL,
	[PipeLine_Id] [nvarchar](50) NOT NULL,
	[GStorage_Id] [nvarchar](50) NOT NULL,
	[Grinder_Id] [nvarchar](50) NOT NULL,
	[FillingSilo_Id] [nvarchar](50) NOT NULL,
	[Conveyor_Id] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL
)
GO