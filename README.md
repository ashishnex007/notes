if u get problems with sql


mysql> use mysql;
 Database changed
 mysql> select * from  user;
 Empty set (0.00 sec)
 mysql> truncate table user;
 Query OK, 0 rows affected (0.00 sec)
 mysql> flush privileges;
 Query OK, 0 rows affected (0.01 sec)
 mysql> grant all privileges on *.* to root@localhost identified by 'YourNewPassword' with grant option;
 Query OK, 0 rows affected (0.01 sec)



 mysql> grant all privileges on *.* to root@localhost identified by '' with grant option;
    Query OK, 0 rows affected (0.01 sec)*
    mysql> flush privileges;
    Query OK, 0 rows affected (0.00 sec)



     mysql> select host, user from user;
+-----------+------+
| host      | user |
+-----------+------+
| localhost | root |
+-----------+------+
1 row in set (0.00 sec)
 mysql> quit;

 mysql -u root -pYourNewPassword


 then it would work 
 that too fine!!!


 LINKS =>
 https://stackoverflow.com/questions/2995054/access-denied-for-user-rootlocalhost-using-passwordno

 https://stackoverflow.com/questions/23950722/how-to-overcome-error-1045-28000-access-denied-for-user-odbclocalhost-u