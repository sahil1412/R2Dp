SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ChangeDISPPOStatus]
@PO_Number int,
@Status NVARCHAR(50)
AS
BEGIN
-- SET NOCOUNT ON added to prevent extra result sets from
-- interfering with SELECT statements.
SET NOCOUNT ON;
UPDATE [dbo].[DISPProcessOrder] SET Status_Id=(Select Status_Id from AllStatus where [Status]=@Status), active=0,ConfirmationTime=NULL where PO_Number=@PO_Number
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_InsertDISPProcessOrder]
@PO_Number INT,
@Item NVARCHAR (255),
@SKU NVARCHAR (50),
@Dispatch_Quantity BIGINT,
@Party NVARCHAR(255),
@Truck_Number NVARCHAR(50),
@Bay NVARCHAR(50)
AS
BEGIN
-- SET NOCOUNT ON added to prevent extra result sets from
-- interfering with SELECT statements.
SET NOCOUNT ON;
INSERT INTO [dbo].[DISPProcessOrder](PO_Number,Item_Id,SKU_Id,Dispatch_Quantity,Party,Truck_Number,Bay_Id,CreatedDate)
VALUES (@PO_Number,(SELECT  Item_Id FROM Items WHERE Item=@Item),(SELECT SKU_Id FROM SKU WHERE SKU=@SKU),@Dispatch_Quantity,@Party,@Truck_Number,
(SELECT Bay_Id FROM Bays WHERE Bay=@Bay),getdate())
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_InsertExecutedDISPPO]
@PO_Number int
AS
BEGIN
-- SET NOCOUNT ON added to prevent extra result sets from
-- interfering with SELECT statements.
SET NOCOUNT ON;
UPDATE [dbo].[DISPProcessOrder] SET Status_Id=2,active=1,ConfirmationTime=GETDATE() where PO_Number=@PO_Number
END
GO

DECLARE @RC int
DECLARE @PO_Number int
DECLARE @Item nvarchar(255)
DECLARE @SKU nvarchar(50)
DECLARE @Dispatch_Quantity bigint
DECLARE @Party nvarchar(255)
DECLARE @Truck_Number nvarchar(50)
DECLARE @Bay nvarchar(50)

-- TODO: Set parameter values here.

EXECUTE @RC = [dbo].[sp_InsertDISPProcessOrder] 
   @PO_Number=300
  ,@Item='Aata'
  ,@SKU='SKU1'
  ,@Dispatch_Quantity=2000
  ,@Party='ABC'
  ,@Truck_Number='T1001'
  ,@Bay='Bay1'
GO

DECLARE @RC int
DECLARE @PO_Number int
DECLARE @Item nvarchar(255)
DECLARE @SKU nvarchar(50)
DECLARE @Dispatch_Quantity bigint
DECLARE @Party nvarchar(255)
DECLARE @Truck_Number nvarchar(50)
DECLARE @Bay nvarchar(50)

-- TODO: Set parameter values here.

EXECUTE @RC = [dbo].[sp_InsertDISPProcessOrder] 
   @PO_Number=301
  ,@Item='Dal1'
  ,@SKU='SKU2'
  ,@Dispatch_Quantity=1200
  ,@Party='XYZ'
  ,@Truck_Number='T2001'
  ,@Bay='Bay2'
GO

