IN CLASS QUERY EXAMPLES:

Select the country name and region id from the countries table where the region id is less than 3
   
    SELECT 
    country_name , region_id
    FROM  countries
    WHERE region_id < 3;


Select the country name and region id from the countries table where the region id is 3 or 5 

    SELECT country_name , region_id
    FROM countries
    WHERE region_id = 3 OR region_id = 5;


Retrieve only the commissioned employess 

    SELECT employee_id, last_name, salary, commission_pct
    FROM employees
    WHERE commission_pct IS NOT NULL;

List employees from dept 80
    SELECT *
    FROM employees 
    WHERE department_id = 80;

List employees who make more than 80000
    SELECT *
    FROM employees 
    WHERE salary > 80000;

List first and last name of employees whos last name starts with a K
    SELECT first_name, last_name
    FROM employees 
    WHERE last_name LIKE 'K%';


Selects location ordering them by city 
    SELECT *
    FROM locations
    Order by city;

Selects locations, ordering them by postal code
    SELECT city, postal_code
    FROM hr.locations
    Order by postal_code;

Select location, order by descending country id and ascending postal code 
    SELECT *
    FROM locations
    Order by country_id ASC, postal_code DESC;


List full names, salaries, and commission, then adds an extra 10 basis points 
    SELECT last_name, first_name, salary, commission_pct,
        COALESCE (commission_pct, 0) +.10
    FROM employees LIMIT 10;


Same thing as the last one, but creating an alias for first name and last name concatinated 

SELECT last_name || first_name AS "Full Name",
        COALESCE (commission_pct, 0) +.10
    FROM employees LIMIT 10;


Selects all employess that make more than the average salary
    SELECT first_name, salary
    FROM hr.employees
    WHERE salary >= 
        (SELECT AVG (salary)
        FROM hr.employees);



We created an alias for fist_name and last_name concatenated 

SELECT first_name || ' ' || last_name as full_name,
        department_id
FROM employees
WHERE department_id IN (SELECT department_id
                        FROM departments
                        WHERE location_id = (SELECT location_id
                                            FROM locations
                                            WHERE city = 'Seattle'));

 

SELECT first_name || ' ' || last_name as full_name,
        department_name,
        dept.department_id
FROM employees emp
  JOIN departments dept ON emp.department_id = dept.department_id
  JOIN locations loc ON dept.location_id = loc.location_id
WHERE city = 'Seattle'
ORDER BY department_name;


List all employees and their managers by their full names 

SELECT emp.first_name || ' ' || emp.last_name as "Emp Full Name",
        mgr.first_name || ' ' || mgr.last_name as manager_full_name
FROM employees emp LEFT JOIN hr.employees mgr ON emp.manager_id = mgr.employee_id;