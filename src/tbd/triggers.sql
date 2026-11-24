CREATE TRIGGER trg_bitacora_empleados
ON Empleados
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
  INSERT INTO Bitacora (tabla, accion, idRegistro, detalle)
  SELECT
    'Empleados',
    CASE
      WHEN D.idEmpleado IS NULL THEN 'INSERT'
      WHEN I.idEmpleado IS NULL THEN 'DELETE'
      ELSE 'UPDATE'
    END,
    COALESCE(I.idEmpleado, D.idEmpleado),
    CASE
      WHEN D.idEmpleado IS NULL
        THEN 'Se registró un empleado.'
      WHEN I.idEmpleado IS NULL
        THEN 'Se eliminó un empleado.'
      ELSE 'Se modificaron los datos de un empleado.'
    END
  FROM inserted I
  FULL OUTER JOIN deleted D
    ON I.idEmpleado = D.idEmpleado;
END;
GO

CREATE TRIGGER trg_bitacora_ventas
ON Ventas
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
  INSERT INTO Bitacora (tabla, accion, idRegistro, detalle)
  SELECT
    'Ventas',
    CASE
      WHEN D.idVenta IS NULL THEN 'INSERT'
      WHEN I.idVenta IS NULL THEN 'DELETE'
      ELSE 'UPDATE'
    END,
    COALESCE(I.idVenta, D.idVenta),
    CASE
      WHEN D.idVenta IS NULL
        THEN 'Se registró una venta.'
      WHEN I.idVenta IS NULL
        THEN 'Se eliminó una venta.'
      ELSE 'Se modificó una venta.'
    END
  FROM inserted I
  FULL OUTER JOIN deleted D
    ON I.idVenta = D.idVenta;
END;
GO

CREATE TRIGGER trg_bitacora_nominas
ON Nominas
AFTER INSERT
AS
BEGIN
  INSERT INTO Bitacora (tabla, accion, idRegistro, detalle)
  SELECT
    'Nominas',
    'INSERT',
    idNomina,
    'Se generó una nómina para el empleado '
      + CAST(idEmpleado AS VARCHAR(10))
      + '. Sueldo neto: $'
      + CAST(sueldoNeto AS VARCHAR(20))
  FROM inserted;
END;
GO
