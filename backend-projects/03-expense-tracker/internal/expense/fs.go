package expense

import (
	"encoding/json"
	"fmt"
	"os"
	"path"
)

func expensesFilePath() string {
	cwd, err := os.Getwd()
	if err != nil {
		fmt.Println("Error getting current working directory:", err)
		return ""
	}

	return path.Join(cwd, "expenses.json")
}

func budgetsFilePath() string {
	cwd, err := os.Getwd()
	if err != nil {
		fmt.Println("Error getting current working directory:", err)
		return ""
	}

	return path.Join(cwd, "budgets.json")
}
