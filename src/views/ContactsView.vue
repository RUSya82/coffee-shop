<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component/>
          </div>
        </div>
        <h1 class="title-big">Contact us</h1>
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">

            <form @submit.prevent="sendForm($event)" action="#" class="mt-5" ref="form">
              <div class="form-group row ">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input v-model="v$.name.$model" type="text" class="form-control" id="name-input">
                  <div class="error-wrapper">
                    <span class="error-message" v-for="error in v$.name.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                  </div>

                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input v-model="v$.email.$model" type="email" class="form-control" id="email-input">
                  <div class="error-wrapper">
                  <span class="error-message" v-for="error in v$.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0">
                    Phone
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input v-model="v$.phone.$model" type="tel" class="form-control" id="phone-input">
                  <div class="error-wrapper">
                  <span class="error-message" v-for="error in v$.phone.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                  </div>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-center">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12">
                                    <textarea v-model="v$.message.$model" class="form-control" name="message"
                                              id="message" rows="5"
                                              placeholder="Leave your comments here"></textarea>
                  <div class="error-wrapper">
                  <span class="error-message" v-for="error in v$.message.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span><br>
                    <span class="show-message" v-text="message" ></span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import NavbarComponent from "../components/NavbarComponent";
import useVuelidate from '@vuelidate/core'
import {required, email, maxLength} from '@vuelidate/validators'
import {helpers} from '@vuelidate/validators'
import {minlength} from "../validators/minLength";


export default {
  components: {NavbarComponent},
  setup() {
    return {v$: useVuelidate()}
  },
  validations() {
    return {
      name: {required},
      phone: {},
      email: {required, email},
      message: {
        required,
        maxLength: maxLength(20),
        minlength: helpers.withMessage('value must be above 5', minlength)
      }
    }
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      message: ''
    }
  },
  methods: {
    showText(text){
      console.log(text)
    },
    async sendForm(event) {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      const message = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      }
      fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
      .then(data => {
        this.$refs.form.reset();
        console.log("message send")
      })
    }
  },
}
</script>
<style scoped lang="scss">
.error-wrapper {
  min-height: 20px;

  .error-message {
    font-size: 0.8rem;
    color: #e31212;

  }
}
.show-message{
  white-space: pre-line
}

</style>