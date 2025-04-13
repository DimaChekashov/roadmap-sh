package utils

var currentId int

func MethodResponse(w http.ResponseWriter, r *http.Request, method string) {
	if r.Method != method {
		w.Header().Add("Allow", method)
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
}
