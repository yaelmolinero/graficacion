CREATE DATABASE negocio;
GO

USE negocio;
GO

CREATE TABLE Empleados (
  idEmpleado INT IDENTITY(1,1) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  sueldoBase DECIMAL(10,2) NOT NULL CHECK (sueldoBase > 0),
  fechaContratacion DATE NOT NULL DEFAULT GETDATE()
);

CREATE TABLE Ventas (
  idVenta INT IDENTITY(1,1) PRIMARY KEY,
  idEmpleado INT NOT NULL REFERENCES Empleados(idEmpleado),
  fechaVenta DATE NOT NULL DEFAULT GETDATE(),
  total DECIMAL(10,2) NOT NULL CHECK(total > 0)
);

CREATE TABLE Nominas (
  idNomina INT IDENTITY(1,1) PRIMARY KEY,
  idEmpleado INT NOT NULL REFERENCES Empleados(idEmpleado),
  fechaInicio DATE NOT NULL,
  fechaFin DATE NOT NULL,

  sueldoBase DECIMAL(10,2) NOT NULL,
  numeroVentas INT NOT NULL,
  bonificacion DECIMAL(10,2) NOT NULL,
  descuentoSeguro DECIMAL(10,2) NOT NULL,
  descuentoAhorro DECIMAL(10,2) NOT NULL,
  sueldoNeto DECIMAL(10,2) NOT NULL,

  fechaRegistro DATETIME NOT NULL DEFAULT GETDATE(),

  CONSTRAINT ck_valores_nominas
    CHECK (
      numeroVentas >= 0
      AND bonificacion >= 0
      AND descuentoSeguro >= 0
      AND descuentoAhorro >= 0
      AND sueldoNeto >= 0
    )
);

CREATE TABLE Bitacora (
  idBitacora INT IDENTITY(1,1) PRIMARY KEY,
  tabla VARCHAR(50) NOT NULL,
  accion VARCHAR(20) NOT NULL,
  idRegistro INT NOT NULL,
  detalle VARCHAR(300),
  fecha DATETIME NOT NULL DEFAULT GETDATE()
);

