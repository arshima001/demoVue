<template>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                    <div>
                        <h2>Vue.js + Vuelidate - Form Validation</h2>
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input type="text" v-model="user.firstName" id="firstName" name="firstName" class="form-control" @click="$v.user.firstName.$touch()" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" />
                                <div v-if="$v.user.firstName.$invalid && $v.user.firstName.$dirty" class="invalid-feedback">
                                    <span v-if="!$v.user.firstName.required">FirstName is required</span>
                                    <span v-else-if="$v.user.firstName.$invalid">FirstName is invalid</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" v-model="user.lastName" id="lastName" name="lastName" class="form-control" @click="$v.user.lastName.$touch()" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" />
                                <div v-if="$v.user.lastName.$invalid && $v.user.lastName.$dirty" class="invalid-feedback">
                                    <span v-if="!$v.user.lastName.required">LastName is required</span>
                                    <span v-else-if="$v.user.lastName.$invalid">LastName is invalid</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" v-model="user.email" id="email" name="email" class="form-control" @click="$v.user.email.$touch()" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                <div v-if="$v.user.email.$invalid && $v.user.email.$dirty" class="invalid-feedback">
                                    <span v-if="!$v.user.email.required">Email is required</span>
                                    <span v-else-if="$v.user.email.$invalid">Email is invalid</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="user.password" id="password" name="password" class="form-control" @click="$v.user.password.$touch()" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                <div v-if="$v.user.password.$dirty && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Password is required</span>
                                    <span v-else-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Confirm Password</label>
                                <input type="password" v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" @click="$v.user.confirmPassword.$touch()" class="form-control" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                                <div v-if="$v.user.confirmPassword.$dirty && $v.user.confirmPassword.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                                    <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary" :disabled='this.$v.$invalid'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

    export default {
        name: "app",
        data() {
            return {
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                },
                submitted: false
            };
        },
        validations: {
            user: {
                firstName: { required},
                lastName: { required },
                email: { required, email },
                password: { required, minLength: minLength(6) },
                confirmPassword: { required, sameAsPassword: sameAs('password') }
            }
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    console.log(this.$v.$invalid)
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
            },
            checking(v){
        console.log(v,'v')
        if(!v.$dirty){
            alert("email is wrong")
        }
            }
        },
        created(){
        console.log(this.$v.user)
      
        }
    };
</script>
<style>
 .invalid-feedback{
     color:red;
 }
</style>