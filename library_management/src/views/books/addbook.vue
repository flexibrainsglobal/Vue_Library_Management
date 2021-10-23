<template>
  <div class="p-5">
    <h5 style="color:grey;letter-spacing:10px"><strong>ADD BOOK</strong></h5>
    <hr />
    <div id="bookform" style="text-align:left">
      <form @submit.prevent="addBook()">
        <div class="form-group row">
          <label for="book_id" class="col-sm-2 col-form-label">Book ID</label>
          <div class="col-sm-10">
            <input
            v-model="book_id"
              type="number"
              class="form-control"
              id="book_id"
              placeholder="Book ID"
            />
          </div>
        </div>
         <div class="form-group row">
          <label for="book_name" class="col-sm-2 col-form-label">Book Name</label>
          <div class="col-sm-10">
            <input
            v-model="book_name"
              type="text"
              class="form-control"
              id="book_name"
              placeholder="Book Name"
            />
          </div>
        </div>
         <div class="form-group row">
          <label for="book_edition" class="col-sm-2 col-form-label">Book Edition</label>
          <div class="col-sm-10">
            <input
            v-model="book_edition"
              type="date"
              class="form-control"
              id="book_edition"
              placeholder="Book Edition"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="book_department" class="col-sm-2 col-form-label"
            >Book Department</label
          >
          <div class="col-sm-10">
            <input
            v-model="book_department"
              type="text"
              class="form-control"
              id="book_department"
              placeholder="Book Department"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="total_books" class="col-sm-2 col-form-label"
            >Total Books</label
          >
          <div class="col-sm-10">
            <input
            v-model="total_books"
              type="number"
              class="form-control"
              id="total_books"
              placeholder="Total Books"
            />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Add Book</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "AddStuddent",
  data() {
    return {
        book_id:null,
        book_name:null,
        book_edition:null,
        book_department:null,
        total_books:null,
        
    };
  },
  mounted() {},
  methods: {
    addBook() {
        var BookData = {
                "id": Math.floor((Math.random()*1000)+1),
                "book_id": this.book_id,
                "book_name": this.book_name,
                "book_edition": this.book_edition,
                "book_department": this.book_department,
                "available_copies": this.total_books,
                "issued_copies": 0,
                "total_books": this.total_books
                }
            console.log(BookData)
            axios.post('http://localhost:3000/books',BookData)
            .then(function(){
                alert("Book is Added")
            })
            .catch(function(){
                alert("Error Occured")
            })

    },
  },
};
</script>
<style></style>
