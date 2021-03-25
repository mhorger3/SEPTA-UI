CREATE TABLE Regional_Rail.Airport(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Chestnut_Hill_East(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Chestnut_Hill_West(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Cynwyd(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Fox_Chase(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Lansdale_Doylestown(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Media_Elwyn(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Manayunk_Norristown(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Paoli_Thorndale(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Trenton(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Warminster(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.Wilmington_Newark(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;

CREATE TABLE Regional_Rail.West_Trenton(
  LATITUDE FLOAT NOT NULL,
  LONGITUDE FLOAT NOT NULL,
  TRAIN_ID INT(6) NOT NULL,
  SERVICE VARCHAR(255) DEFAULT NULL,
  DESTINATION VARCHAR(255) DEFAULT NULL,
  NEXT_STOP VARCHAR(255) DEFAULT NULL,
  ASSIGNED_LINE VARCHAR(255) NOT NULL,
  LATE INT(3) NOT NULL,
  SOURCE VARCHAR(255) DEFAULT NULL,
  TRACK INT(2) DEFAULT NULL,
  RECORD_DATE DATETIME NOT NULL,
  PRIMARY KEY (RECORD_DATE, TRAIN_ID)
)
ENGINE = INNODB;