package main

import (
	"log/slog"

	"github.com/DimaChekashov/roadmap-sh/tree/main/backend-projects/05-unit-converter/handler"
	"github.com/DimaChekashov/roadmap-sh/tree/main/backend-projects/05-unit-converter/router"
	"github.com/DimaChekashov/roadmap-sh/tree/main/backend-projects/05-unit-converter/service"
)

func main() {
	log := slog.Default()

	service := service.NewService(log)

	handler := handler.NewHandler(log, service)

	router := router.NewRouter(log, handler)

	router.StartServer()
}
