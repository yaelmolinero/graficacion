CREATE PROCEDURE generar_nomina
  @idEmpleado INT,
  @fechaInicio DATE,
  @fechaFin DATE
AS
BEGIN
  DECLARE @sueldoBase DECIMAL(10,2);
  DECLARE @numeroVentas INT;
  DECLARE @bonificacion DECIMAL(10,2);
  DECLARE @descuentoSeguro DECIMAL(10,2);
  DECLARE @descuentoAhorro DECIMAL(10,2) = 200;
  DECLARE @sueldoNeto DECIMAL(10,2);

  BEGIN TRY
    BEGIN TRANSACTION;

    SELECT @sueldoBase = sueldoBase
    FROM Empleados
    WHERE idEmpleado = @idEmpleado;

    -- Contar ventas del empleado en el periodo
    SELECT @numeroVentas = COUNT(*)
    FROM Ventas
    WHERE idEmpleado = @idEmpleado
      AND fechaVenta BETWEEN @fechaInicio AND @fechaFin;

    -- Calcular bonificación
    SET @bonificacion =
      CASE
        WHEN @numeroVentas >= 10 THEN 1000
        WHEN @numeroVentas >= 5 THEN 500
        ELSE 0
      END;

    -- Calcular descuentos
    SET @descuentoSeguro = ROUND(@sueldoBase * 0.03, 2);

    -- Calcular sueldo neto
    SET @sueldoNeto =
      @sueldoBase
      + @bonificacion
      - @descuentoSeguro
      - @descuentoAhorro;

    -- Guardar nómina
    INSERT INTO Nominas (
      idEmpleado,
      fechaInicio,
      fechaFin,
      sueldoBase,
      numeroVentas,
      bonificacion,
      descuentoSeguro,
      descuentoAhorro,
      sueldoNeto
    )
    VALUES (
      @idEmpleado,
      @fechaInicio,
      @fechaFin,
      @sueldoBase,
      @numeroVentas,
      @bonificacion,
      @descuentoSeguro,
      @descuentoAhorro,
      @sueldoNeto
    );

    COMMIT TRANSACTION;

    -- Mostrar resultado
    SELECT *
    FROM Nominas
    WHERE idNomina = SCOPE_IDENTITY();

    END TRY

    BEGIN CATCH
      IF XACT_STATE() <> 0 ROLLBACK TRANSACTION;

    THROW;
  END CATCH
END;
GO
