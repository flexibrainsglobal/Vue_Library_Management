<template>
  <div class="p-5">
    <h5 style="color:grey;letter-spacing:10px"><strong>STUDENT LIST</strong></h5>
    <hr />
    <div id="tablesection">
        
    </div>
    
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "StudentList",
  data() {
    return {};
  },
  mounted() {
    this.getStudentList();
    
  },
  methods: {
    getStudentList() {
        document.getElementById('tablesection').innerHTML=""
        document.getElementById('tablesection').innerHTML=`<table id="studentlist" style="width:100%"></table>`
        var _this = this
      axios
        .get("http://localhost:3000/students")
        .then(function(response) {
          console.log(response.data);
          
          let tableHeaders = [
              {
                  data:"roll_no",
                  title:"Roll Number",
              },
              {
                  data:"first_name",
                  title:"First Name",
              },
              {
                  data:"last_name",
                  title:"Last Name",
              },
              {
                  data:"Class",
                  title:"Class",
              },
              {
                  data:"division",
                  title:"Divison",
              },
              {
                  data:"dues",
                  title:'Dues',
              },
              {
                  data:"issued_books",
                  title:"Issued Books",
              },
              {
                  data:"roll_no",
                  title:"Delete Student",
                  render:function(){
                      return "<i id='delete' class='fas fa-trash-alt'></i>"
                  }
              }
          ]

          window.$("#studentlist").DataTable({
             data:response.data,
             columns:tableHeaders
         })

         window.$("#studentlist").on('click','#delete',function(){
             var table = window.$('#studentlist').DataTable();
             var data = table.row(window.$(this).closest('tr')).data()
             console.log(data)
             _this.deleteUser(data.id)
         })
          
          
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteUser(id){
        var _this = this
        axios.delete('http://localhost:3000/students/'+id)
        .then(function(){
            alert("Student is Deleted")
            _this.getStudentList()
        })
        .catch(function(){
            alert("Student is not Deleted")
        })
    }
  },
};
</script>
<style></style>
