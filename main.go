package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)
type Form1 struct {
	Date string `json:"date"`
	SubjectNumber  int   `json:"subjectNumber"`
	TimetableNumber int  `json:"timetableNumber"`
}
type Form2 struct{
	Date string `json:"date"`
	TimetableNumber int `json:"timetableNumber"`
	TimetableNote string `json:"timetableNote"`
}
type Form3 struct{
	Date string `json:"date"`
	Message string `json:"message"`
}
func main() {
http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	var f1 Form1
	json.NewDecoder(r.Body).Decode(&f1)
	fmt.Println(f1)//postした内容を表示
	//w.Header().Set("Access-Control-Allow-Origin", "http://localhost:1234")//response
	//w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	//json.NewEncoder(w).Encode(f)
})
http.HandleFunc("/form2", func(w http.ResponseWriter, r *http.Request){
	var f2 Form2
	json.NewDecoder(r.Body).Decode(&f2)
	fmt.Println(f2)
})
http.HandleFunc("/form3", func(w http.ResponseWriter, r *http.Request){
	var f3 Form3
	json.NewDecoder(r.Body).Decode(&f3)
	fmt.Println(f3)
})
http.ListenAndServe(":8080", nil)
}