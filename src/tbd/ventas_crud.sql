CREATE PROCEDURE insertar_venta
  @idEmpleado INT,
  @fechaVenta DATE,
  @total DECIMAL(10,2)
AS
BEGIN
  INSERT INTO Ventas (idEmpleado, fechaVenta, total)
  VALUES (@idEmpleado, @fechaVenta, @total);
END;
GO

CREATE PROCEDURE consultar_ventas
AS
BEGIN
  SELECT
    V.idVenta,
    E.nombre,
    E.apellido1,
    E.apellido2,
    V.fechaVenta,
    V.total
  FROM Ventas V
  INNER JOIN Empleados E
    ON V.idEmpleado = E.idEmpleado
  ORDER BY V.fechaVenta DESC;
END;
GO

CREATE PROCEDURE consultar_ventas_empleado
  @idEmpleado INT
AS
BEGIN
  SELECT *
  FROM Ventas
  WHERE idEmpleado = @idEmpleado
  ORDER BY fechaVenta DESC;
END;
GO

CREATE PROCEDURE actualizar_venta
  @idVenta INT,
  @idEmpleado INT,
  @fechaVenta DATE,
  @total DECIMAL(10,2)
AS
BEGIN
  UPDATE Ventas
  SET
    idEmpleado = @idEmpleado,
    fechaVenta = @fechaVenta,
    total = @total
  WHERE idVenta = @idVenta;
END;
GO

CREATE PROCEDURE eliminar_venta
  @idVenta INT
AS
BEGIN
  DELETE FROM Ventas
  WHERE idVenta = @idVenta;
END;
GO
