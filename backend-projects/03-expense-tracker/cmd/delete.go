package cmd

import (
	"github.com/DimaChekashov/roadmap-sh/tree/main/backend-projects/03-expense-tracker/internal/expense"
	"github.com/spf13/cobra"
)

var DeleteExpenseId int64

func NewDeleteCmd() *cobra.Command {
	deleteCmd := &cobra.Command{
		Use:   "delete",
		Short: "Delete an expense",
		RunE: func(cmd *cobra.Command, args []string) error {
			return RunDeleteExpenseCmd(args)
		},
	}

	deleteCmd.Flags().Int64VarP(&DeleteExpenseId, "id", "i", 0, "ID of the expense to delete")
	return deleteCmd
}

func RunDeleteExpenseCmd(args []string) error {
	return expense.DeleteExpense(DeleteExpenseId)
}
