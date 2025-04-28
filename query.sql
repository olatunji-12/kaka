CREATE TABLE Animals (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(100),
  species NVARCHAR(100),
  breed NVARCHAR(100),
  age INT,
  description NVARCHAR(MAX),
  image_url NVARCHAR(255)
);
