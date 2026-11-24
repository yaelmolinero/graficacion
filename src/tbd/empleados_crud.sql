CREATE PROCEDURE insertar_empleado
  @nombre VARCHAR(100),
  @apellido1 VARCHAR(100),
  @apellido2 VARCHAR(100),
  @sueldoBase DECIMAL(10,2)
AS
BEGIN
  INSERT INTO Empleados (nombre, apellido1, apellido2, sueldoBase)
  VALUES (@nombre, @apellido1, @apellido2, @sueldoBase);
END;
GO

CREATE PROCEDURE consultar_empleados
AS
BEGIN
  SELECT *
  FROM Empleados
  ORDER BY idEmpleado;
END;
GO

CREATE PROCEDURE consultar_empleado
  @idEmpleado INT
AS
BEGIN
  SELECT *
  FROM Empleados
  WHERE idEmpleado = @idEmpleado;
END;
GO

CREATE PROCEDURE actualizar_empleado
  @idEmpleado INT,
  @nombre VARCHAR(100),
  @apellido1 VARCHAR(100),
  @apellido2 VARCHAR(100),
  @sueldoBase DECIMAL(10,2)
AS
BEGIN
  UPDATE Empleados
  SET
    nombre = @nombre,
    apellido1 = @apellido1,
    apellido2 = @apellido2,
    sueldoBase = @sueldoBase
  WHERE idEmpleado = @idEmpleado;
END;
GO

CREATE PROCEDURE eliminar_empleado
  @idEmpleado INT
AS
BEGIN
  DELETE FROM Empleados
  WHERE idEmpleado = @idEmpleado;
END;
GO
