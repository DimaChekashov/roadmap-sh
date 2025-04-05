package expense

import (
	"fmt"
	"strings"
	"time"

	"github.com/DimaChekashov/roadmap-sh/tree/main/backend-projects/03-expense-tracker/internal/log"
	"github.com/charmbracelet/lipgloss"
)

type Expense struct {
	ID          int64     `json:"id"`
	Description string    `json:"description"`
	Amount      float64   `json:"amount"`
	Category    string    `json:"category"`
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`
}

func NewExpense(id int64, description string, amount float64, category string) *Expense {
	return &Expense{
		ID:          id,
		Description: description,
		Amount:      amount,
		Category:    category,
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}
}

func AddExpense(description string, amount float64, category string) error {
	expenses, err := ReadExpensesFromFile()
	if err != nil {
		return err
	}

	var newExpenseId int64
	if len(expenses) == 0 {
		newExpenseId = 1
	} else {
		newExpenseId = expenses[len(expenses)-1].ID + 1
	}

	thisMonth := time.Now().Month()
	thisMonthBudget, err := GetMonthlyBudget(int32(thisMonth))
	if err != nil {
		return err
	}

	newExpense := NewExpense(newExpenseId, description, amount, category)
	expenses = append(expenses, *newExpense)

	thisMonthExpenses := 0.0
	for _, expense := range expenses {
		if expense.CreatedAt.Month() == thisMonth {
			thisMonthExpenses += expense.Amount
		}
	}

	if thisMonthBudget != 0 && thisMonthExpenses > thisMonthBudget {
		log.Warning(fmt.Sprintf("You have exceeded your budget for this month. Budget: %.2f, Expenses: %.2f", thisMonthBudget, thisMonthExpenses))
	}

	log.Info(fmt.Sprintf("Expense added: %s, Amount: %.2f, Category: %s (ID: %d)", description, amount, category, newExpenseId))
	return WriteExpensesToFile(expenses)
}
