import { createRouter, createWebHistory } from 'vue-router'
import StudentList from "../views/students/studentlist.vue"
import AddStuddent from "../views/students/addstudent.vue"
import BooksReport from "../views/reports/booksreport.vue"
import BookList from "../views/books/booklist.vue"
import AddBook from "../views/books/addbook.vue"
import IssueBook from "../views/books/issuebook.vue"
import ReturnBook from "../views/books/returnbook.vue"



const routes = [
  {
    path: '/',
    name: 'StudentList',
    component: StudentList
  },
  {
    path: '/AddStuddent',
    name: 'AddStuddent',
    component: AddStuddent
  },
  {
    path: '/BooksReport',
    name: 'BooksReport',
    component: BooksReport
  },
  {
    path: '/BookList',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/AddBook',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/IssueBook',
    name: 'IssueBook',
    component: IssueBook
  },
  {
    path: '/ReturnBook',
    name: 'ReturnBook',
    component: ReturnBook
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
