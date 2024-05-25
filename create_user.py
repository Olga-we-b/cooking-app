import pyodbc

server = 'OLGA\MSSQLSERVER01'
database = 'yumm'

connection = pyodbc.connect('DRIVER={ODBC Driver 18 for SQL Server}; SERVER='+server+';DATABASE='+database+';Trusted_Connection=yes;')