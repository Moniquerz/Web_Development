Task 1:Please find all employees that have a salary greater than 3000 and less than 4000
using AND operator and using BETWEEN operator

    SELECT employee_id, first_name,last_name, salary
    FROM employees 
    WHERE salary BETWEEN 30000 AND 40000; 

Task 2: List the employees whose last name is longer than 6 characters. 
In this query, return the first 6 characters of their last names, the jobs they perform and their salary.

    SELECT LEFT(last_name, 6), job_id, salary
    FROM employees
    WHERE length(last_name) >6;

Task 3:
Please find all employees that have a salary greater than 8000, and those hired after 1996 (use implicit conversion of a date as a string to the DATE type).
Create a separate query to find the lowest salary in the company (look for a SQL math function from references or Google search which allows you find the minimum in a set or a column).
In the first query you wrote above, please also report the employee's total compensation (salary + commission, if any) as a percentage of the minimum salary in the company from the #2 above.

    SELECT *
    FROM hr.employees
    WHERE salary > 8000 OR EXTRACT(YEAR FROM hire_date) > 1996;

    SELECT 
        MIN(salary)
    FROM employees;

Task 4:
List the full names and their department names of the all employees in the "bootcamp" database. Do the same for the employees that work for department "Sales". Order the results by hiring date with the most recent hires at the top.

    SELECT first_name || ' ' || last_name AS "Full Name", department_name AS "Department"
    FROM hr.employees e 
        LEFT JOIN hr.departments d
        ON e.department_id = d.department_id
    ORDER BY hire_date DESC;

    
    SELECT first_name || ' ' || last_name AS "Full Name", department_name AS "Department"
    FROM hr.employees e 
        LEFT JOIN hr.departments d
        ON e.department_id = d.department_id
    WHERE department_name = 'Sales'
    ORDER BY hire_date DESC;


Task 5:
List the first, last, email, department name and city of all employees that are Execs.

