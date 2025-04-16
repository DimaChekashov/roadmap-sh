package handlers

import (
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"
	"os"
	"time"

	"github.com/DimaChekashov/roadmap-sh/tree/main/backend-projects/06-personal-blog/pkg/models"
	"github.com/DimaChekashov/roadmap-sh/tree/main/backend-projects/06-personal-blog/pkg/utils"
)

func GetArticles() *[]models.Article {
	f, err := os.Open("pkg/data/articles.json")
	if err != nil {
		fmt.Println("Error opening file:", err)
		return nil
	}
	defer f.Close()
	var articles []models.Article
	json.NewDecoder(f).Decode(&articles)
	return &articles
}

func Home(w http.ResponseWriter, r *http.Request) {
	articles := GetArticles()
	if articles == nil {
		utils.WriteJsonError(w, "No articles found", http.StatusNotFound, nil)
		return
	}

	files := []string{
		"./ui/html/base.tmpl",
		"./ui/html/home.tmpl",
	}

	ts := template.Must(template.New("home").Funcs(template.FuncMap{
		"formatDate": utils.FormatDate,
	}).ParseFiles(files...))

	data := &models.ArticlesResponse{
		Articles: *articles,
	}

	if err := ts.ExecuteTemplate(w, "base", data); err != nil {
		utils.WriteJsonError(w, "Template execution error", http.StatusInternalServerError, err)
		return
	}
}
