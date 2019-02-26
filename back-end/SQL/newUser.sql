CREATE USER 'lambda'@'%' IDENTIFIED BY 'lambda';
GRANT SELECT, INSERT, UPDATE on *.* to 'lambda'@'%' with grant option;