CREATE TABLE Dal1Silos(
    [Id] [INT] NOT NULL PRIMARY KEY IDENTITY(1,1),
    [Dal1Silo_Id] [NVARCHAR](50) NOT NULL,
    [Machine_Id] [int] NOT NULL,
	[TotalCapacity] [bigint] NOT NULL,
	[CurrentLoad] [bigint] NULL,
	[Status_Id] [int] DEFAULT 6 NOT NULL,
	[DischargeValve] [nvarchar] (50) NOT NULL,
	[PO_Number] [int] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL
)
CREATE TABLE Dal2Silos(
    [Id] [INT] NOT NULL PRIMARY KEY IDENTITY(1,1),
    [Dal2Silo_Id] [NVARCHAR](50) NOT NULL,
    [Machine_Id] [int] NOT NULL,
	[TotalCapacity] [bigint] NOT NULL,
	[CurrentLoad] [bigint] NULL,
	[Status_Id] [int] DEFAULT 6 NOT NULL,
	[DischargeValve] [nvarchar] (50) NOT NULL,
	[PO_Number] [int] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL
)
CREATE TABLE Dal3Silos(
    [Id] [INT] NOT NULL PRIMARY KEY IDENTITY(1,1),
    [Dal3Silo_Id] [NVARCHAR](50) NOT NULL,
    [Machine_Id] [int] NOT NULL,
	[TotalCapacity] [bigint] NOT NULL,
	[CurrentLoad] [bigint] NULL,
	[Status_Id] [int] DEFAULT 6 NOT NULL,
	[DischargeValve] [nvarchar] (50) NOT NULL,
	[PO_Number] [int] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL
)

insert into Machines(Machine_Id,MachineName,CreatedDate) VALUES (9,'Dal1Silos',GETDATE()),
(10,'Dal2Silos',GETDATE()),(11,'Dal3Silos',GETDATE())

