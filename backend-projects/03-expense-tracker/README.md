# Expense Tracker

Run the following command to build and run the project:

```bash
go build -o expense-tracker
./expense-tracker --help # To see the list of available commands

# To add an expense
./expense-tracker add --description "Buy groceries" --amount 100 --category "Groceries"

# List all expenses
./expense-tracker list
./expense-tracker list --category "Groceries"

# Delete an expense
./expense-tracker delete 1

# Summarize expenses
./expense-tracker summary
./expense-tracker summary --month 8

# Budget for a month
./expense-tracker budget --month 8 --amount 1000
```