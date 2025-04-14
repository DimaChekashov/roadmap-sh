package utils

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/go-chi/chi/v5"
)

var currentId int

func MethodResponse(w http.ResponseWriter, r *http.Request, method string) {
	if r.Method != method {
		w.Header().Add("Allow", method)
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
}

func GetID(w http.ResponseWriter, r *http.Request) int {
	id := chi.URLParam(r, "id")
	idInt, err := strconv.Atoi(id)
	if err != nil {
		WriteJsonError(w, "Invalid ID", http.StatusBadRequest, err)
		return 0
	}
	return idInt
}

type Response struct {
	Message string      `json:"message"`
	Error   string      `json:"error,omitempty"`
	Data    interface{} `json:"data,omitempty"`
	Success bool        `json:"success,omitempty"`
}
