<template>
  <div class="p-5">
    <h5 style="color:grey;letter-spacing:10px"><strong>Book List</strong></h5>
    <hr />
    <div id="tablesection">
        
    </div>
    
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "BookList",
  data() {
    return {};
  },
  mounted() {
    this.getBookList();
    
  },
  methods: {
    getBookList() {
        document.getElementById('tablesection').innerHTML=""
        document.getElementById('tablesection').innerHTML=`<table id="booklist" style="width:100%"></table>`
        var _this = this
      axios
        .get("http://localhost:3000/books")
        .then(function(response) {
          console.log(response.data);
          
          let tableHeaders = [
              {
                  data:"book_id",
                  title:"Book ID",
              },
              {
                  data:"book_name",
                  title:"Book Name",
              },
              {
                  data:"book_edition",
                  title:"Book Edition",
              },
              {
                  data:"book_department",
                  title:"Book Dept.",
              },
              {
                  data:"available_copies",
                  title:"Available Copies",
              },
              {
                  data:"issued_copies",
                  title:'Issued Copies',
              },
              {
                  data:"total_books",
                  title:"Total Books",
              },
              {
                  data:"id",
                  title:"Delete Book",
                  render:function(){
                      return "<i id='delete' class='fas fa-trash-alt'></i>"
                  }
              }
          ]

          window.$("#booklist").DataTable({
             data:response.data,
             columns:tableHeaders
         })

         window.$("#booklist").on('click','#delete',function(){
             var table = window.$('#booklist').DataTable();
             var data = table.row(window.$(this).closest('tr')).data()
             console.log(data)
             _this.deleteBook(data.id)
         })
          
          
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteBook(id){
        var _this = this
        axios.delete('http://localhost:3000/books/'+id)
        .then(function(){
            alert("Book is Deleted")
            _this.getBookList()
        })
        .catch(function(){
            alert("Book is not Deleted")
        })
    }
  },
};
</script>
<style></style>
