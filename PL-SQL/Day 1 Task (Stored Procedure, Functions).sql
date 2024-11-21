Create database Anime_Store; 
use Anime_Store;

Create table Products (
ProductID numeric(10),
ProductName varchar(20),
Quantity numeric(10),
Price numeric(10)
);

insert into Products values
(502,'Gaara Tshirt', 41, 549), (503,'Kazuma Tshirt', 23, 399),
(504,'Kurosaki Tshirt', 44, 299), (505,'Nanami Tshirt', 27, 349),
(506,'Bankai Tshirt', 30, 799), (507,'Toji Tshirt', 17, 699);

insert into Products values
(508,'Zenitsu Tshirt', 61, 849), (509,'Takamura Tshirt', 22, 699);

Select * from Products;

/*-------- Stored procedure to get product based on the product ID -------*/
DELIMITER //
create procedure getProd(IN id int)
begin
select * from Products where ProductID = id;
end //

call getProd(502);

/*-------- Stored procedure to get all products --------*/
DELIMITER //
create procedure getAllProducts()
begin 
select * from Products;
end //

call getAllProducts;

create function getHighPrice(rate int)
returns varchar(30)
deterministic
begin 
select * from Products where price>rate;
return 
end;

/*--------- Function Basics---------*/
DELIMITER //
create function addNumbers(num1 numeric, num2 numeric)
returns numeric
deterministic
begin
declare output numeric;
set output = num1 + num2;
return output;
end //
DELIMITER 
select addNumbers(50,10);

/*--------- Function to get products that are greater than the given value---------*/
delimiter $$
create function getHighPriceProduct(pricerate numeric)
returns varchar(40)
deterministic
begin 
declare pname varchar(50);
select ProductName into pname from Products where price>pricerate limit 1;
return pname;
end $$

select getHighPriceProduct(10);
