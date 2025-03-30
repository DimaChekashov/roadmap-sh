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

func ReadExpensesFromFile() ([]Expense, error) {
	filePath := expensesFilePath()

	_, err := os.Stat(filePath)
	if os.IsNotExist(err) {
		fmt.Println("File does not exist. Creating file...")
		file, err := os.Create(filePath)
		os.WriteFile(filePath, []byte("[]"), os.ModeAppend.Perm())

		if err != nil {
			return nil, err
		}

		defer file.Close()

		return []Expense{}, nil
	}

	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}

	defer file.Close()

	tasks := []Expense{}
	err = json.NewDecoder(file).Decode(&tasks)
	if err != nil {
		return nil, err
	}

	return tasks, nil
}
