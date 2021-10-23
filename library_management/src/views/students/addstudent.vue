<template>
  <div class="p-5">
    <h5 style="color:grey;letter-spacing:10px"><strong>ADD STUDENT</strong></h5>
    <hr />
    <div id="studentform" style="text-align:left">
      <form @submit.prevent="addStudent()">
        <div class="form-group row">
          <label for="firstname" class="col-sm-2 col-form-label">First Name</label>
          <div class="col-sm-10">
            <input
            v-model="firstname"
              type="text"
              class="form-control"
              id="firstname"
              placeholder="First Name"
            />
          </div>
        </div>
         <div class="form-group row">
          <label for="lastname" class="col-sm-2 col-form-label">Last Name</label>
          <div class="col-sm-10">
            <input
            v-model="lastname"
              type="text"
              class="form-control"
              id="lastname"
              placeholder="Last Name"
            />
          </div>
        </div>
         <div class="form-group row">
          <label for="rollnumber" class="col-sm-2 col-form-label">Roll Number</label>
          <div class="col-sm-10">
            <input
            v-model="rollnumber"
              type="text"
              class="form-control"
              id="rollnumber"
              placeholder="Roll Number"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="class" class="col-sm-2 col-form-label"
            >Class</label
          >
          <div class="col-sm-10">
            <input
            v-model="student_class"
              type="text"
              class="form-control"
              id="class"
              placeholder="Class"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="division" class="col-sm-2 col-form-label"
            >Division</label
          >
          <div class="col-sm-10">
            <input
            v-model="divsion"
              type="text"
              class="form-control"
              id="division"
              placeholder="Division"
            />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Add Student</button>
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
        firstname:null,
        lastname:null,
        rollnumber:null,
        student_class:null,
        division:null
    };
  },
  mounted() {},
  methods: {
    addStudent() {
        var studentData = {
            "id": Math.floor((Math.random()*1000)+1),
            "roll_no": this.rollnumber,
            "first_name": this.firstname,
            "last_name": this.lastname,
            "Class": this.student_class,
            "division": this.division,
            "dues":"0",
            "issued_books": 0
            }
            console.log(studentData)
            axios.post('http://localhost:3000/students',studentData)
            .then(function(){
                alert("Student is Added")
            })
            .catch(function(){
                alert("Error Occured")
            })

    },
  },
};
</script>
<style></style>