INSERT [dbo].[Dal1Silos] ([Dal1Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS1',9,10000,10000,'V1',getdate())
INSERT [dbo].[Dal1Silos] ([Dal1Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS2',9,13000,6000,'V2',getdate())
INSERT [dbo].[Dal1Silos] ([Dal1Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS3',9,12000,1000,'V3',getdate())
INSERT [dbo].[Dal1Silos] ([Dal1Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS4',9,14000,14000,'V4',getdate())
INSERT [dbo].[Dal1Silos] ([Dal1Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS5',9,10500,1500,'V5',getdate())

INSERT [dbo].[Dal2Silos] ([Dal2Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS1',10,10000,10000,'V1',getdate())
INSERT [dbo].[Dal2Silos] ([Dal2Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS2',10,13000,6000,'V2',getdate())
INSERT [dbo].[Dal2Silos] ([Dal2Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS3',10,12000,1000,'V3',getdate())
INSERT [dbo].[Dal2Silos] ([Dal2Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS4',10,14000,14000,'V4',getdate())
INSERT [dbo].[Dal2Silos] ([Dal2Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS5',10,10500,1500,'V5',getdate())

INSERT [dbo].[Dal3Silos] ([Dal3Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS1',11,10000,10000,'V1',getdate())
INSERT [dbo].[Dal3Silos] ([Dal3Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS2',11,13000,6000,'V2',getdate())
INSERT [dbo].[Dal3Silos] ([Dal3Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS3',11,12000,1000,'V3',getdate())
INSERT [dbo].[Dal3Silos] ([Dal3Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS4',11,14000,14000,'V4',getdate())
INSERT [dbo].[Dal3Silos] ([Dal3Silo_Id],[Machine_Id],[TotalCapacity],[CurrentLoad],[DischargeValve],[CreatedDate]) VALUES ('DS5',11,10500,1500,'V5',getdate())


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[vw_Dal1Silos]
AS
SELECT A.Id,A.Dal1Silo_Id,A.Machine_Id,A.TotalCapacity,A.CurrentLoad,A.DischargeValve,A.PO_Number,B.Status
FROM Dal1Silos A INNER JOIN AllStatus B
ON A.Status_Id=B.Status_Id
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[vw_Dal2Silos]
AS
SELECT A.Id,A.Dal2Silo_Id,A.Machine_Id,A.TotalCapacity,A.CurrentLoad,A.DischargeValve,A.PO_Number,B.Status
FROM Dal2Silos A INNER JOIN AllStatus B
ON A.Status_Id=B.Status_Id
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[vw_Dal3Silos]
AS
SELECT A.Id,A.Dal3Silo_Id,A.Machine_Id,A.TotalCapacity,A.CurrentLoad,A.DischargeValve,A.PO_Number,B.Status
FROM Dal3Silos A INNER JOIN AllStatus B
ON A.Status_Id=B.Status_Id
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[vw_WheatSiloStatus]
AS
SELECT A.WheatSilo_Id,A.CurrentLoad,B.Output_Quantity,C.Inward_Quantity
FROM [dbo].[WheatSilos] A INNER JOIN [dbo].[PRODProcessOrder] B
ON A.PO_Number=B.PO_Number
INNER JOIN [dbo].[INWDProcessOrder] C 
ON A.PO_Number=C.PO_Number
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RejectPalletModification](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[PO_Number] [int] UNIQUE NOT NULL,
	[SKU_Id] [int] NOT NULL,
	[PalletId] [varchar](50) NOT NULL,
	[MES_Qty] [bigint] NOT NULL,
	[Check_Qty] [bigint] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[LastModifiedDate] [datetime] NULL,
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_InsertRejectedPalletQty]
@PO_Number INT,
@SKU NVARCHAR (50),
@PalletId VARCHAR(50),
@MES_Qty BIGINT,
@Check_Qty BIGINT
AS
BEGIN
-- SET NOCOUNT ON added to prevent extra result sets from
-- interfering with SELECT statements.
SET NOCOUNT ON;
INSERT INTO [dbo].[RejectPalletModification](PO_Number,SKU_Id,PalletId,MES_Qty,Check_Qty,CreatedDate)
VALUES (@PO_Number,(SELECT SKU_Id FROM SKU WHERE SKU=@SKU),@PalletId,@MES_Qty,@Check_Qty,getdate())
END
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE view [dbo].[vw_RejectedPalletQty]
AS 
SELECT A.Id, CONVERT(varchar,A.CreatedDate,100) as Date,A.PO_Number,B.[SKU],B.[SKU_Description],A.PalletId,A.MES_Qty,A.Check_Qty,
CONVERT(varchar,A.LastModifiedDate,100) as UpdatedDate
FROM [dbo].[RejectPalletModification] A
INNER JOIN [dbo].[SKU] B
ON A.[SKU_Id]= B.[SKU_Id]
GO



SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AataPOAllocation](
	[Id] [int] PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[PO_Number] [int] NOT NULL,
	[WheatSilo_Id] [nvarchar](50) NOT NULL,
	[PipeLine_Id] [nvarchar](50) NOT NULL,
	[GStorage_Id] [nvarchar](50) NOT NULL,
	[Grinder_Id] [nvarchar](50) NOT NULL,
	[FillingSilo_Id] [nvarchar](50) NOT NULL,
	[Conveyor_Id] [nvarchar](50) NOT NULL,
	[ProdQuantity] [bigint] NOT NULL,
	[CreatedDate] [datetime] NOT NULL
) 

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[sp_InsertAataPOAllocation]
@PO_Number INT,
@WheatSilo_Id NVARCHAR (50),
@PipeLine_Id NVARCHAR (50),
@GStorage_Id NVARCHAR (50),
@Grinder_Id NVARCHAR (50),
@FillingSilo_Id NVARCHAR (50),
@Conveyor_Id NVARCHAR (50),
@Quant BIGINT
AS
BEGIN
INSERT INTO [dbo].[AataPOAllocation](PO_Number,WheatSilo_Id,PipeLine_Id,GStorage_Id,Grinder_Id,FillingSilo_Id,Conveyor_Id,ProdQuantity,CreatedDate)
VALUES (@PO_Number,@WheatSilo_Id,@PipeLine_Id,@GStorage_Id,@Grinder_Id,@FillingSilo_Id,@Conveyor_Id,@Quant,getdate())
END
GO



SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE view [dbo].[vw_AataPOAllocation]
AS 
SELECT A.Id, CONVERT(varchar,A.CreatedDate,100) as Date,A.PO_Number,A.ProdQuantity,
(SELECT Status FROM dbo.[AllStatus] where [Status_Id]=B.Status_Id )as WheatSilo,
(SELECT Status FROM dbo.[AllStatus] where [Status_Id]=C.Status_Id )as Pipeline,
(SELECT Status FROM dbo.[AllStatus] where [Status_Id]=D.Status_Id )as GrinderStorage,
(SELECT Status FROM dbo.[AllStatus] where [Status_Id]=E.Status_Id )as Grinder,
(SELECT Status FROM dbo.[AllStatus] where [Status_Id]=F.Status_Id )as FillingSilo,
(SELECT Status FROM dbo.[AllStatus] where [Status_Id]=G.Status_Id )as Conveyor
FROM [dbo].[AataPOAllocation] A INNER JOIN [dbo].[WheatSilos] B
ON A.[WheatSilo_Id]= B.[WheatSilo_Id]
INNER JOIN [dbo].[Pipeline] C
ON A.[PipeLine_Id]=C.[PipeLine_Id]
INNER JOIN [dbo].[GrinderStorage] D
ON A.[GStorage_Id]=D.[GStorage_Id]
INNER JOIN [dbo].[Grinder] E
ON A.[Grinder_Id]=E.[Grinder_Id]
INNER JOIN [dbo].[FillingSilos] F
ON A.[FillingSilo_Id]=F.[FillingSilo_Id]
INNER JOIN [dbo].[Conveyors] G
ON A.[Conveyor_Id]=G.[Conveyor_Id]
GO



SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
BEGIN
SET NOCOUNT ON;
INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate])VALUES  (9,'Closed',getdate())
INSERT [dbo].[AllStatus] ([Status_Id],[Status],[CreatedDate])VALUES  (10,'Breakdown',getdate())
END

update WheatSilos set Status_Id=6,CurrentLoad=10000 where WheatSilo_Id='S1'
update FillingSilos set Status_Id=6 where FillingSilo_Id='S1'
update Conveyors set Status_Id=6 where Conveyor_Id='C1'
update Pipeline set Status_Id=6 where PipeLine_Id='P1'
update GrinderStorage set Status_Id=6 where GStorage_Id='GS1'
update Grinder set Status_Id=6 where Grinder_Id='G1'

update PRODProcessOrder set Status_Id=1 where PO_Number=101

SET ANSI_NULLS ON
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[sp_InwdWheatSilo]
	@WheatSilo_Id NVARCHAR(50),@Status NVARCHAR(50),@StatusPO NVARCHAR(50),@PO_Number int,@Quant BIGINT
AS
BEGIN

	SET NOCOUNT ON;
	update A 
	Set A.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@Status),A.CurrentLoad=
    (SELECT [CurrentLoad] FROM [dbo].[WheatSilos] WHERE [WheatSilo_Id]=@WheatSilo_Id)+@Quant
	from dbo.WheatSilos A
	where WheatSilo_Id = @WheatSilo_Id
    update B
    SET B.Status_Id = (SELECT [Status_Id] FROM [dbo].[AllStatus] WHERE [Status]=@StatusPO)
    FROM dbo.INWDProcessOrder B
    WHERE PO_Number=@PO_Number
	insert into dbo.[WheatInwdPOAllocation](PO_Number,WheatSilo_Id,InwdQuantity,CreatedDate) VALUES(@PO_Number,@WheatSilo_Id,@Quant,GETDATE())
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WheatInwdPOAllocation](
	[Id] [int] PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[PO_Number] [int] NOT NULL,
	[WheatSilo_Id] [nvarchar](50) NOT NULL,
	[InwdQuantity] [bigint] NOT NULL,
	[CreatedDate] [datetime] NOT NULL
)
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER view [dbo].[vw_WheatSiloStatus]
AS
SELECT A.WheatSilo_Id,(A.CurrentLoad+B.ProdQuantity-C.InwdQuantity) as InitialWeight,C.InwdQuantity,B.ProdQuantity,A.CurrentLoad
FROM [dbo].[WheatSilos] A INNER JOIN [dbo].[AataPOAllocation] B
ON A.WheatSilo_Id=B.WheatSilo_Id
INNER JOIN [dbo].[WheatInwdPOAllocation] C 
ON A.WheatSilo_Id=C.WheatSilo_Id
GO

